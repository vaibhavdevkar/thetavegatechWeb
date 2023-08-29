import React from 'react'
import home1 from '../imgs/thetavegalogo.jpg'
import home2 from '../imgs/thetavegalogo.jpg'
import home3 from '../imgs/thetavegalogo.jpg'

function Smartcity() {
  return (
    <div>
    <div className='row' style={{ margin: "100px" }}>
    <div className='col-md-6 order-md-1 '>
      <span style={{ color: "black" }}>
        <p className='text-justify animate__animated animate__bounceInLeft' style={{ fontSize: "15px" }}>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <h2 style={{color: " RebeccaPurple", fontWeight:"bold"}}>Building Management Systems</h2>
          <br /> <p> Building Management Systems (BMS), also known as Building Automation Systems (BAS), are computer-based control systems that monitor and manage various building functions, such as heating, ventilation, air conditioning, lighting, security, and other systems. BMS offerings have evolved over the years and now incorporate advanced technologies for enhanced building efficiency, comfort, and sustainability. Here are some common offerings and features you can expect from modern BMS solutions:</p>
          <br />
          <h5 className='text-justify animate__animated animate__bounceInLeft' style={{ fontSize: "15px" }}>
            <b><ol>
                   <li>Energy Management</li>
           <li>HVAC Control</li>
           <li>Lighting Control</li>
           <li>Security and Access Control</li>
           <li>Fire Safety</li>
           <li>Occupancy and Space Management</li>
           <li>Data Analytics and Reporting</li>
           <li>Remote Monitoring and Control</li>
         <li>Integration and Interoperability</li>
            </ol></b>
          </h5>
        </p>
      </span>
      <br />
      <br />


    </div>
    <div className='col-md-6 order-md-2' >
      {/* column 2 content */} <img src={home1} alt="not found" style={{ height: '80%', width: '100%', borderRadius:"50px", marginTop:"40px", border:"2px solid black"}} fluid />
  
    </div>
  </div >
  <hr></hr>
  {/* Second Section */}
  <div className='row' style={{ margin: "100px" }}>
  <div className='col-md-6'>
    {/* column 1 content */} <img src={home2} alt="not found" style={{ height: '80%', width: '100%', borderRadius: "50px", marginTop: "40px", border:"2px solid black" }} fluid />
  
  </div>
  <div className='col-md-6'>
    <span style={{ color: "black" }}>
    <p className='text-justify animate__animated animate__bounceInLeft' style={{ fontSize: "15px" }}>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <h2 style={{color: " RebeccaPurple", fontWeight:"bold"}}>Energy Management Systems</h2>
          <br /> <p> EMS, or Energy Management Systems, are software-based solutions that help organizations monitor, control, and optimize their energy usage and related resources. EMS offerings provide tools and features to track energy consumption, identify inefficiencies, and implement strategies for energy conservation and cost savings. Here are some common EMS offerings and functionalities:</p>
          <br />
          <h5 className='text-justify animate__animated animate__bounceInLeft' style={{ fontSize: "15px" }}>
            <b><ol>
            <li>Energy Monitoring and Metering</li>
           <li>Data Analytics and Reporting</li>
           <li>Energy Benchmarking</li>
          <li>Demand Response and Load Management</li>
           <li>Equipment and System Optimization</li>
           <li>Automated Controls and Scheduling</li>
           <li>Fault Detection and Diagnostics</li>
           <li>Renewable Energy Integration</li>
           <li>Carbon and Sustainability Management</li>
           <li>Integration and Interoperability</li>
            </ol></b>
          </h5>
        </p>
    </span>
    <br />
    <br />
  </div>
  <hr></hr>

</div>
      {/* Third Section */}

<div className='row' style={{ margin: "100px" }}>
        <div className='col-md-6 order-md-1'>
          <span style={{ color: "black" }}>
          <p className='text-justify animate__animated animate__bounceInLeft' style={{ fontSize: "15px" }}>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <h2 style={{color: " RebeccaPurple", fontWeight:"bold"}}>Smart City</h2>
          <br /> <p>Smart city automation and IoT (Internet of Things) solutions are designed to enhance the efficiency, sustainability, and livability of urban environments. These solutions leverage advanced technologies to connect and automate various aspects of city infrastructure and services. Here are some common offerings and functionalities of smart city automation and IoT solutions:</p>
          <br />
          <h5 className='text-justify animate__animated animate__bounceInLeft' style={{ fontSize: "15px" }}>
            <b><ol>
            <li>Smart Lighting</li>
           <li>Intelligent Traffic Management</li>
           <li>Waste Management</li>
           <li>Environmental Monitoring</li>
           <li>Smart Energy Management</li>
           <li>Public Safety and Security</li>
           <li>Smart Infrastructure Monitoring</li>
           <li>Citizen Engagement and Services</li>
           <li>Water Management</li>
           <li>Data Analytics and Decision Support</li>
            </ol></b>
          </h5>
        </p>
          </span>
          <br />
          <br />
        </div>
        <div className='col-md-6 order-md-2'>
          {/* column 2 content */} <img src={home3} alt="not found" style={{ height: '80%', width: '100%', borderRadius: "50px", marginTop: "40px", border:"2px solid black" }} fluid />
  
        </div>
      </div>
</div>
    

  )
}

export default Smartcity