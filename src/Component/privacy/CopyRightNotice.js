import React from 'react'
import { useEffect } from 'react';
const CopyRightNotice = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div style={{ marginTop: "7rem" }} className='container-fluid row'>
            <div className='col-md-12'>
                <h2>Copyright Notice</h2><br />
                <p><p>© 2023 Thetavega Tech Private Limited. All rights reserved.</p>
                    <p>
                    The content, images, graphics, and other materials on www.thetavega.tech / www.thetavega.in (the "Website") are protected by copyright and other intellectual property laws. Unauthorized use, reproduction, distribution, or modification of the content is strictly prohibited without the express written consent of Thetavega Tech Private Limited.
                    Reproduction, distribution, or display of copyrighted materials on the Website is permitted only with prior written permission from Thetavega Tech Private Limited. For permission requests, please contact us at info@thetavega.tech.
                    All trademarks, service marks, and trade names used on the Website are the property of their respective owners and are protected by applicable trademark and other intellectual property laws.</p>

                    <p><b>Contact Us</b></p>

                    <p>If you have any questions or inquiries regarding the copyright notice or the use of our content, please contact us at <a href="#">info@thetavega.tech.</a></p>

                </p>
            </div>
        </div>
    )
}

export default CopyRightNotice
