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
// submitForm = async () => {
//     e.preventDefault();
//     console.log(this.state);
//     this.setState({ isSubmitting: true });

//     const res = await fetch("http://localhost:9000/submissions", {
//         method: "POST",
//         body: JSON.stringify(this.state.values),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });
//     this.setState({ isSubmitting: false });
//     const data = await res.json();
//     // !data.hasOwnProperty("error")
// };
// submitForm = async e => {
//     fetch("http://localhost:9000/submissions", {
//         method: "POST",
//         body: JSON.stringify(this.state.values),
//         headers: {
//             "Content-Type": "application/json; charset=UTF-8"
//         }
//     })
//     .then(response => response.json())
//     .then(json => console.log(json));
// }


// handleInputChange = e =>
// this.setState({
//   values: { ...this.state.values, [e.target.name]: e.target.value }
// })

// constructor() {
//     super();
//     this.handleSubmit = this.handleSubmit.bind(this);
// }


    //     fetch("http://localhost:9000/posts/", {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(data)
    //     }).then((response) => {
    //         if (response.status >= 400) {
    //             throw new Error("Bad response from server");
    //         }
    //         console.log(response)
    //         return response.json();
    //     }).then((respData) => {
    //         console.log(respData);
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }

    render() {
        const { uploadID, title, discription, upVotes, userID } = this.state
        return (
            <div>
                <h1>Submissions</h1>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="title">Title</label>
                    <input
                        name="title"
                        type="text"
                        value={title}
                        onChange={this.changeHandler}
                    />
                    <hr />
                    <label htmlFor="discription">discription</label>
                    <textarea
                        name="discription"
                        type="text"
                        value={discription}
                        onChange={this.changeHandler}
                    />
                    {/* <hr />
                    <label htmlFor="upVotes">Support? 0/1</label>
                    <input name="upVotes" type="text" />
                    <hr /> */}
                    {/* <label htmlFor="userID">UserID: 1/2</label>
                    <input
                        name="userID"
                        type="text"
                        value={userID}
                        onChange={this.changeHandler}
                        /> */}
                    <hr />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Submissions;