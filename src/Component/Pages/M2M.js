import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Datacpture.css"
import logo1 from '../TRACK N TRACE/MACHINE 2 MACHINE/banner.jpg'
import logo2 from '../TRACK N TRACE/MACHINE 2 MACHINE/M2M-Connectivity-Services.jpg'
import logo3 from '../TRACK N TRACE/MACHINE 2 MACHINE/M2M-Platform-Development.png'
import logo4 from '../TRACK N TRACE/MACHINE 2 MACHINE/M2M-Application-Development.png'
import logo5 from '../TRACK N TRACE/MACHINE 2 MACHINE/M2M-Data-Analytics.avif'
import logo6 from '../TRACK N TRACE/MACHINE 2 MACHINE/M2M-Security-Solutions.webp'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const M2M = () => {

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
		<NavLink to="/" className="navbutton1"> Dashboards </NavLink>/ <NavLink to="#" className="navbutton2"> Machine To Machine </NavLink>
	  </p>
	</div>

	<header className="bg32">
	  <img src={logo1} alt="Logo" style={{ height: "25rem", opacity: "1", width: '100%' }} />
	  <div className='AB-text0' >
		<h1><span style={{ color: "orange", textAlign: "left", marginLeft: "0px" }}> Machine-To-Machine (M2M)</span></h1>
		<h6>communication enables devices and machines to exchange data and information automatically without the need for human intervention. Our offerings for M2M communication</h6>
	   
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
			<span style={{ color: "rgb(255,102,0)" }}><b>M2M Connectivity Services</b></span>
		  </h3>
		  <p>
		  M2M connectivity services provide businesses with the ability to connect devices and machines to a network, enabling them to exchange data and information with other devices and systems. This includes selecting the right connectivity technologies and protocols, configuring network settings, and managing connectivity.
		  </p>
		</div>
	  </div>
	</div>

	<div className="container">
	  <div className="row  paragraph1">

		<div className="col-md-5" data-aos="zoom-in-right">
		  <h3 className="b11">
			<span style={{ color: "rgb(255,102,0)" }}><b>M2M Platform Development</b></span>
		  </h3>
		  <p>
		  M2M platform development services help businesses create custom M2M platforms that enable them to monitor and control your devices and machines remotely. This includes developing software platforms, selecting and integrating hardware components, and providing ongoing maintenance and support.
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
			<span style={{ color: "rgb(255,102,0)" }}><b>M2M Application Development</b></span>
		  </h3>
		  <p>
		  M2M application development services help businesses create custom applications that enable them to access and analyze data from your devices and machines. This includes developing software applications, integrating them with existing systems, and providing ongoing maintenance and support.
		  </p>
		</div>
	  </div>
	</div>

	<div className="container">
	  <div className="row  paragraph1">

		<div className="col-md-5" data-aos="zoom-in-right">
		  <h3 className="b11">
			<span style={{ color: "rgb(255,102,0)" }}><b>M2M Data Analytics</b></span>
		  </h3>
		  <p>
		  M2M data analytics services help businesses analyze the data collected from your devices and machines to gain insights and make data-driven decisions. This includes developing custom analytics tools and dashboards, integrating data from multiple sources, and providing ongoing maintenance and support.
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
			<span style={{ color: "rgb(255,102,0)" }}><b>M2M Security Solutions</b></span>
		  </h3>
		  <p>
		  M2M security solutions help businesses secure your M2M systems and prevent unauthorized access or data breaches. This includes implementing encryption and authentication protocols, monitoring network activity, and providing ongoing maintenance and support.
		  </p>
		</div>
	  </div>
	</div>
	

	<div className="container">
	  <div className="row  paragraph1">
		<div className="col-md-10 mt-5" data-aos="zoom-in-left">
		  <p>
		  Overall, Our M2M communication offerings provide businesses with the tools and expertise you need to connect, manage, and analyze your devices and machines remotely, improving operational efficiency, reducing costs, and enhancing the customer experience.<a href="#">Get in touch with us for more Details.</a>
		  </p>
		</div>
	  </div>
	  <NavLink to="/remotemonitoring" className="" style={{float:"right",color:"rgb(255,102,0)",fontSize:"1.2rem", marginTop:"2rem",marginRight:"5rem"}} data-aos="zoom-in-left">Explore to Remote Monitoring
		</NavLink>
	</div>

  </div>
  );
}

export default M2M;
