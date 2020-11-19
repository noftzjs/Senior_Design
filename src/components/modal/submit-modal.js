import React from 'react';
import Modal from '@material-ui/core/Modal';
import Submissions from '../submission-component/index';

export default function SimpleModal() {
   
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className="center modal-bg">
      <Submissions></Submissions>
  </div>
  );

  return (
    <div>
      <button type="button" class="btn btn-primary" onClick={handleOpen}>
        New Submission
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}