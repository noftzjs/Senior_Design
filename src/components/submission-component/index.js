import Axios from 'axios';
import React, { Component } from 'react';


class Submissions extends Component {

    constructor(props) {
        super(props)

        this.state = {
            uploadID: "1",
            title: "",
            discription: "",
            upVotes: "0",
            userID: "1",
        }
    }

    changeHandler = (e) => {
        this.setState({[ e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        Axios.post('http://localhost:9000/submissions', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        })
    }


    render() {
        const { uploadID, title, discription, upVotes, userID } = this.state
        return (
            <div className="form-group">
                <h1>New Submission</h1>
                <hr/>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="title">Title</label>
                    <input
                        class="form-control"
                        name="title"
                        type="text"
                        value={title}
                        onChange={this.changeHandler}
                    />
                    <hr />
                    <label htmlFor="discription">Description</label>
                    <textarea
                        rows="12"
                        class="form-control desBox"
                        name="discription"
                        type="text"
                        value={discription}
                        onChange={this.changeHandler}
                    />
                    <hr />
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Submissions;