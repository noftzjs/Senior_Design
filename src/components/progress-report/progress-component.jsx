import React, { useState } from 'react';
import Iframe from '../../providers/iframe';
import pdfFile from '../../documents/Undergraduate_Student_Government_Demographic_Report_20202021.pdf';



const Progress = (props) => {

    return (
        <div>
            <Iframe source={pdfFile}/>
        </div>
    );
}

export default Progress