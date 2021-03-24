import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core';

import React, { useEffect, useState } from "react";
import Iframe from '../../providers/iframe';
import pdfFile from '../../documents/Undergraduate_Student_Government_Demographic_Report_20202021.pdf';
import './landing-page.css';
import Axios from 'axios';
import Submissions from "./Submissions";
import Modal from '@material-ui/core/Modal';


export const axios = Axios.create({
    baseURL: `http://localhost:9000`,
    headers: {
        'Content-type': `application/json`
    }
})

const LandingPage = () => {


    const [newSubmission, setNewSubmission] = useState({
        uploadID: "1",
        title: "",
        discription: "",
        upVotes: "0",
        userID: "2"
    });
    const [showGuidelines, setShowGuidelines] = useState(false);
    const [submissions, setSubmissions] = useState([]);
    const [topSubmissions, setTopSubmissions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const uploadID = 1

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
        setIsLoading(false)
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
                    <hr />
                    <div className="flex-container">
                        <button type="submit" onClick={() => setIsLoading(false)} className="btn btn-primary">Submit</button>
                        <div className="push">
                            <label className="anonymous">Post Anonymously</label>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
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
            <div className="">
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-lg-6 col-centered">
                        <div style={{ columnCount: "2", columnWidth: "100%" }}>
                            <h1>Current Requests</h1>
                            <div style={{ float: "right" }}>
                                <div>
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
                        <hr />
                        <div className='post-container'>
                            <Submissions submissions={submissions} />
                            {/* <div className="card mb-2">
                                <article>
                                    <Iframe source={pdfFile} style={{ height: "100%" }} />
                                    <hr />
                                    <button type="submit" className="btn btn-primary">Comment</button>
                                </article>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-3">
                        <h2 className="guidelines-header minimize" onClick={() => setShowGuidelines(!showGuidelines)}>Posting Guidelines</h2>
                        <hr />
                        {showGuidelines && <Guidelines />}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LandingPage;