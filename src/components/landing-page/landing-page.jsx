import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core';

import React, { useEffect, useState } from "react";
import './landing-page.css';
import Axios from 'axios';
import SimpleModal from '../modal/submit-modal';
import Submissions from "./Submissions";

export const axios = Axios.create({
    baseURL: `http://localhost:9000`,
    headers: {
        'Content-type': `application/json`
    }
})

const LandingPage = () => {

    const [newSubmission, setNewSubmission] = useState("");
    const [submissions, setSubmissions] = useState([]);

    // const HandleSubmit = (e) => {
    //     e.preventDefault()
    //     if(!newSubmission) {

    //     } else {
    //         const addSubmission = {
    //             title: 
    //         }
    //     }
    // }

    const getSubmissions = () => {
        axios.get('submissions')
            .then(response => setSubmissions(response.data))
    }

    useEffect(() => {
        getSubmissions();
    }, []);

    return (
        <main>
            <div className="">
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-lg-6 col-centered">
                        <div style={{ columnCount: "2", columnWidth: "100%" }}>
                            <h1>Current Requests</h1>
                            <div style={{float: "right"}}>
                                <SimpleModal></SimpleModal>
                            </div>
                        </div>
                        <hr />
                        <div className='post-container'>
                            <Submissions submissions={submissions} />
                        </div>
                    </div>
                    <div className="col-3">
                        {/* <Submissions></Submissions> */}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LandingPage;