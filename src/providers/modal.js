import React, { useState } from 'react';
import ReactDOM from 'react';

const ToggleContent = ({ toggle, content }) => {
    const [isShown, setIsShown] = useState(false);
    const hide = () => setIsShown(false);
    const show = () => setIsShown(true);

    return (
        <React.Fragment>
            {toggle(show)}
            {isShown && content(hide)}
        </React.Fragment>
    );
}

const Modal = ({ children }) => (
    ReactDOM.createPortal(
        <div className="modal">
            {children}
        </div>,
        document.getElementById('modal-root')
    )
);

const ModalService = () => (
    <ToggleContent
        toggle={show => <button onClick={show}>Open</button>}
        content={hide => (
            <Modal>
                There is no spoon.<br />
                <button onClick={hide}>Close</button>
            </Modal>
        )}
    />
);

export default ModalService;