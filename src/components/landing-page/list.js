import React from 'react';

const List = (props) => {
    const { posts } = props;
    if (!posts || posts.length === 0) return <p>No Submissions, sorry</p>;
    return (
      <div>
        {posts.map((posts) => {
          return (
            <div key={posts.title} class="card mb-2">
              <div class="container">
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