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
    baseURL: `https://studentlifebackend.herokuapp.com/`,
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
        userID: "1"
    });

    const [submissions, setSubmissions] = useState([]);
    const [submissionName, SetSubmissionName] = useState("")
    const [open, setOpen] = useState(false);

    const uploadID = 1

    // const getSubmissions = () => {
    //     axios.get('submissions')
    //         .then(response => setSubmissions(response.data))
    // }


    const postSubmission = (e) => {
        e.preventDefault()
        axios.post('submissions', newSubmission)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            })
        handleClose();
        // getSubmissions();
    }



    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const changeHandler = (e) => {
        setNewSubmission({ ...newSubmission, [e.target.name]: e.target.value });
    }

    const getSubmissions = () => {
        axios.get('submissions')
            .then(response => setSubmissions(response.data))
    };
    const getSubmissionUser = () => {
        axios.get('Users/' + 1)
            .then(response => SetSubmissionName(response.data))
    }

    useEffect(() => {

        const getSubmissions = async () => {
            axios.get('submissions')
                .then(response => setSubmissions(response.data))
        };
        getSubmissions();
    }, [newSubmission]);

    // useEffect(() => {
    //     Axios.all([getSubmissions(), getSubmissionUser()])
    //         .then(Axios.spread(function (subs, subUsers) {
    //         }))
    // })

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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );

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
                                    <button type="button" className="btn btn-primary" onClick={handleOpen}>
                                        New Submission</button>
                                    <Modal
                                        open={open}
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
                            <div className="card mb-2">
                                <article>
                                    <Iframe source={pdfFile} style={{ height: "100%" }} />
                                    <hr />
                                    <button type="submit" className="btn btn-primary">Comment</button>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LandingPage;
