import React from 'react'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import "./Datacpture.css"
import logo1 from "../TRACK N TRACE/spc/banner.webp";
import logo2 from "../TRACK N TRACE/spc/SPC Software Implementation.webp";
import logo3 from "../TRACK N TRACE/spc/Process Improvement Services.avif";
import logo4 from "../TRACK N TRACE/spc/Quality COntrol.avif";
import logo5 from "../TRACK N TRACE/spc/Root Cause Analysis Services.jpg";
import logo6 from "../TRACK N TRACE/spc/Statistical Process Control Training.png";
import AOS from 'aos';
import 'aos/dist/aos.css';







export const Statistical = () => {

	useEffect(() => {
		AOS.init(); // Initialize the AOS library
	  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <div className="container-fluid">
		<div className="bg0">
		  <p className="col-md-12" >
			<NavLink to="/" className="navbutton1"> Our Solutions </NavLink>/ <NavLink to="#" className="navbutton2"> Statistical process control </NavLink>
		  </p>
		</div>
  
		<header className="bg32">
		  <img src={logo1} alt="Logo" style={{ height: "25rem", opacity: "0.9", width: '100%' }} />
		  <div className='AB-text0' >
			<h1><span style={{ color: "rgb(255,102,0)", textAlign: "left", marginLeft: "0px" }}><b> Statistical Process Control</b></span></h1>
			<h6>analytics services help businesses monitor and improve the quality and consistency of your products or services. our offerings for SPC analytics services</h6>
		   
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
				<span style={{ color: "rgb(255,102,0)" }}><b>SPC Software Implementation</b></span>
			  </h3>
			  <p>
        SPC software implementation services help businesses select and implement software tools that enable them to collect, analyse, and visualize process data, monitor production processes in real-time, and identify areas for improvement. This includes selecting and integrating software tools, providing training and support for users, and customizing software applications as needed
			  </p>
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Process Improvement Services</b></span>
			  </h3>
			  <p>
			  Process improvement services help businesses identify areas where you can improve your production processes to reduce waste, increase efficiency, and improve quality. This includes analysing process data, identifying trends and patterns, and recommending process improvements.
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
				<span style={{ color: "rgb(255,102,0)" }}><b>Quality Control Services</b></span>
			  </h3>
			  <p>
			  Quality control services help businesses monitor the quality of your products or services to ensure you meet customer requirements and standards. This includes developing quality control plans, collecting and analysing quality data, and implementing corrective actions.
			  </p>
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Root Cause Analysis Services</b></span>
			  </h3>
			  <p>
        Root cause analysis services help businesses identify the underlying causes of quality issues or defects in your products or services. This includes using statistical methods and data analysis tools to identify trends and patterns, and recommending corrective actions.
			  </p>
			</div>
			<div className="col-md-5" data-aos="zoom-in-right">
			  <img src={logo5} alt="loading..." style={{ height: "300px", width: '80%', marginLeft: "6rem" }} />
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-left">
			  <img src={logo6} alt="loading..." style={{ height: "300px", width: '80%' }} />
			</div>
			<div className="col-md-5" data-aos="zoom-in-left">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Statistical Process Control Training</b></span>
			  </h3>
			  <p>
			  Statistical process control training services help businesses train your employees on the principles and techniques of SPC analytics, enabling them to monitor and improve production processes independently. This includes developing training materials and delivering training programs.
			  </p>
			</div>
		  </div>
		</div>
	  
		<div className="container">
		  <div className="row  paragraph1">
			<div className="col-md-10 mt-5" data-aos="zoom-in-left">
			  <p>
			  Overall, Our SPC analytics offerings provide businesses with the tools and expertise you need to monitor and improve the quality of your products or services, reducing waste, increasing efficiency, and improving customer satisfaction.<a href="#">Get in touch with us for more Details.</a>
			  </p>
			</div>
		  </div>
      <NavLink to="/dataintegration" className="" style={{float:"right",color:"rgb(255,102,0)",fontSize:"1.2rem", marginTop:"2rem",marginRight:"5rem"}} data-aos="zoom-in-left">Explore to Data Integration
		</NavLink>
    </div>
  
	  </div>
  )
}
