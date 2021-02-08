import React from 'react';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;
    return (
        <div>
            <h1>Demographic Report</h1>
            <hr />
            <iframe title='documents' src={src} style={{ width: "100%", height: "1080px" }}></iframe>
        </div>
    );
};

export default Iframe;