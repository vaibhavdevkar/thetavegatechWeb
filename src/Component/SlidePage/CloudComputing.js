import React from "react";
import { useEffect } from 'react';

import "./CloudComputing.css";
import { NavLink } from 'react-router-dom';
import logo1 from "../CLOUD COMPUTING/Banner.jpg";
import logo2 from "../CLOUD COMPUTING/-cloud-application-development.webp";
import logo3 from "../CLOUD COMPUTING/Cloud-based IoT Device Management.svg";
import logo4 from "../CLOUD COMPUTING/Cloud-based IoT Integration.png";
import logo5 from "../CLOUD COMPUTING/Cloud-based IoT Platform Development.png";
import logo6 from "../CLOUD COMPUTING/Cloud based AI ML.png";
import logo7 from "../CLOUD COMPUTING/Cloud-based Big Data Analytics.jpg";
import logo8 from "../CLOUD COMPUTING/Cloud-based Cybersecurity.avif";
import logo from "../img3/cloud computing.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';



const CloudComputing = () => {

	useEffect(() => {
		AOS.init(); // Initialize the AOS library
	  }, []);

	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
	},[]);
	return (
		<div className="container-fluid">
		<div className="bg0">
		  <p className="col-md-12" >
			<NavLink to="/" className="navbutton1"> Our Solutions </NavLink>/ <NavLink to="#" className="navbutton2"> Cloud Computing </NavLink>
		  </p>
		</div>
  
		<header className="bg32">
		  <img src={logo1} alt="Logo" style={{ height: "25rem", opacity: "0.8", width: '100%' }} />
		  <div className='AB-text0' >
			<h1><span style={{ color: "orange", textAlign: "left", marginLeft: "0px" }}> Cloud Computing </span></h1>
			<h6>Transform your business with the limitless potential of cloud computing</h6>
		   
		  </div>
		  <div className="container">
			<div className="row">
			  <div className="col-md-10 paragraph1" style={{ marginTop: "1rem" }}>
				<p>
				  <span style={{ color: "rgb(255,102,0)" }}>Cloud Computing  </span> Industry 4.0 is the fourth industrial revolution, characterized by the integration of advanced technologies such as the Internet of Things (IoT), artificial intelligence (AI), and machine learning (ML) into the manufacturing process. Cloud computing is a critical component of Industry 4.0, as it provides a scalable and flexible infrastructure for Industry 4.0 solutions. We Offer:


				</p>
			  </div>
			</div>
		  </div>
		</header>
		{/* --------------------------------------SECTION----------------------------------------------------- */}
		<div className="container dataparts">
		  <div className="row paragraph1 mt-5">
  
			<div className="col-md-5" data-aos="zoom-in-left" >
			  <img src={logo2} alt="loading..." style={{ height: "350px", width: '100%' }} />
			</div>
			<div className="col-md-5" data-aos="zoom-in-left">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Cloud-based Application Development</b></span>
			  </h3>
			  <p>
			  Our Cloud-based application development services create custom applications that run on cloud infrastructure and are designed to meet the specific needs of Industry 4.0 solutions. These applications can automate processes, enable remote control, and provide real-time data visualization.
			  </p>
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Cloud-based IoT Device Management</b></span>
			  </h3>
			  <p>
			  Our Cloud-based IoT device management services offer device provisioning, monitoring, and maintenance solutions. This service helps ensure that devices are secure, reliable, and always connected to the network.
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
				<span style={{ color: "rgb(255,102,0)" }}><b>Cloud-based IoT Integration</b></span>
			  </h3>
			  <p>
			  Our Cloud-based IoT integration services help businesses integrate IoT solutions with existing systems and processes hosted in the cloud. This includes integrating IoT devices with enterprise software, cloud platforms, and other third-party systems.
			  </p>
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Cloud-based IoT Platform Development</b></span>
			  </h3>
			  <p>
			  A cloud-based IoT platform is a software framework that enables businesses to manage, monitor, and control IoT devices and data. Our Cloud-based IoT platform development services provide customized solutions that meet specific business needs and can be scaled as the business grows.A cloud-based IoT platform is a software framework that enables businesses to manage, monitor, and control IoT devices and data. Our Cloud-based IoT platform development services provide customized solutions that meet specific business needs and can be scaled as the business grows.
			  </p>
			</div>
			<div className="col-md-5" data-aos="zoom-in-right">
			  <img src={logo5} alt="loading..." style={{ height: "80%", width: '100%', marginLeft: "6rem", marginTop:"5rem"  }} />
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-left">
			  <img src={logo6} alt="loading..." style={{ height: "80%", width: '80%', marginTop:"4rem" }} />
			</div>
			<div className="col-md-5" data-aos="zoom-in-left">
			  <h3 className="b11" >
				<span style={{ color: "rgb(255,102,0)" }}><b>Cloud-based AI and ML Development</b></span>
			  </h3>
			  <p>
			  Our Cloud-based AI and ML development services help businesses develop and deploy AI and ML models in the cloud. This includes developing and integrating machine learning models, natural language processing, and computer vision algorithms.
			  </p>
			</div>
		  </div>
		</div>
		<div className="container">
		  <div className="row  paragraph1">
  
			
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Cloud-based Big Data Analytics</b></span>
			  </h3>
			  <p>
			  Our Cloud-based big data analytics services help businesses process and analyse large amounts of data collected from Industry 4.0 solutions. This includes data processing, data analysis, and data visualization in the cloud, allowing businesses to scale their analytics capabilities to meet their needs.
			  </p>
			</div>
			<div className="col-md-5" data-aos="zoom-in-right">
			  <img src={logo7} alt="loading..." style={{ height: "300px", width: '80%' }} />
			</div>
		  </div>
		</div>
		<div className="container">
		  <div className="row  paragraph1">
		  <div className="col-md-5" data-aos="zoom-in-right">
			  <img src={logo8} alt="loading..." style={{ height: "300px", width: '80%' }} />
			</div>
			
			<div className="col-md-5" data-aos="zoom-in-right" >
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Cloud-based Cybersecurity</b></span>
			  </h3>
			  <p>
			  Our Cloud-based cybersecurity services provide solutions to protect Industry 4.0 systems, networks, and data from cyber threats. This includes secure authentication, data encryption, and secure network connections in the cloud.
			  </p>
			</div>
			
		  </div>
		</div>

  
  
		<div className="container">
		  <div className="row  paragraph1">
			<div className="col-md-10 mt-5" data-aos="zoom-in-left">
			  <p>
			  Our Overall, cloud computing Industry 4.0 offerings provide businesses with the infrastructure and expertise needed to leverage the power of cloud computing and Industry 4.0 technologies together, enabling them to improve their operations and create new opportunities.<a href="#">Get in touch with us for more Details.</a>
			  </p>
			</div>
		  </div>
		  <NavLink to="/bigdata" className="" style={{float:"right",color:"rgb(255,102,0)",fontSize:"1.2rem", marginTop:"2rem",marginRight:"5rem"}} data-aos="zoom-in-left">Explore to Big Data
		</NavLink>
		</div>
  
	  </div>
	);
};
export default CloudComputing;






