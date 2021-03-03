import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export const axios = Axios.create({
  baseURL: `http://localhost:9000`,
  headers: {
    'Content-type': `application/json`
  }
})

const Submission = ({ uploadID, title, description, upVotes, userID }) => {

  const [showComment, setShowComment] = useState(false)

  //const onClick = () => setShowComment(true)

  // const getComments = (uploadID) => {
  //   axios.get('comments')
  //     .then(response => setSubmissions(response.data))
  // }



  return (
    <div className="card mb-2">
      <article>
        <span>
          <h1>{userID}{title}</h1>
          <h2 className="vote">{upVotes}<button className="arrow up"></button><button className="arrow down"></button></h2>
        </span>
        <p>{description}</p>
        <p>Submitted By {userID}</p>
        <hr />
        <span className="minimize" onClick={() => setShowComment(!showComment)}>Comments [{showComment ? "+" : "-"}]</span>
        {showComment && <CommentSection />}
      </article>
    </div>
  )
}

const CommentSection = () => {

  return (
    <div className="search-results">
      <textarea
        placeholder="What are your thoughts?"
        minRows={2}
        defaultValue=""
      // onChange={value => {
      //   setText(value.target.value);
      // }}
      />
      <div className="panel">
        <div className="comment_as">
          Comment as{" "}
          <a href="" className="username">

          </a>
        </div>
        <button className="btn btn-primary">COMMENT</button>
      </div>
    </div>
  );
};



export default Submission;