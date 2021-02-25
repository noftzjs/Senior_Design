import Axios from 'axios';
import React from 'react';



const List = (props) => {
    const { posts } = props;
    if (!posts || posts.length === 0) return <p>No Submissions, sorry</p>;

    return (
      <div>
        {posts.map((submissions) => {
          function upVoteSub() { //this might be causing some loading issues
            Axios.put(`http://localhost:9000/submissions/upVote/${submissions.uploadID}`)
            .then(res => console.log(res.data))
            .then(console.log(submissions.uploadID))
          }
          return (
            <div key={posts.title} class="card mb-2">
              <div class="container">
                <div>
                  <button type="button" class="btn btn-primary vote" onClick={upVoteSub}>
                     Upvote <span class="badge badge-light voteCount">{submissions.upVotes}</span>
                  </button>
                </div>
                <h3 class="post-title">{submissions.title}</h3>
                <p class="post-dis">{submissions.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  export default List;