import React from "react";
import "./ArVr.css"
import { NavLink } from 'react-router-dom';
import logo1 from "../AR_VR/Bnnerarvr.jpg"
import logo2 from "../AR_VR/ar bASED mANUFACTURING.svg"
import logo3 from "../AR_VR/ar BAED mAINTANANCE.avif"
import logo4 from "../AR_VR/ar BASED TARINING .avif"
import logo5 from "../AR_VR/QUALITY CONTROL.avif"
import logo6 from "../AR_VR/VR-based Design and Visualization.avif"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';





const ArVr = () => {

	useEffect(() => {
		AOS.init(); // Initialize the AOS library
	  }, [])

	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
	}, []);
	return (
		<div className="container-fluid">
		<div className="bg0">
		  <p className="col-md-12" >
			<NavLink to="/" className="navbutton1"> Our Solutions </NavLink>/ <NavLink to="#" className="navbutton2"> AR & VR Solutions </NavLink>
		  </p>
		</div>
  
		<header className="bg32">
		  <img src={logo1} alt="Logo" style={{ height: "25rem", opacity: "1", width: '100%' }} />
		  <div className='AB-text0' >
			<h1><span style={{ color: "rgb(255,102,6)", textAlign: "left", marginLeft: "0px" }}> AR & VR Solutions </span></h1>
			<h6>Experience the future of work with our AR & VR solutions.</h6>
		  </div>
		  <div className="container">
			<div className="row">
			  <div className="col-md-10 paragraph1" style={{ marginTop: "1rem" }}>
				<p>
				  <span style={{ color: "rgb(255,102,0)" }}>Augmented reality (AR) and virtual reality (VR) </span> technologies are rapidly transforming the manufacturing industry by enabling workers to visualize, simulate, and optimize complex processes and systems. We Offer: 
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
				<span style={{ color: "rgb(255,102,0)" }}><b>AR-based Manufacturing Operations</b></span>
			  </h3>
			  <p>
			  Our AR-based Tool Operation solutions enable workers to track and manage Operational processes in real-time. This includes using AR headsets to overlay digital information onto physical products, such as DC Tool Operations, Testing’s, Product Management, Setup Change, Etc.
			  </p>
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>AR-based Maintenance and Repair</b></span>
			  </h3>
			  <p>
			  Our AR-based maintenance and repair solutions provide workers with real-time, hands-free access to information, enabling them to perform maintenance and repair tasks more efficiently. This includes using AR headsets to overlay digital information onto physical equipment, such as maintenance procedures, equipment manuals, and repair instructions.
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
				<span style={{ color: "rgb(255,102,0)" }}><b>VR-based Training and Simulation</b></span>
			  </h3>
			  <p>
			  Our VR-based training and simulation solutions enable workers to practice and learn complex manufacturing processes and systems in a safe, virtual environment. This includes simulating equipment operation, assembly lines, and other manufacturing processes, allowing workers to gain hands-on experience without the risk of injury or damage to equipment.
			  </p>
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>AR-based Quality Control</b></span>
			  </h3>
			  <p>
			  Our AR-based quality control solutions enable workers to identify defects and anomalies in real-time, improving the accuracy and efficiency of quality control processes. This includes using AR headsets to overlay digital information onto physical products, such as inspection criteria, quality standards, and defect detection algorithms.
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
				<span style={{ color: "rgb(255,102,0)" }}><b>VR-based Design and Visualization</b></span>
			  </h3>
			  <p>
			  Our VR-based design and visualization solutions enable engineers and designers to create and visualize product designs in a virtual environment. This includes creating 3D models, prototypes, and simulations of products, enabling designers to optimize designs and reduce the need for physical prototypes.
			  </p>
			</div>
		  </div>
		</div>
  
	
		
  
  
		<div className="container">
		  <div className="row  paragraph1">
			<div className="col-md-10 mt-5" data-aos="zoom-in-left">
			  <p>
			  Our Overall, AR and VR offerings for manufacturing industries provide businesses with the tools and technologies they need to optimize their operations, improve efficiency, and reduce costs, while also enhancing worker safety and productivity. <a href="#">Get in touch with us for more Details.</a>
			  </p>
			</div>
		  </div>
		  <NavLink to="/autonomous" className="" style={{float:"right",color:"rgb(255,102,0)",fontSize:"1.2rem", marginTop:"2rem",marginRight:"5rem"}} data-aos="zoom-in-left">Explore to Autonomus Machines
		</NavLink>
		</div>
  
	  </div>
	)
};

export default ArVr;
