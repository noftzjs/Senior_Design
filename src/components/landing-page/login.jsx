import React, { useState } from 'react';
import Axios from 'axios';
import Modal from '@material-ui/core/Modal';

const Login = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault()
    Axios.post('submissions')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      })
    handleClose();
  }

  // const changeHandler = (e) => {
  //   setNewSubmission({ ...newSubmission, [e.target.name]: e.target.value });
  // }

  const body = (
    <div className="center modal-bg">
      <div className="form-group">
        <h1>Log In</h1>
        <hr />
        <form onSubmit={handleLogin}>
          <label>UC Email</label>
          <input className="form-control" type="text" data-test="username" />
          <hr />
          <label>Password</label>
          <input className="form-control" type="password" data-test="password" />
          <hr />
          <button type="submit" className="btn btn-primary" data-test="submit" >Login</button>
        </form>
      </div>
    </div>
  );


  return (
    <div>
      <div>
        <button type="button" className="btn btn-primary" onClick={handleOpen}>
          Login</button>
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
  );
}

export default Login;



