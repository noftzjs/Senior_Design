import Axios from 'axios';
import React from 'react';



const List = (props) => {
    const { posts } = props;
    if (!posts || posts.length === 0) return <p>No Submissions, sorry</p>;

    return (
      <div>
        {posts.map((posts) => {
          function upVoteSub() { //this might be causing some loading issues
            Axios.put(`http://localhost:9000/submissions/upVote/${posts.uploadID}`)
            .then(res => console.log(res.data))
            .then(console.log(posts.uploadID))
          }
          return (
            <div key={posts.title} class="card mb-2">
              <div class="container">
                <div>
                  {/* <span class="vote"></span> */}
                  <button class="vote" onClick={upVoteSub}></button>
                  <span class="voteCount">{posts.upVotes}</span>
                </div>
                <h3 class="post-title">{posts.title}</h3>
                <p class="post-dis">{posts.discription}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  export default List;