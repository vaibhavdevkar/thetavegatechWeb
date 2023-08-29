import React from "react";
import { NavLink } from 'react-router-dom';

import { useEffect } from 'react';


const Launch = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);

    return (
        <div style={{margin:"70px"}}>
            <div className="bg0 fixed-top">
                <p>
                    <NavLink to="/" className="navbutton1"> Home </NavLink>/ <NavLink to="#" className="navbutton2"> Launch ADISRA® SmartView </NavLink>
                </p>
            </div>
            <div style={{ textAlign: "center" }}>
                <h2 style={{ margin: "150px", color: "red", marginBottom: "10px" }}>Launching ADISRA® SmartView</h2>
                <div>
                    <p>Once ADISRA® SmartView is properly licensed, run the software by navigating to:</p>
                    <ul>
                        <li>Windows toolbar: Start &gt; All Programs &gt; ADISRA SmartView &gt; ADISRA SmartView</li>
                    </ul>
                    <p>Or</p>
                    <ul>
                        <li>When you install ADISRA® SmartView, program shortcuts will automatically be created on the desktop. Double-click the ADISRA® SmartView icon on the desktop.</li>
                    </ul>
                    <p className='note'>Note: If this is the first time ADISRA® SmartView is opened, the Engineering Environment will be empty (as shown below). Otherwise, it will open with the last project that was used.</p>
                    <p className='note'>Note: If the following message appears when you execute the ADISRA® SmartView, install the latest ASP.NET Runtime version and Windows Desktop Runtime.</p>
                    <div style={{ textAlign: "center" }}>
                        <img src={""} class="img-fluid animated" alt="not available" />
                    </div>
                    <p>Once you successfully start ADISRA® SmartView, you may create a New Project or Open an existing project.</p>
                    <h2>Get to Know the Engineering Environment</h2>
                    <p>The Engineering Environment of ADISRA SmartView is a user-friendly, Ribbon-based Windows® interface with many features. The Engineering Environment is where you can configure the ADISRA® SmartView development interface and begin working on a project right away.</p>
                    <div style={{ textAlign: "center" }}>
                        <img src={""} class="img-fluid animated" alt="not available" />
                    </div>
                    <p>The image above is a layout of the default ADISRA® SmartView Engineering Environment. In the subsequent sections of the Getting Started Guide, we will refer to various areas of the Engineering Environment layout as reference. The areas of the Engineering Environment are:</p>
                    <ul>
                        <li>Menu Button</li>
                        <li>Navigation Tree pane</li>
                        <li>Logical Tree pane</li>
                        <li>Ribbon</li>
                        <li>Quick Access Toolbar</li>
                        <li>Search Output pane</li>
                        <li>Engineering Log pane</li>
                        <li>Properties pane</li>
                        <li>Runtime Log pane</li>
                        <li>Build Output pane</li>
                        <li>Verify Output pane</li>
                    </ul>
                    <p className='note'>NOTE: For detailed explanation on the sections above, refer to the Help files in ADISRA® SmartView or to the Advanced Getting Started Guide pdf below.</p>

                </div>
            </div>
        </div>
    );
};

export default Launch;

