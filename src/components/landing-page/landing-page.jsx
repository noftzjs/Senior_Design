import React, { Component, useEffect, useState } from "react";
import {
    MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon,
    MDBBadge
} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './landing-page.css';
import List from './list';
import withListLoading from './withListLoading';
import Submissions from '../submission-component/index'


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
                <div class="col-3"></div>
                <div class="col-lg-6 col-centered">
                    <h1 class="mt-2">Posts</h1>
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

class Post extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="media mt-1">
                    <h3 className="h3-responsive font-weight-bold mr-3">
                        {this.props.time}
                    </h3>
                    <div className="media-body mb-3 mb-lg-3">
                        <MDBBadge
                            color="danger"
                            className="ml-2 float-right"
                            onClick={() => this.props.onDelete(this.props.id)}
                        >
                            -
            </MDBBadge>
                        <h6 className="mt-0 font-weight-bold">{this.props.title} </h6>{" "}
                        <hr className="hr-bold my-2" />
                        {this.props.location && (
                            <React.Fragment>
                                <p className="font-smaller mb-0">
                                    <MDBIcon icon="location-arrow" /> {this.props.location}
                                </p>
                            </React.Fragment>
                        )}
                    </div>
                </div>
                {this.props.description && (
                    <p className="p-2 mb-4  blue-grey lighten-5 blue-grey lighten-5">
                        {this.props.description}
                    </p>
                )}
            </React.Fragment>
        );
    }
}

export default LandingPage;