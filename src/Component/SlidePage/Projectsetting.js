import React from "react";
import { NavLink } from 'react-router-dom';

import { useEffect } from 'react';


const Projectsetting = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);

    return (
        <div style={{margin:"70px"}}>
            <div className="bg0 fixed-top">
                <p>
                    <NavLink to="/" className="navbutton1"> Home </NavLink>/ <NavLink to="#" className="navbutton2"> Project Setting </NavLink>
                </p>
            </div>
            <div style={{ textAlign: "center" }}>
                <h2 style={{ margin: "150px", color: "red", marginBottom: "10px" }}>Project Setting </h2>
                <div>
                    <h2>Settings</h2>
                    <p>The Settings Ribbon is responsible for configuring Project Settings including Date and Time formats, Graphics, Events, General, Viewer and Web, Tags and Script References, and others.</p>
                    <div style={{ textAlign: "center" }}>
                        <img src={""} class="img-fluid animated" alt="not available" />
                    </div>
                    <p className='note'>For details of each function, refer to the Help Files in ADISRA® SmartView software.</p>

                </div>
            </div>
        </div>
    );
};

export default Projectsetting;

