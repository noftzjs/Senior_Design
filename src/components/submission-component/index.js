import React, { Component } from 'react';

class Submissions extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch("http://localhost:9000/posts/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then((response) => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            console.log(response)
            return response.json();
        }).then((respData) => {
            console.log(respData);
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div class="mt-4">
                <h1>Submissions</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="Title">Title</label>
                    <input id="Title" name="Title" type="text" />
                    <hr />
                    <label htmlFor="discription">discription</label>
                    <input id="discription" name="discription" type="" />
                    <hr />
                    <label htmlFor="upVotes">Support? 0/1</label>
                    <input id="upVotes" name="upVotes" type="text" />
                    <hr />
                    <label htmlFor="userID">UserID: 1/2</label>
                    <input id="userID" name="userID" type="text" />
                    <hr />
                    <button>Submit</button>
                </form>
            </div>

        );
    }
}

export default Submissions;