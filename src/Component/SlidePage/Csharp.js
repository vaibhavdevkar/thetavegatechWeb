import React from "react";
import { NavLink } from 'react-router-dom';

import { useEffect } from 'react';


const Csharp = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);

    return (
        <div style={{margin:"70px"}}>
            <div className="bg0 fixed-top">
                <p>
                    <NavLink to="/" className="navbutton1"> Home </NavLink>/ <NavLink to="#" className="navbutton2"> C# Scripting </NavLink>
                </p>
            </div>
            <div style={{ textAlign: "center" }}>
                <h2 style={{ margin: "150px", color: "red", marginBottom: "10px" }}>C# Scripting</h2>
                <div>
                    <p>ADISRA® SmartView becomes a powerful programming tool in the hands of an engineer with knowledge of C# scripting language. If you are a beginner looking to dive into ADISRA SmartView but do not have a strong knowledge of C#, we recommend that you watch a C# tutorial and learn the basics.</p>
                    <p>Download: <a href='https://adisra.com/wp-content/uploads/2020/03/ADISRA-SmartView-CSharp-Reference.pdf' target="_blank">ADISRA® SmartView C# Script Reference (PDF) </a></p>
                    <p>There are many free resources available online for C# beginners.</p>
                </div>
            </div>
        </div>
    );
};

export default Csharp;

