import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core';

import React, { useEffect, useState } from "react";
import Iframe from '../../providers/iframe';
import pdfFile from '../../documents/Undergraduate_Student_Government_Demographic_Report_20202021.pdf';
import './landing-page.css';
import Axios from 'axios';
import SimpleModal from '../modal/submit-modal';
import Submissions from "./Submissions";
//import ModalService from '../../providers/modal';

export const axios = Axios.create({
    baseURL: `http://localhost:9000`,
    headers: {
        'Content-type': `application/json`
    }
})

const LandingPage = () => {

    const [newSubmission, setNewSubmission] = useState("");
    const [submissions, setSubmissions] = useState([]);

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
                        {/* <ModalService></ModalService> */}
                    </div>
                    <div className="col-lg-6 col-centered">
                        <div style={{ columnCount: "2", columnWidth: "100%" }}>
                            <h1>Current Requests</h1>
                            <div style={{ float: "right" }}>
                                <SimpleModal></SimpleModal>
                            </div>
                        </div>
                        <hr />
                        <div className='post-container'>
                            <Submissions submissions={submissions} />
                            <div className="card mb-2">
                                <article>
                                    <Iframe source={pdfFile} style={{ height: "100%" }} />
                                    <hr />
                                    <button type="submit" class="btn btn-primary">Comment</button>
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