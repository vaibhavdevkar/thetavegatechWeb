import React from 'react'
import { useEffect } from 'react';
import "./Datacpture.css"
import logo1 from "../TRACK N TRACE/DATA INTEGRATION/DATA INTE BANNER.jpg";
import logo2 from "../TRACK N TRACE/DATA INTEGRATION/Data Architecture Design.avif";
import logo3 from "../TRACK N TRACE/DATA INTEGRATION/Data Integration Planning.avif";
import logo4 from "../TRACK N TRACE/DATA INTEGRATION/Data Integration Development.png";
import logo5 from "../TRACK N TRACE/DATA INTEGRATION/Data Integration Testing.jpg";
import logo6 from "../TRACK N TRACE/DATA INTEGRATION/sUPPORT.png";
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';





const DataIntegration = () => {
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
			<NavLink to="/" className="navbutton1"> Our Solutions </NavLink>/ <NavLink to="#" className="navbutton2"> Data Integration </NavLink>
		  </p>
		</div>
  
		<header className="bg32">
		  <img src={logo1} alt="Logo" style={{ height: "25rem", opacity: "1", width: '100%' }} />
		  <div className='AB-text0' >
			<h1><span style={{ color: "orange", textAlign: "left", marginLeft: "0px" }}> Data Integration Services  </span></h1>
			<h6>help businesses bring together data from multiple sources and systems to create a unified and comprehensive view of your operations. Here are some common offerings for data integration services.</h6>
		  </div>
		  
		</header>
		{/* --------------------------------------SECTION----------------------------------------------------- */}
	
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-left">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Data Architecture Design</b></span>
			  </h3>
			  <p>
			  Data architecture design services help businesses design a data architecture that can accommodate various types of data sources and formats, as well as support different integration patterns and technologies.
			  </p>
			</div>
			<div className="col-md-5" data-aos="zoom-in-left">
			  <img src={logo2} alt="loading..." style={{ height: "300px", width: '80%', marginLeft: "6rem" }} />
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-right">
			  <img src={logo3} alt="loading..." style={{ height: "300px", width: '80%' }} />
			</div>
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Data Integration Planning</b></span>
			  </h3>
			  <p>
			  Data integration planning services help businesses plan and prioritize your data integration initiatives, including defining goals, selecting data sources, and identifying integration strategies and tools.
			  </p>
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-left">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Data Integration Development</b></span>
			  </h3>
			  <p>
			  Data integration development services help businesses develop and implement data integration solutions using various integration technologies, such as APIs, ETL, and middleware.
			  </p>
			</div>
			<div className="col-md-5" data-aos="zoom-in-left">
			  <img src={logo4} alt="loading..." style={{ height: "300px", width: '80%', marginLeft: "6rem" }} />
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-right">
			  <img src={logo5} alt="loading..." style={{ height: "300px", width: '80%' }} />
			</div>
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Data Integration Testing</b></span>
			  </h3>
			  <p>
        Data integration testing services help businesses validate and verify the accuracy, completeness, and consistency of your data integration solutions, including testing data quality, data mapping, and data transformation.
			  </p>
			</div>
		  </div>
		</div>
		<div className="container">
		  <div className="row  paragraph1">
  
			
			<div className="col-md-5" data-aos="zoom-in-left">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Data Integration Maintenance and Support</b></span>
			  </h3>
			  <p>
			  Data integration maintenance and support services help businesses maintain and support your data integration solutions, including monitoring performance, resolving issues, and providing ongoing maintenance and support.
			  </p>
			</div>
			<div className="col-md-5" data-aos="zoom-in-left">
			  <img src={logo6} alt="loading..." style={{ height: "300px", width: '80%' }} />
			</div>
		  </div>
		</div>
	

  
  
		<div className="container">
		  <div className="row  paragraph1">
			<div className="col-md-10 mt-5" data-aos="zoom-in-left">
			  <p>
			  Overall, our data integration offerings provide businesses with the tools and expertise you need to bring together data from disparate sources, enabling them to make more informed decisions, improve operational efficiency, and enhance the customer experience.<a href="#">Get in touch with us for more Details.</a>
			  </p>
			</div>
		  </div>
      <NavLink to="/datacapture" className="" style={{float:"right",color:"rgb(255,102,0)",fontSize:"1.2rem", marginTop:"2rem",marginRight:"5rem"}} data-aos="zoom-in-left">Explore to Automate Identification
		</NavLink>
		</div>
  
	  </div>
  )
}

export default DataIntegration