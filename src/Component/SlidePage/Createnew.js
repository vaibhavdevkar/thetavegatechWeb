import React from "react";
import { NavLink } from 'react-router-dom';

import { useEffect } from 'react';


const Createnew = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);

    return (
        <div style={{margin:"70px"}}>
            <div className="bg0 fixed-top">
                <p>
                    <NavLink to="/" className="navbutton1"> Home </NavLink>/ <NavLink to="#" className="navbutton2"> Creating a New Project </NavLink>
                </p>
            </div>
            <div style={{ textAlign: "center" }}>
                <h2 style={{ margin: "150px", color: "red", marginBottom: "10px" }}>Creating a New Project</h2>
                <div>
                    <p>Now that you are familiar with the Engineering Environment, you can create a new project.</p>
                    <ol>
                        <li>Click the Menu Button in the top-left corner of the program window.</li>
                        <div style={{ textAlign: "center" }}>
                                <img src={""} class="img-fluid animated" alt="not available" />
                        </div>
                        <li>Select New or press CTRL + N.</li>
                        <div style={{ textAlign: "center" }}>
                                <img src={""} class="img-fluid animated" alt="not available" />
                        </div>
                        <li>A new “Save As” window appears. Select the folder in which to save the project and to give your project a name. By default, the project is created with a (.prj) file extension.</li>
                        <p className='note'>Note: Project names cannot contain special characters or spaces.</p>
                        <li>To begin your project, familiarize yourself with the workspace layout. ADISRA® SmartView displays the structure of the project in the Navigation Tree, as shown below.</li>
                        <div style={{ textAlign: "center" }}>
                                <img src={""} class="img-fluid animated" alt="not available" />
                        </div>
                        <p>
                        As can be seen in the image of the Navigation Tree, some components are automatically created, such as Tags, Services, Alarms, Graphics, System Functions Library documents and others. The image represents the basic structure of the Navigation Tree for any project
                        </p>
                        <p>
                        You may start using these documents or you may create new documents and customize.
                        </p>

                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Createnew;

