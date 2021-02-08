import React from 'react';

const Submission = ({ uploadID, title, description }) => {

  return (
    <div className="card mb-2">
        <article>
          <h1>{title} {uploadID}</h1>
          <p>{description}</p>
        </article>
    </div>
  )
}

export default Submission;