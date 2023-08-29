import React from 'react'
import { useEffect } from 'react';
const TermsOfUse = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);
    return (
        <div style={{ marginTop: "7rem" }} className='container-fluid row'>
            <div className='col-md-12'>
            <h2>Terms of Use</h2>
            <br/>
            <p><b>Last updated: 23-08-2023</b></p>
            <p>
            Welcome to <a href="#">www.thetavega.tech</a> / www.thetavega.in (the "Website"). By accessing or using the Website, you agree to comply with and be bound by the following terms and conditions (the "Terms of Use"). If you do not agree to these Terms of Use, please refrain from using the Website.</p>

            <p><b>1. Acceptable Use</b></p>

            <p>You agree to use the Website in a manner consistent with all applicable laws, regulations, and these Terms of Use. You are responsible for your own actions while using the Website and for any content you post.</p>

            <p><b>2. Intellectual Property</b></p>

            <p>The content on the Website, including text, images, graphics, videos, and other materials, is protected by intellectual property rights, including copyright and trademarks. You may not reproduce, distribute, modify, or otherwise use any content from the Website without our prior written consent.</p>

            <p><b>3. User-Generated Content</b></p>

            <p>If you post or submit content to the Website, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, adapt, and distribute that content for any purpose.</p>

            <p><b>4. Disclaimer of Warranties</b></p>

            <p>The content on the Website is provided "as is," without any warranties or representations of any kind. We do not guarantee the accuracy, completeness, or reliability of the content. Your use of the Website is at your own risk.</p>

            <p><b>5. Limitation of Liability</b></p>

            <p>We are not liable for any damages, losses, or injuries resulting from your use of the Website or its content. This includes but is not limited to direct, indirect, incidental, consequential, or punitive damages.</p>

            <p><b>6. Third-Party Links</b></p>

            <p>The Website may contain links to third-party websites or content. We do not endorse, control, or take responsibility for the content on these external sources. Any reliance on third-party content is at your own risk.</p>

            <p><b>7. Modifications to the Website</b></p>

            <p>We reserve the right to modify, update, or discontinue the Website, or any part thereof, at any time without notice. We are not liable for any loss or inconvenience resulting from such modifications.</p>

            <p><b>8. Termination</b></p>

            <p>We may terminate your access to the Website at our sole discretion and without notice if you violate these Terms of Use or engage in conduct that we deem inappropriate.</p>

            <p><b>9. Governing Law</b></p>

            <p>These Terms of Use are governed by and construed in accordance with the laws of Republic of India. Any disputes arising from these Terms of Use shall be subject to the exclusive jurisdiction of the courts in Aurangabad, Maharashtra, India.</p>

            <p><b>10. Contact Us</b></p>

            <p>If you have any questions or concerns about these Terms of Use, please contact us at<a href='#' target='_blank'> info@thetavega.tech.</a></p>
            </div>
        </div>
    )
}

export default TermsOfUse
