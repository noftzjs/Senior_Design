import React, { useState } from 'react';


const Progress = () => {

    return (
        <div className="reports-container">
            <div class="card-deck">
                <div class="card">
                    <h1 class="card-img-top" alt="Card image cap">Summer Report 2020</h1>
                    <div class="card-body">
                        <h5 class="card-title">Summary</h5>
                        <p class="card-text">The Summer 2020 progress report containing information on activies and updates around campus.</p>
                    </div>
                    <div class="card-footer">
                        <a href="https://www.ucstudentgov.org/summer-report-2020">[Full Report]</a>
                    </div>
                </div>
                <div class="card">
                    <h1 class="card-img-top" alt="Card image cap">Fall Report 2020</h1>
                    <div class="card-body">
                        <h5 class="card-title">Summary</h5>
                        <p class="card-text">The fall 2020 progress report containing information on activies and updates around campus.</p>
                    </div>
                    <div class="card-footer">
                        <a href="https://www.ucstudentgov.org/fall-report-2020">[Full Report]</a>
                    </div>
                </div>
                <div class="card">
                    <h1 class="card-img-top" alt="Card image cap">Demographic Report 2020</h1>
                    <div class="card-body">
                        <h5 class="card-title">Summary</h5>
                        <p class="card-text">
                            This report displays the demographic composition of
                            Undergraduate Student Government and, when available,
                            compares our composition proportionally to that of the student
                            body
                        </p>
                    </div>
                    <div class="card-footer">
                        <a href="https://www.ucstudentgov.org/demographic-report-2020">[Full Report]</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Progress