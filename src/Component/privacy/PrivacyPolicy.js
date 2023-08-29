import React from 'react'
import { useEffect } from 'react';
const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
      }, []);
    return (
        
        <div style={{ marginTop: "7rem" }} className='container-fluid row'>
            <div className='col-md-12'>
                <h2>Privacy Policy</h2><br />
                <p><b>Last updated: 23-08-2023</b></p>
                <p>This Privacy Policy explains how Thetavega Tech Private Limited ("we," "us," or "our") collects, uses, and protects the personal information you provide on our website [www.thetavega.tech / www.thetavega.in] (the "Website"). By accessing or using the Website, you agree to the terms of this Privacy Policy.</p>


                <p><b>Information We Collect</b></p>
                <p>We may collect both personal and non-personal information when you use our Website. </p>


                <p><b>Personal information may include:</b></p>
                <p>1.	Name <br /> 2.	Email address <br />3.	Phone number<br />4.	Mailing address<br />5.	Payment information<br />6.	Any other information you voluntarily provide</p>
                <p><b>Non-personal information may include:</b></p>
                <p>1.	IP address <br /> 2.	Browser type <br />3.	Operating system<br />4.	Date and time of access<br />5.	Website usage information</p>
                <p><b>How We Use Your Information</b></p><p>We may use the information we collect for the following purposes:</p>
                <p>1.	To provide and improve our services <br />2.	To process transactions<br />3.	To send you important information and updates<br />4.	To respond to your inquiries<br />5.	To personalize your experience on the Website <br />6.	To analyse website traffic and usage patterns<br />7.	To comply with legal obligations</p>

                <div>
                    <p><b>Data Security</b></p>
                    <p>We take the security of your information seriously and implement reasonable measures to protect it. However, please note that no data transmission over the internet can be guaranteed to be 100% secure.</p>

                    <p><b>Third-Party Sharing</b></p>
                    <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. We may share your information with trusted third-party service providers who assist us in operating our Website and conducting our business. These service providers are required to keep your information confidential.</p>
                    <p><b> Cookies and Tracking</b></p>

                   <p> We use cookies and similar tracking technologies to enhance your experience on the Website. You can modify your browser settings to control the use of cookies, but some features of the Website may not function properly if cookies are disabled.</p>
                   <p><b> Children's Privacy</b></p>
                    <p>Our Website is not intended for children under the age of [13/16]. We do not knowingly collect personal information from children.</p>   

                    <p><b>  Changes to this Privacy Policy </b></p>

                    <p>We may update this Privacy Policy from time to time, without any prior notification</p>

                    <p><b>Contact Us</b></p>

                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="#">info@thetavega.tech.</a></p>

                </div>
            </div>

        </div>
    )
}

export default PrivacyPolicy
