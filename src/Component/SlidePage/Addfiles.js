import React from "react";
import { NavLink } from 'react-router-dom';

import { useEffect } from 'react';


const Addfiles = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);

    return (
        <div style={{margin:"70px"}}>
            <div className="bg0 fixed-top">
                <p>
                    <NavLink to="/" className="navbutton1"> Home </NavLink>/ <NavLink to="#" className="navbutton2"> Add Documents & Files to your Project </NavLink>
                </p>
            </div>
            <div style={{ textAlign: "center" }}>
                <h2 style={{ margin: "150px", color: "red", marginBottom: "10px" }}>Add Documents & Files to your Project</h2>
                <div>
            <p>All components in the Navigation Tree are defined as documents in ADISRA® SmartView such as Tags, Data Types, Graphics, Services, Triggers, Alarms, Histories, Recipes, and Reports. The Navigation Tree represents the folders and files created for each project in your hard disk. You may add and configure documents to any component in ADISRA® SmartView.</p>
            <h4>Creating a New Document</h4>
            <p>To create a new Document for any component in the Navigation Tree, right-click on the component folder in which you want to create the document and select “New Document”.</p>
            <div style={{ textAlign: "center" }}>
                <img src={""} class="img-fluid animated" alt="not available" />
            </div>
            <p>An empty tab opens in the workspace where you will then create new files for that component (i.e. tags, recipes, reports, graphics, etc.).</p>
            <h4>Adding New Files</h4>
            <p>To insert a new file into a document, open the document you want to add the new tags to. When you open the document in the Engineering Environment, the Ribbon will update and display a new tab labeled for that component (see image below example for the “Tags” Ribbon). The available buttons on the Ribbon will change pertaining to the tab that you have open.</p>
            <div style={{ textAlign: "center" }}>
                <img src={""} class="img-fluid animated" alt="not available" />
            </div>
            <p>To create a new file for that component in the document, click the “+” button. You may configure the files that you create by using the Properties window.</p>
            <h2>Saving the Document</h2>
            <p>With new components are inserted, it is wise to save these changes made to the document. There are several ways to save a document:</p>
            <ul>
                <li>Click on the Main Menu button and select “Save”from the drop down menu</li>
                <li>From the Quick Access Toolbar, click on the Save disk icon</li>
                <li>With the document you want to save open in the document area, press CTRL + S keys</li>
            </ul>
            <p className='note'>Note: When a document has been changed, it is marked with the symbol “*″ next to the document name.</p>
        </div>
            </div>
        </div>
    );
};

export default Addfiles;

