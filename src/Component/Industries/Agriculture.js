import React from 'react'
import home1 from '../imgs/thetavegalogo.jpg'
function Automotion() {
  return (
    <div className='row' style={{ margin: "100px" }}>
      <div className='col-md-6 order-md-1 '>
        <span style={{ color: "black" }}>
          <p className='text-justify animate__animated animate__bounceInLeft' style={{ fontSize: "15px" }}>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <h2 style={{color: " RebeccaPurple", fontWeight:"bold"}}>Automation & Ancilliries</h2>
            <br /> <p> Automation & Ancillaries play a crucial role in enabling the deployment and operation of automation technologies, ensuring seamless integration, reliability, and optimal performance of the automated systems.</p>
            <br />
            <h5 className='text-justify animate__animated animate__bounceInLeft' style={{ fontSize: "15px" }}>
              <b><ol>
                <li>Production Planning System</li>
                <li>Traceability of Parts & Assembly </li>
                <li> Control and Monitoring</li>
                <li>Quality Control System</li>
                <li>Machine Integration</li>
                <li>Utility Management System</li>
                <li>Mistake Proofing Syst</li>
                <li>WorkForce Management System</li>
                <li>Smart Adnon System</li>
                <li>Process Automation</li>
              </ol></b>
            </h5>
          </p>
        </span>
        <br />
        <br />


      </div>
      <div className='col-md-6 order-md-2' >
        {/* column 2 content */} <img src={home1} alt="not found" style={{ height: '80%', width: '100%', borderRadius:"50px", marginTop:"40px" , border:"2px solid black" }} fluid />
        {/* Photo by <a href="https://unsplash.com/@simonkadula?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Simon Kadula</a> on <a href="https://unsplash.com/photos/8gr6bObQLOI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
  
      </div>
      
    </div >

  )
}

export default Automotion