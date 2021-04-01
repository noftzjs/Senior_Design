import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../providers/AuthContext';
import Axios from 'axios';
import './landing-page.css'
import Modal from '@material-ui/core/Modal';

export const axios = Axios.create({
  baseURL: `http://localhost:9000`,
  headers: {
    'Content-type': `application/json`
  }
})

const Submission = ({ uploadID, title, description, upVotes, userID, anonymous }) => {

  const { username } = useContext(AuthContext);
  const { isLoggedin } = useContext(AuthContext);
  const [showComment, setShowComment] = useState(false);
  const [subComments, setSubComments] = useState([]);
  const [submitter, setSubmitter] = useState("");
  const [commenter, setCommenter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const fetchUsername = () => {
    axios.get(`Users/${userID}`)
      .then(response => setCommenter(response.data))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getSubmitter = await (
          axios.get(`Users/${userID}`)
            .then(response => setSubmitter(response.data))
        );
        const getCommenter = await (
          axios.get('comments/uploadID/' + uploadID)
            .then(response => setSubComments(response.data))
            .then(fetchUsername())
        );
        setIsLoading(true)
      } catch (error) {

      }
    }
    fetchData()

  }, [isLoading]);

  const CommentSection = () => {

    const [newComment, setNewComment] = useState({
      userID: 1,
      uploadID: uploadID,
      comment: ""
    });
    //Comment userID needs to be pulled in from useContext

    const [alert, setAlert] = useState(false);

    const postComment = (e) => {
      if (newComment.comment.length === 0) {
        setAlert(true)
        return;
      }
      e.preventDefault()
      axios.post('comments', newComment)
        .then(response => {
          console.log(response)
          setIsLoading(true)
        })
        .catch(error => {
          console.log(error);
        })
      setAlert(false)
      setIsLoading(false)
    }

    const changeHandler = (e) => {
      setNewComment({ ...newComment, [e.target.name]: e.target.value });
    }

    return (
      <form className="search-results">
        <textarea
          placeholder="What are your thoughts?"
          minrows={2}
          name="comment"
          type="text"
          onChange={changeHandler}
          required
        />
        {alert && <p>Requires text to submit</p>}
        <div className="panel">
          <div className="comment_as">
            {/* Comment as {" "} */}
            <a href="" className="username">
            </a>
          </div>
          <button disabled={!isLoggedin ? true : false} className="btn btn-danger" onClick={postComment}>COMMENT</button>
          <div className="comment-thread">
            <Comment />
          </div>
        </div>
      </form>
    );
  }

  //The Commenter is still pulling the UserID of the submitter of the post. This needs to be fixed.
  const Comment = () => {
    return (
      <div>
        {subComments.map(subComments => <div className="comment" key={subComments.commentID}>
          <div className="comment-heading">
            <div className="comment-body">
              <ComUsername /> - {subComments.comment}
            </div>
          </div>
        </div>)}
      </div>
    )
  }

  const ComUsername = () => {
    return (
      <>
        {commenter.name}
      </>
    );
  }

  const SubUsername = () => {
    return (
      <>
        {submitter.name}
      </>
    );
  }

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const body = (
    <div className="center modal-bg">
      {<article>
        <span>
          <h1>{title}</h1>
          {/* <h2 className="vote">{upVotes}</h2> */}
        </span>
        <p>{description}</p>
        <p>Submitted By {<SubUsername />}</p>
        <hr />
        <span className="minimize" onClick={() => setShowComment(!showComment)}>Comments [{showComment ? "-" : "+"}]</span>
        {showComment && <CommentSection />}
      </article>}
    </div>
  )

  return (
    <div className="card border-danger mb-3">
      <>
        <span>
          <h1 className="submission-title card-title" type="button" onClick={handleOpen}>{title}</h1>
          {/* <h2 className="vote">{upVotes}<button className="arrow up"></button><button className="arrow down"></button></h2> */}
          <div>
            <Modal
              open={isOpen}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
          </div>
        </span>
        <div className="card-footer bg-transparent border-danger" style={{ columnCount: "2", columnWidth: "100%" }}>
          <div>Submitted By {<SubUsername />}</div>
          <div style={{ float: "right" }}>{upVotes} <button className="far fa-heart"></button></div>
        </div>
        {/* <p className="card-text">Submitted By {<SubUsername />}</p> */}
      </>
    </div>
  )
}

export default Submission;