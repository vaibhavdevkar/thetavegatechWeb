import React from "react";
import { NavLink } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { useEffect } from 'react';


const Gstart = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);

    return (
        <div  style={{marginLeft:"70px", marginRight:"70px"}}>
            <div className="bg0 fixed-top">
                <p>
                    <NavLink to="/" className="navbutton1"> Home </NavLink>/ <NavLink to="#" className="navbutton2"> System Requirements </NavLink>
                </p>
            </div>
            <div style={{textAlign:"center"}}>
            <h2 style={{margin:"150px", color:"red", marginBottom:"10px"}}>System Requirements</h2>
            <p>To install ADISRA® SmartView, we recommend that your system meet the following requirements in order to optimize its performance.</p>
            <h4>Hardware Requirements</h4>

            <h6>Minimum: </h6>
            <p><BsFillArrowRightCircleFill />&nbsp;&nbsp;CPU: 1.44 GHz</p>
            <p><BsFillArrowRightCircleFill />&nbsp;&nbsp;RAM: 4 GB</p>
            <p><BsFillArrowRightCircleFill />&nbsp;&nbsp;Disk Space (min):</p>
            <ul >
                {/* <li><BsFillArrowRightCircleFill />CPU: 1.44 GHz</li>
                <li><BsFillArrowRightCircleFill />RAM: 4 GB</li>
                <li><BsFillArrowRightCircleFill />Disk Space (min):</li> */}
                <ul>
                    <li>32 bit, 8.0 GB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                    <li>64 bit, 8.0 GB</li>
                </ul>
            </ul>
            <h6><BsFillArrowRightCircleFill />&nbsp;&nbsp;Recommended: </h6>
            <ul>
                <li>CPU: 1.7 GHz&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                <li>RAM: 6 GB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                <li>Disk Space (min):</li>
                <ul>
                    <li>32 bit, 20 GB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                    <li>64 bit, 20 GB</li>
                </ul>
            </ul>
            <h4>Software Requirements: </h4>
            <p style={{}}>Windows 11, Windows 10, Windows 8.1, Windows Server 2019, Windows Server 2016, Windows Server 2012 R2, Windows Server 2012 (64-bit edition), Microsoft .NET 6.0 REQUIRED, OPC Core Components, Windows Desktop Runtime, Visual C++ Redistributable</p>
            
            {/* <ul> */}
                {/* <li></li>
                <li></li> */}
                {/* <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul> */}
        </div>
        </div>
    );
};

export default Gstart;

