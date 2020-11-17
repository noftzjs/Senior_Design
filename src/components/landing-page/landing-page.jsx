import React, { Component, useEffect, useState } from "react";
import {
     MDBIcon, MDBBadge
} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './landing-page.css';
import List from './list';
import withListLoading from './withListLoading';
import Submissions from '../submission-component/index'
import topSubmissions from "./topSubs";


function LandingPage() {
    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        posts: null,
    });

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `http://localhost:9000/submissions/`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((posts) => {
                setAppState({ loading: false, posts: posts });
            });
    }, [setAppState]);
    return (
        <div class="">
            <div class="row">
                <div class="col-3">
                    <h1 class="mt-2">Top</h1>
                    <hr />
                    <topSubmissions></topSubmissions>
                </div>
                <div class="col-lg-6 col-centered">
                    <h1 class="mt-2">Submission</h1>
                    <hr />
                    <div class='post-container'>
                        <ListLoading isLoading={appState.loading} posts={appState.posts} />
                    </div>
                </div>
                <div class="col-3">
                    <Submissions></Submissions>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;