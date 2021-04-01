import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core';

import React, { useEffect, useState, useContext, useCallback } from "react";
import './landing-page.css';
import Axios from 'axios';
import Submissions from "./Submissions";
import Modal from '@material-ui/core/Modal';
import { AuthContext } from '../../providers/AuthContext';


export const axios = Axios.create({
    baseURL: `http://localhost:9000`,
    headers: {
        'Content-type': `application/json`
    }
})

const LandingPage = () => {

    const { username } = useContext(AuthContext);
    const { isLoggedin } = useContext(AuthContext);
    const [newSubmission, setNewSubmission] = useState({
        uploadID: "",
        title: "",
        discription: "",
        upVotes: "1",
        userID: "2",
        anonymous: false,
        repost: false,
        feedback: false,
        suggestion: false
    });

    const [showGuidelines, setShowGuidelines] = useState(false);
    const [submissions, setSubmissions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const postSubmission = (e) => {
        e.preventDefault()
        axios.post('submissions', newSubmission)
            .then(response => {
                console.log(response)
                setIsLoading(true)
            })
            .catch(error => {
                console.log(error);
            })
        setIsLoading(false);
        handleClose();
    }

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const changeHandler = (e) => {
        setNewSubmission({ ...newSubmission, [e.target.name]: e.target.value });
    }

    const toggleHandler = (e) => {
        setNewSubmission({ ...newSubmission, [e.target.name]: e.target.checked });
    }

    useEffect(() => {
        const getSubmissions = async () => {
            axios.get('submissions')
                .then(response => setSubmissions(response.data))
        };
        getSubmissions();
    }, [isLoading]);

    const body = (
        <div className="center modal-bg">
            <div className="form-group">
                <h1>New Submission</h1>
                <hr />
                <form onSubmit={postSubmission}>
                    <label htmlFor="title">Title</label>
                    <input
                        className="form-control"
                        name="title"
                        type="text"
                        // value={title}
                        onChange={changeHandler}
                        required
                    />
                    <hr />
                    <label htmlFor="description">Description</label>
                    <div>
                        <textarea
                            rows="12"
                            className="form-control desBox"
                            name="description"
                            type="text"
                            // value={description}
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <div className="btn-group" data-toggle="buttons">
                        <label className="btn btn-danger">
                            <input onChange={toggleHandler} type="checkbox" name="repost" id="option1" /> Repost
                        </label>
                        <label className="btn btn-danger">
                            <input onChange={toggleHandler} type="checkbox" name="feedback" id="option2" /> Feedback
                        </label>
                        <label className="btn btn-danger">
                            <input onChange={toggleHandler} type="checkbox" name="suggestion" id="option3" /> Suggestion
                        </label>
                    </div>
                    <hr />
                    <div className="flex-container">
                        <button type="submit" onClick={() => setIsLoading(false)} className="btn btn-danger">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );

    const Guidelines = () => {
        return (
            <div>
                <ul>
                    <h3>What is acceptable:</h3>
                    <li>Constructive Criticism</li>
                    <li>An angry tone in a post that does not disparage another individual or group of people.</li>
                    <li>An angry tone that does not use profanity.</li>
                    <li>Anonymity due to posting about a confidential topic.</li>
                    <li>Being respectful while voicing need for improvement.</li>
                    <li>Clean images that help get your point across.</li>
                    <h3>What is unacceptable:</h3>
                    <li>Inappropriate images (if you have to ask yourself “is this appropriate?” it is likely not appropriate)</li>
                    <li>Slander</li>
                    <li>Libel</li>
                    <li>Victimizing an individual or a group of people.</li>
                    <li>Vulgarity</li>
                    <li>Criticism that is not constructive</li>
                </ul>
            </div>
        )
    };

    return (
        <main>
            <div className="jumbotron" id="mission-statement">
                <h1 className="display-4 text-white">Student Life+</h1>
                <p className="lead mission-statement">Student Life+ is the culmination of ideas from three University of Cincinnati Seniors to leave behind a better campus for underclassmen, providing an open dialogue between the University and the Student Body.</p>
            </div>
            <div>
                <hr />
                <div className="row">
                    <div className="col-2">
                        <div style={{ float: "right" }}>
                            <div>
                                {/* disabled={!isLoggedin ? true : false} */}
                                <button type="button" className="btn btn-danger" onClick={handleOpen}>
                                    New Submission</button>
                                <Modal
                                    open={isOpen}
                                    onClose={handleClose}
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                >
                                    {body}
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-centered">
                        {/* <div style={{ columnCount: "2", columnWidth: "100%" }}>
                            <h1>Current Requests</h1>
                        </div> */}
                        <div className='post-container'>
                            <Submissions submissions={submissions} />
                        </div>
                    </div>
                    <div className="col-4">
                        <h2 className="guidelines-header minimize" onClick={() => setShowGuidelines(!showGuidelines)}>Posting Guidelines</h2>
                        {showGuidelines && <Guidelines />}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LandingPage;