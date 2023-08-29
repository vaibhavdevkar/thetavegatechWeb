import React from 'react'
import home1 from '../imgs/thetavegalogo.jpg'


function Defense() {
  return (
    <div className='row' style={{ margin: "100px" }}>
      <div className='col-md-6 order-md-1 '>
        <span style={{ color: "black" }}>
          <p className='text-justify animate__animated animate__bounceInLeft' style={{ fontSize: "15px" }}>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <h2 style={{color: " RebeccaPurple", fontWeight:"bold"}}>Defense & Aerospace</h2>
            <br /> <p> At Thetavega Tech, we specialize in providing cutting-edge automation solutions tailored specifically for the defense and aerospace industries. Our expertise lies in leveraging advanced automation technologies to enhance efficiency, precision, and safety in various processes within these sectors.</p>
            <br />
            <h5 className='text-justify animate__animated animate__bounceInLeft' style={{ fontSize: "15px" }}>
              <b><ol>
              <li>Traceability of Parts & Assembly</li>
          <li>Control & Monitoring System</li>
          <li>Quality Control System</li>
          <li>Utility Management Control System</li>
              </ol></b>
            </h5>
          </p>
        </span>
        <br />
        <br />


      </div>
      <div className='col-md-6 order-md-2' >
        {/* column 2 content */} <img src={home1} alt="not found" style={{ height: '80%', width: '100%', borderRadius:"50px", marginTop:"40px", border:"2px solid black" }} fluid />
        {/* Photo by <a href="https://unsplash.com/@spacex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">SpaceX</a> on <a href="https://unsplash.com/photos/OHOU-5UVIYQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
  
      </div>
      
    </div >

  )
}

export default Defense