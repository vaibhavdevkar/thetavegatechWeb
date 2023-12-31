import React from 'react';
import "./Trace.css";
import { NavLink } from 'react-router-dom';
import logo1 from '../TRACK N TRACE/TRACK N TRACE/BANNER.jpg';
import logo2 from '../TRACK N TRACE/TRACK N TRACE/Solution-Design-Planning.avif';
import logo3 from '../TRACK N TRACE/TRACK N TRACE/Hardware-software-Implementation.png';
import logo4 from '../TRACK N TRACE/TRACK N TRACE/Integration-Services.avif';
import logo5 from '../TRACK N TRACE/TRACK N TRACE/Data-Analytics-Reporting.avif';
import logo6 from '../TRACK N TRACE/TRACK N TRACE/Maintenance-Support.avif';
import { useEffect } from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Trace = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <div className="container-fluid">
		<div className="bg0">
		  <p className="col-md-12" >
			<NavLink to="/" className="navbutton1"> Dashboard </NavLink>/ <NavLink to="#" className="navbutton2"> track n trace </NavLink>
		  </p>
		</div>
  
		<header className="bg32">
		  <img src={logo1} alt="Logo" style={{ height: "25rem", opacity: "1", width: '100%' }} />
		  <div className='AB-text0' >
			<h1><span style={{ color: "orange", textAlign: "cemter", marginLeft: "0px" }}><b> Traceability Solutions</b> </span></h1>
			<h6>Comprehensive Traceability Solutions: Unlock the Power of End-to-End Implementation</h6>
		   
		  </div>
		
		</header>
		{/* --------------------------------------SECTION----------------------------------------------------- */}
		<div className="container dataparts">
		  <div className="row paragraph1 mt-5">
  
			<div className="col-md-5">
			  <img src={logo2} alt="loading..." style={{ height: "90%", width: '90%' }} />
			</div>
			<div className="col-md-5">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Solution Design and Planning </b></span>
			  </h3>
			  <p>
        We offer Traceability solution design and planning services to help businesses design and plan their traceability systems, including defining requirements, selecting technologies, and identifying integration strategies. 
			  </p>
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-6 mt-5">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Hardware and Software Implementation</b></span>
			  </h3>
			  <p>
        Our Hardware and software implementation services help businesses implement and configure the necessary hardware and software components for their traceability systems, including Barcoding, RFID, Laser technologies, Data collection devices like PLC, Embedded Controllers, IOT Gateways, and software applications Designing Development and Implementation.  
			  </p>
			</div>
			<div className="col-md-4">
			  <img src={logo3} alt="loading..." style={{ height: "90%", width: '90%', marginLeft: "6rem" }} />
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row paragraph1">
  
			<div className="col-md-5">
			  <img src={logo4} alt="loading..." style={{ height: "90%", width: '90%' }} />
			</div>
			<div className="col-md-5 mt-5">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Integration Services</b></span>
			  </h3>
			  <p>
			  Our Integration services help businesses integrate their traceability systems with other enterprise systems, such as MES or ERP systems, to create a seamless and integrated manufacturing environment. 
			  </p>
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Data Analytics and Reporting</b></span>
			  </h3>
			  <p>
        our Data analytics and reporting services help businesses analyse and visualize the data generated by their traceability systems, providing real-time visibility and insight into manufacturing operations, enabling better decision-making and improved efficiency.
			  </p>
			</div>
			<div className="col-md-5">
			  <img src={logo5} alt="loading..." style={{ height: "90%", width: '90%', marginLeft: "6rem" }} />
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5">
			  <img src={logo6} alt="loading..." style={{ height: "90%", width: '90%%' }} />
			</div>
			<div className="col-md-5">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Maintenance and Support</b></span>
			  </h3>
			  <p>
			  our Maintenance and support services help businesses maintain and support their traceability systems, including providing training, resolving issues, and ensuring ongoing system performance. 
			  </p>
			</div>
		  </div>
		</div>
		
	

  
  
		<div className="container">
		  <div className="row  paragraph1">
			<div className="col-md-10 mt-5">
			  <p>
			  Overall, our traceability system offerings provide businesses with the tools and expertise they need to implement and manage traceability systems that It enable you to improve quality control, increase productivity, reduce costs, and ensure compliance with regulatory requirements in the manufacturing process.<a href="#">Get in touch with us for more Details.</a>
			  </p>
			</div>
		  </div>
		</div>
  
	  </div>
  )
}

export default Trace;
