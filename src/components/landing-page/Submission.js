import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './landing-page.css'

export const axios = Axios.create({
  baseURL: `http://localhost:9000`,
  headers: {
    'Content-type': `application/json`
  }
})

const Submission = ({ uploadID, title, description, upVotes, userID }) => {

  const [showComment, setShowComment] = useState(false)
  const [subComments, setSubComments] = useState([])
  const [submitter, setSubmitter] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  // const getSubmitter = () => {
  //   axios.get('users/' + userID)
  //     .then(response => setSubmitter(response.name))
  // }

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
        );
        setIsLoading(true)
      } catch (error) {

      }
    }
    fetchData()

  }, [isLoading]); //This should be changed to onNewComment submissions. But I currently don't have that added yet. 

  const CommentSection = () => {

    return (
      <div className="search-results">
        <textarea
          placeholder="What are your thoughts?"
          minrows={2}
          defaultValue=""
        // onChange={value => {
        //   setText(value.target.value);
        // }}
        />
        <div className="panel">
          <div className="comment_as">
            Comment as {" "}
            <a href="" className="username">

            </a>
          </div>
          <button className="btn btn-primary">COMMENT</button>
          <hr />
          <div className="comment-thread">
            <Comment />
          </div>
        </div>
      </div>
    );
  }

  const Comment = () => {
    return (
      <div className="comment">
        <div className="comment-heading">
          <div className="comment-voting">
            <button type="button">
              <span aria-hidden="true">&#9650;</span>
              <span className="sr-only">Vote up</span>
            </button>
            <button type="button">
              <span aria-hidden="true">&#9660;</span>
              <span className="sr-only">Vote down</span>
            </button>
          </div>
          <div className="comment-body">
            {subComments.map(subComments => <p key={subComments.commentID}>{subComments.comment}</p>)}
          </div>
        </div>
      </div>
    )
  }

  const Username = () => {
    return (
      <>
        {submitter.name}
      </>
    );
  }

  return (
    <div className="card mb-2">
      <article>
        <span>
          <h1>{title}</h1>
          <h2 className="vote">{upVotes}<button className="arrow up"></button><button className="arrow down"></button></h2>
        </span>
        <p>{description}</p>
        <p>Submitted By <Username /></p>
        <hr />
        <span className="minimize" onClick={() => setShowComment(!showComment)}>Comments [{showComment ? "-" : "+"}]</span>
        {showComment && <CommentSection />}
      </article>
    </div>
  )
}

export default Submission;