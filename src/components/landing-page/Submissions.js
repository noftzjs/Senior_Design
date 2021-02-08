import React from 'react';
import Submission from './Submission';

const Submissions = ({ submissions }) => {
    return (
        <>
            {submissions.map(submission => {
                return <Submission key={submission.uploadID} {...submission} />
            }
            )}
        </>
    )
}

export default Submissions;