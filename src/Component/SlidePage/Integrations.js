import React from "react";
import "./Integrations.css"
import { NavLink } from 'react-router-dom';
import logo1 from "../system integration/System Integration Banner.png"
import logo2 from "../system integration/Consultancy.avif"
import logo3 from "../system integration/IoT Integration.svg"
import logo4 from "../system integration/AI_ML_Integration.avif"
import logo5 from "../system integration/Cyber_Security.png"
import logo6 from "../img3/img13.jpg"
import logo7 from "../img3/img14.jpg"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Integrations = () => {

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
			<NavLink to="/" className="navbutton1"> Our Solutions </NavLink>/ <NavLink to="#" className="navbutton2"> System Integrations </NavLink>
		  </p>
		</div>
  
		<header className="bg32">
		  <img src={logo1} alt="Logo" style={{ height: "25rem", opacity: "0.8", width: '100%' }} />
		  <div className='AB-text0' >
			<h1><span style={{ color: "orange", textAlign: "left", marginLeft: "0px" }}> System Integrations </span></h1>
			<h6>Streamline your operations and achieve your business goals with our system integration services.</h6>
		   
		  </div>
		  <div className="container">
			<div className="row">
			  <div className="col-md-10 paragraph1" style={{ marginTop: "1rem" }}>
				<p>
				  <span style={{ color: "rgb(255,102,0)" }}>System Integration </span> Industry 4.0 is the fourth industrial revolution, characterized by the integration of advanced technologies such as the Internet of Things (IoT), artificial intelligence (AI), and machine learning (ML) into the manufacturing process. System integration is a critical component of Industry 4.0, as it enables the integration of different systems and technologies into a single, cohesive ecosystem. We Offer:

				</p>
			  </div>
			</div>
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
				<span style={{ color: "rgb(255,102,0)" }}><b>Digital Transformation Consulting</b></span>
			  </h3>
			  <p>
			  Our Digital transformation consulting services provide strategic guidance to businesses looking to adopt Industry 4.0 technologies. We can help businesses identify the right technologies and solutions that can improve business processes and create new opportunities.
			  </p>
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>IoT Integration</b></span>
			  </h3>
			  <p>
			  Our IoT integration services help businesses integrate IoT solutions with existing systems and processes. This includes integrating IoT devices with enterprise software, cloud platforms, and other third-party systems.
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
				<span style={{ color: "rgb(255,102,0)" }}><b>AI and ML Integration</b></span>
			  </h3>
			  <p>
			  Our AI and ML integration services help businesses integrate AI and ML technologies into their systems and processes. This includes developing and integrating machine learning models, natural language processing, and computer vision algorithms.
			  </p>
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Cybersecurity Integration</b></span>
			  </h3>
			  <p>
			  Our Cybersecurity integration services provide solutions to protect Industry 4.0 systems, networks, and data from cyber threats. This includes secure authentication, data encryption, and secure network connections.
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
				<span style={{ color: "rgb(255,102,0)" }}><b>Cloud Integration</b></span>
			  </h3>
			  <p>
			  Our Cloud integration services help businesses integrate cloud technologies into their systems and processes. This includes integrating cloud platforms, cloud storage, and cloud computing services.
			  </p>
			</div>
		  </div>
		</div>
  

  
  
		<div className="container">
		  <div className="row  paragraph1">
			<div className="col-md-10 mt-5" data-aos="zoom-in-left">
			  <p>
			  Our Overall, system integration Industry 4.0 offerings provide businesses with the tools and expertise needed to transform their operations and take advantage of the latest Industry 4.0 technologies.  <a href="#">Get in touch with us for more Details.</a>
			  </p>
			</div>
		  </div>
		  <NavLink to="/iot" className="" style={{float:"right",color:"rgb(255,102,0)",fontSize:"1.2rem", marginTop:"2rem",marginRight:"5rem"}} data-aos="zoom-in-left">Explore to Internet Of Things
		</NavLink>
		</div>
  
	  </div>
	);
};

export default Integrations;
