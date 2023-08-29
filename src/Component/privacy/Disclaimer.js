import React from 'react'
import { useEffect } from 'react';
const Disclaimer = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
  return (
    <div style={{ marginTop: "7rem" }} className='container-fluid row'>
      <div className='col-md-12'>
        <h2>Disclaimer</h2><br/>
        <p><b>Last updated: 23-08-2023</b></p>
        <p>The information provided on www.thetavega .tech / www.thetavega.in (the "Website") is for general informational purposes only. The content on the Website is provided "as is," and Thetavega Tech Private Limited ("we," "us," or "our") makes no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, or completeness of the information.</p>
        <p>The use of the Website is at your own risk. We do not assume any liability for errors or omissions in the content, nor for any actions taken based on the information provided on the Website. We are not liable for any damages, losses, or injuries resulting from your use of the Website or its content.</p><p>The Website may include links to external websites or third-party content. We do not endorse, guarantee, or take responsibility for the accuracy, completeness, or reliability of these external sources. Any reliance you place on such information is strictly at your own risk.</p><p>The content on the Website does not constitute professional, legal, financial, or medical advice. You should seek advice from qualified professionals regarding your specific situation before making any decisions or taking any actions based on the information provided on the Website.</p><p>We reserve the right to modify, update, or remove content from the Website at any time without notice. We do not guarantee that the Website will be free from interruptions, errors, or technical issues, and we are not responsible for any such problems.</p><p>By using the Website, you acknowledge and agree to the terms of this disclaimer. If you disagree with any part of this disclaimer, you should refrain from using the Website.</p>
        <p><b>Contact Us</b></p>
        <p>If you have any questions or concerns about this disclaimer, please contact us at <a href="#">info@thetavega.tech</a></p>
      </div>
    </div>
  )
}

export default Disclaimer
