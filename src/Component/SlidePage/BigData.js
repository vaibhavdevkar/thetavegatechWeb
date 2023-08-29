import React from "react";
import "./BigData.css";
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import logo1 from "../BIG DATA/Banner.jpg"
import logo2 from "../BIG DATA/big data consulting.png"
import logo3 from "../BIG DATA/data-warehouse.svg"
import logo4 from "../BIG DATA/data-integrationr.jpg"
import logo5 from "../BIG DATA/dATA_vISUALIZATION.avif"
import logo6 from "../BIG DATA/MAchine Learning & AI.avif"
import logo7 from "../BIG DATA/Data_secirity.avif"
import AOS from 'aos';
import 'aos/dist/aos.css';




const BigData = () => {

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
			<NavLink to="/" className="navbutton1"> Our Solutions </NavLink>/ <NavLink to="#" className="navbutton2"> Cloud Computing </NavLink>
		  </p>
		</div>
  
		<header className="bg32">
		  <img src={logo1} alt="Logo" style={{ height: "25rem", opacity: "0.8", width: '100%' }} />
		  <div className='AB-text0' >
			<h1><span style={{ color: "orange", textAlign: "left", marginLeft: "0px" }}> Big Data Analytics </span></h1>
			<h6>Unlock the insights hidden in your data with our big data analytics solutions.</h6>
		   
		  </div>
		  <div className="container">
			<div className="row">
			  <div className="col-md-10 paragraph1" style={{ marginTop: "1rem" }}>
				<p>
				  <span style={{ color: "rgb(255,102,0)" }}>Big data analytics</span> is the process of examining large and complex data sets to uncover hidden patterns, correlations, and other useful information that can help businesses make informed decisions. Our Big data analytics offerings can vary depending on the specific needs of the business, We Offer:


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
				<span style={{ color: "rgb(255,102,0)" }}><b>Big Data Consulting</b></span>
			  </h3>
			  <p>
        Our Big data consulting services provide businesses with guidance on how to design and implement big data analytics solutions. This includes defining business requirements, identifying data sources, selecting the right technologies and tools, and creating a roadmap for implementation.
			  </p>
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Data Warehousing</b></span>
			  </h3>
			  <p>
			  Data warehousing is the process of consolidating data from multiple sources into a single, central repository for analysis. Our Data warehousing services provide businesses with a centralized storage solution that can scale to meet their needs.
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
				<span style={{ color: "rgb(255,102,0)" }}><b>Data Integration</b></span>
			  </h3>
			  <p>
			  Our Data integration services help businesses combine data from different sources into a single, unified view. This includes integrating data from on premise systems, cloud-based applications, and external data sources.
			  </p>
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Data Visualization</b></span>
			  </h3>
			  <p>
			  Our Data visualization services help businesses create interactive dashboards and reports that enable users to explore and analyse data in real-time. This includes creating charts, graphs, and other visualizations that provide insights into data trends and patterns.
			  </p>
			</div>
			<div className="col-md-5" data-aos="zoom-in-left">
			  <img src={logo5} alt="loading..." style={{ height: "300px", width: '80%', marginLeft: "6rem" }} />
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-right">
			  <img src={logo6} alt="loading..." style={{ height: "300px", width: '80%' }} />
			</div>
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Machine Learning and AI</b></span>
			  </h3>
			  <p>
			  Our Machine learning and AI services help businesses leverage advanced algorithms to uncover insights from their data. This includes creating predictive models that can be used to forecast trends and patterns, and to automate business processes.
			  </p>
			</div>
		  </div>
		</div>
		<div className="container">
		  <div className="row  paragraph1">
  
			
			<div className="col-md-5" data-aos="zoom-in-left">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Data Security</b></span>
			  </h3>
			  <p>
			  Our Data security services help businesses protect their data from unauthorized access, theft, or other cyber threats. This includes implementing data encryption, access controls, and other security measures to ensure the integrity and confidentiality of data.
			  </p>
			</div>
			<div className="col-md-5" data-aos="zoom-in-left">
			  <img src={logo7} alt="loading..." style={{ height: "300px", width: '80%' }} />
			</div>
		  </div>
		</div>
	

  
  
		<div className="container">
		  <div className="row  paragraph1">
			<div className="col-md-10 mt-5" data-aos="zoom-in-left">
			  <p>
			  Our Overall, big data analytics offerings provide businesses with the tools and expertise they need to turn their data into actionable insights, enabling them to make better decisions, optimize their operations, and create new opportunities.<a href="#">Get in touch with us for more Details.</a>
			  </p>
			</div>
		  </div>
		  <NavLink to="/arvr" className="" style={{float:"right",color:"rgb(255,102,0)",fontSize:"1.2rem", marginTop:"2rem",marginRight:"5rem"}} data-aos="zoom-in-left">Explore to AR & VR Solutions
		</NavLink>
		</div>
  
	  </div>
  );
};

export default BigData;