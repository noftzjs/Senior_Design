import React from 'react';

for (const btn of document.querySelectorAll('.vote')) {
  btn.addEventListener('click', event => {
    event.target.classList.toggle('on');
  });
}

const List = (props) => {
    const { posts } = props;
    if (!posts || posts.length === 0) return <p>No Submissions, sorry</p>;
    return (
      <div>
        {posts.map((posts) => {
          return (
            <div key={posts.title} class="card mb-2">
              <div class="container">
                <span class="vote">{posts.upVotes}</span>
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