import React from "react";
import { NavLink } from 'react-router-dom';

import { useEffect } from 'react';


const Downi = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);

    return (
        <div style={{margin:"70px"}}>
            <div className="bg0 fixed-top">
                <p>
                    <NavLink to="/" className="navbutton1"> Home </NavLink>/ <NavLink to="#" className="navbutton2"> Download & Installation </NavLink>
                </p>
            </div>
            <div style={{ textAlign: "center" }}>
                <h2 style={{ margin: "150px", color: "red", marginBottom: "10px" }}>Download & Installation</h2>
                <div>
                    <h2>Download</h2>
                    <p>To download ADISRA® SmartView, please follow the steps below.</p>
                    <ol>
                        <li>Open a web browser and go to <a href='/'>adisra.com</a></li>
                        <li>Click on Download Software link</li>
                        <li>Once your browser has completed the download, you must extract the software from the downloaded ZIP file.</li>
                    </ol>
                    <p>Select the file, Right-click and select Extract files. Choose the location where you would like the software files extracted to.</p>
                    <h2>The Installation Process</h2>
                    <ol>
                        <li>Once ADISRA® SmartView has been downloaded and extracted from the ZIP file as described in Downloading, go to the folder and double-click the “en-us” folder to open it. You must run the “Setup.exe” file as the Administrator by right clicking it and selecting “Run as administrator” from the drop-down menu.</li>
                        <li>If you attempt to install the ADISRA® SmartView and have not installed the OPC Core Components or other components necessary, you will receive a warning asking if you want to install them.</li>
                        <p className='note'>NOTE: Before installing the components, check your machine information to install the compatible components with your operating system.</p>
                        <div style={{ textAlign: "center" }}>
                            <img src={""} class="img-fluid animated" alt="not available" />
                        </div>
                        <p>If you press “Install”, for each component that needs to be installed, there will a message window with license and term agreements. To complete the installation, read and accept each of the term agreements. Check any appropriate boxes and proceed.</p>
                        <li>After you have installed the components, ADISRA® SmartView program installation will begin. The first page is the End-User License Agreement.</li>
                        <div style={{ textAlign: "center" }}>
                            <img src={""} class="img-fluid animated" alt="not available" />
                        </div>
                        <p>After reading the entire License Agreement, select the “I accept the terms in the License Agreement” checkbox and click Next.</p>
                        <li>The next page allows you to set where the ADISRA® SmartView will be installed. If you click Next, it will be installed in the default location which is “c:\Program Files(x86)\ADISRA\Adisra SmartView”. To install in another location, click the Change button and choose the location of your preference.</li>
                        <div style={{ textAlign: "center" }}>
                            <img src={""} class="img-fluid animated" alt="not available" />
                        </div>
                        <li>When you click the Next button, the installation process will give you the option to install the ADISRA® SmartView, the ADISRA® SmartView Viewer or both of them, select the one you want and then click Next.</li>
                        <div style={{ textAlign: "center" }}>
                            <img src={""} class="img-fluid animated" alt="not available" />
                        </div>
                        <li>At last, click install to begin the ADISRA® SmartView installation.</li>
                        <div style={{ textAlign: "center" }}>
                            <img src={""} class="img-fluid animated" alt="not available" />
                        </div>
                        <p>When the installation process is completed, click the Finish button.</p>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Downi;

