import React from 'react'
import home1 from '../imgs/thetavegalogo.jpg'

function Defense() {
  return (
    <div className='row' style={{ margin: "100px" }}>
      <div className='col-md-6 order-md-1 '>
        <span style={{ color: "black" }}>
          <p className='text-justify animate__animated animate__bounceInLeft' style={{ fontSize: "15px" }}>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <h2 style={{color: " RebeccaPurple", fontWeight:"bold"}}>Pharma</h2>
            <br /> <p> At Thetavega Tech, we specialize in providing advanced automation solutions specifically tailored for the pharmaceutical industry. We understand the unique challenges and requirements of the pharmaceutical sector, and our expertise lies in leveraging automation technologies to enhance efficiency, accuracy, and compliance in various pharmaceutical processes.</p>
            <br />
            <h5 className='text-justify animate__animated animate__bounceInLeft' style={{ fontSize: "15px" }}>
              <b><ol>
                <li>Utility Management Control System  </li>
                <li>Checkwaighers</li>
                <li>Conveying System</li>
                <li>Smart andon System</li>
                <li>Vision inspection System</li>
                <li>Packing System</li>
                <li>Machine Integration</li>
              </ol></b>
            </h5>
          </p>
        </span>
        <br />
        <br />


      </div>
      <div className='col-md-6 order-md-2' >
        {/* column 2 content */} <img src={home1} alt="not found" style={{ height: '80%', width: '100%', borderRadius: "50px", marginTop: "40px", border:"2px solid black" }} fluid />

      </div>

    </div >

  )
}

export default Defense