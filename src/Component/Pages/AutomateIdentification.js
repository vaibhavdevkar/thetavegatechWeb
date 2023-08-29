import React from 'react'
import "./Datacpture.css"
import { NavLink } from 'react-router-dom';
import logo1 from '../TRACK N TRACE/AIDC SYSTEMS/banner.jpg'
import logo2 from '../TRACK N TRACE/AIDC SYSTEMS/RFID-BARCODE-SOLN.avif'
import logo3 from '../TRACK N TRACE/AIDC SYSTEMS/Mobile-computing-Solutions.jpg'
import logo4 from '../TRACK N TRACE/AIDC SYSTEMS/Voice-directed-Solutions.avif'
import logo5 from '../TRACK N TRACE/AIDC SYSTEMS/Data-Collection-Analytics-Solutions.avif'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




const DataCapture = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  useEffect(() => {
    AOS.init(); // Initialize the AOS library
  }, []);

  return (
    <div className="container-fluid">
		<div className="bg0">
		  <p className="col-md-12" >
			<NavLink to="/" className="navbutton1"> Our Solutions </NavLink>/ <NavLink to="#" className="navbutton2"> AIDC </NavLink>
		  </p>
		</div>
  
		<header className="bg32">
		  <img src={logo1} alt="Logo" style={{ height: "25rem", opacity: "1", width: '100%' }} />
		  <div className='AB-text0' >
			<h1><span style={{ color: "orange", textAlign: "left", marginLeft: "0px" }}> Automatic identification & Data capture (AIDC) </span></h1>
			<h6>systems are designed to help businesses automate and streamline data collection and tracking processes.</h6>
			</div>
		  
		</header>
		{/* --------------------------------------SECTION----------------------------------------------------- */}
		<div className="container dataparts">
		  <div className="row paragraph1 mt-5">
  
			<div className="col-md-5" data-aos="zoom-in-left">
			  <img src={logo2} alt="loading..." style={{ height: "350px", width: '100%' }} />
			</div>
			<div className="col-md-5" data-aos="zoom-in-left">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Barcode and RFID Solutions</b></span>
			  </h3>
			  <p>
			  our Barcode and RFID solutions enable businesses to track and manage inventory, assets, and other data using specialized scanners or readers. This includes designing and implementing barcode and RFID systems, selecting the right hardware and software components, and integrating them with existing systems.
			  </p>
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Mobile Computing Solutions</b></span>
			  </h3>
			  <p>
			  our Mobile computing solutions enable workers to access and collect data from anywhere using mobile devices such as smartphones or tablets. This includes designing and implementing mobile computing systems, developing custom mobile applications, and providing training and support for users.
			  </p>
			</div>
			<div className="col-md-5" data-aos="zoom-in-right">
			  <img src={logo3} alt="loading..." style={{ height: "300px", width: '80%', marginLeft: "6rem" }} />
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-left">
			  <img src={logo4} alt="loading..." style={{ height: "300px", width: '80%' }} />
			</div>
			<div className="col-md-5" data-aos="zoom-in-left">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Voice-directed Solutions</b></span>
			  </h3>
			  <p>
			  Our Voice-directed solutions enable workers to interact with AIDC systems using voice commands, eliminating the need for manual data entry or scanning. This includes designing and implementing voice-directed systems, selecting the right hardware and software components, and integrating them with existing systems.
			  </p>
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Data Collection and Analytics Solutions</b></span>
			  </h3>
			  <p>
			  our Data collection and analytics solutions enable businesses to collect, analyse, and visualize data from multiple sources to gain insights and make data-driven decisions. This includes designing and implementing data collection and analytics systems, developing custom analytics tools and dashboards, and providing training and support for users.
			  </p>
			</div>
			<div className="col-md-5" data-aos="zoom-in-right">
			  <img src={logo5} alt="loading..." style={{ height: "300px", width: '80%', marginLeft: "6rem" }} />
			</div>
		  </div>
		</div>
  
		 
  
		<div className="container">
		  <div className="row  paragraph1">
			<div className="col-md-10 mt-5" data-aos="zoom-in-left">
			  <p>
			  Overall, our AIDC system offerings provide businesses with the tools and expertise you need to streamline data collection and tracking processes, improve accuracy and efficiency, and gain valuable insights from your data. <a href="#">Get in touch with us for more Details.</a>
			  </p>
			</div>
		  </div>
		<NavLink to="/machinevision" className="" style={{float:"right",color:"rgb(255,102,0)",fontSize:"1.2rem", marginTop:"2rem",marginRight:"5rem"}} data-aos="zoom-in-left">Explore to Machine Vision 
		</NavLink>
		</div>
	  </div>

  )
}

export default DataCapture

