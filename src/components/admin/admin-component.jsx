import Axios from "axios";
import React, { Component } from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css'


// const Admin = () => {
//     return(
//         <div>
//             <h1>Admin Page</h1>
//         </div>
//     )
// }

class Admin extends Component {
    constructor(props){
        super(props)
        this.state = { 
        submissions: [],
        loading:true
        }
    }
    
    async getSubmissionData() {
        const res = await Axios.get(`http://localhost:9000/submissions/`)
        this.setState({loading:false, submissions: res.data})
    }

    componentDidMount() {
        this.getSubmissionData()
    }

    render() { 
        const columns = [{
            Header: 'ID',
            accessor: 'uploadID',
            },
            {
                Header: 'Title',
                accessor: 'title',
            },
            {
                Header: 'Up Votes',
                accessor: 'upVotes',
            },
            {
                Header: 'User ID',
                accessor: 'userID',
            }
        ]
        return (
            <div className="admin-table">
                <ReactTable
                data={this.state.submissions}
                columns={columns}
                className="-striped -highlight"
                />
            </div>
            
         )
    }
}
 
export default Admin;