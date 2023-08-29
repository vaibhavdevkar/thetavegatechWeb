import React from "react";
import { NavLink } from 'react-router-dom';

import { useEffect } from 'react';


const Licensing = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);

    return (
        <div style={{margin:"70px"}}>
            <div className="bg0 fixed-top">
                <p>
                    <NavLink to="/" className="navbutton1"> Home </NavLink>/ <NavLink to="#" className="navbutton2"> Licensing </NavLink>
                </p>
            </div>
            <div style={{ textAlign: "center" }}>
                <h2 style={{ margin: "150px", color: "red", marginBottom: "10px" }}>Licensing</h2>
                <div>
                    <h2>Registering a License</h2>
                    <p>Before you can use the software, you MUST register ADISRA® SmartView.</p>
                    <ol>
                        <li>After you have installed ADISRA® SmartView, there are two ways to register a license:</li>
                        <ol>
                            <li>Select the License tab in the banner and then the Register button:</li>
                            <div style={{ textAlign: "center" }}>
                                <img src={""} class="img-fluid animated" alt="not available" />
                            </div>
                            <li>Go to the Windows toolbar: Start &gt;  All Programs &gt; SmartView &gt; Register License.</li>
                            <div style={{ textAlign: "center" }}>
                                <img src={""} class="img-fluid animated" alt="not available" />
                            </div>
                        </ol>
                        <li>By using either method 1.1 or 1.2 above, the following window will appear:</li>
                        <div style={{ textAlign: "center" }}>
                            <img src={""} class="img-fluid animated" alt="not available" />
                        </div>
                        <li>Click the button labeled “Generate license.code” to create the text filename with the Hardware ID. That file location will be displayed in the text box called “Output Path”</li>
                        <p className='note'>(Note: you can change the Output Path by clicking on the (…) graphic button next to the Output Path text box)</p>
                        <li>Attach the text file named “license.code” to an email and send to info@adisra.com.</li>
                        <p>The software vendor will send back a License Key File that matches this Hardware ID. Download and save the license file to your storage drive (remember the location).</p>
                        <li>Enter the license key file location in License Path text box, or browse to it by clicking on the (…) graphic button, and then click the Validate button.</li>
                        <li>You will be prompted to confirm the operation once the program accepts (validates) your License Key.</li>
                        <p>You are now ready to use ADISRA® SmartView.</p>
                        <p>Close the Register License window and run ADISRA® SmartView.</p>

                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Licensing;

