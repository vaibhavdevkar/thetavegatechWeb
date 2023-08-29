import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Datacpture.css"
import logo1 from '../TRACK N TRACE/machine Vision/Machine Vision Banner.jpg'
import logo2 from '../TRACK N TRACE/machine Vision/conselting.svg'
import logo3 from '../TRACK N TRACE/machine Vision/Camera and Lighting Selection.avif'
import logo4 from '../TRACK N TRACE/machine Vision/Image Processing Software Development.jpg'
import logo5 from '../TRACK N TRACE/machine Vision/System Integration.avif'
import logo6 from '../TRACK N TRACE/machine Vision/Quality Inspection and Control.avif'
import logo7 from '../TRACK N TRACE/machine Vision/packaging-closing-machine_18660-980.avif'
import logo8 from '../TRACK N TRACE/machine Vision/Training and Support.avif'
import logo9 from '../TRACK N TRACE/machine Vision/Customized Applications.avif'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

 


const MachineVision = () => {
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
			<NavLink to="/" className="navbutton1"> Dashboards </NavLink>/ <NavLink to="#" className="navbutton2"> Machine Vision </NavLink>
		  </p>
		</div>
  
		<header className="bg32">
		  <img src={logo1} alt="Logo" style={{ height: "25rem", opacity: "1", width: '100%' }} />
		  <div className='AB-text0' >
			<h1><span style={{ color: "orange", textAlign: "left", marginLeft: "0px" }}> Machine Vision</span></h1>
			<h6>systems use cameras and computer vision algorithms to automate visual inspections, measurements, and quality control processes in various industries. Here are some common offerings for machine vision systems</h6>
		   
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
				<span style={{ color: "rgb(255,102,0)" }}><b>Solution Design and Consultation</b></span>
			  </h3>
			  <p>
			  Machine vision solution design services involve understanding the specific requirements of a business and designing a machine vision system tailored to their needs. This includes selecting appropriate hardware, software, and algorithms for image processing and analysis.
			  </p>
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Camera and Lighting Selection</b></span>
			  </h3>
			  <p>
			  Choosing the right cameras and lighting is crucial for accurate machine vision. Offering assistance in selecting the appropriate cameras (2D, 3D, infrared, etc.) and lighting setups for different applications is essential.
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
				<span style={{ color: "rgb(255,102,0)" }}><b>Image Processing Software Development</b></span>
			  </h3>
			  <p>
			  Developing customized image processing software is essential for analyzing images captured by cameras. This includes creating algorithms for image enhancement, object detection, pattern recognition, and measurement.
			  </p>
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>System Integration</b></span>
			  </h3>
			  <p>
			  Integrating machine vision systems with existing production lines or processes is a critical service. This involves connecting cameras and computers with other components, like robots or conveyor systems.
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
				<span style={{ color: "rgb(255,102,0)" }}><b>Quality Inspection and Control</b></span>
			  </h3>
			  <p>
			  Machine vision is commonly used for quality inspection and control, ensuring products meet certain standards. This service includes developing algorithms to detect defects, measure dimensions, and check for completeness.
			  </p>
			</div>
		  </div>
		</div>
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Sorting and Packaging</b></span>
			  </h3>
			  <p>
			  Machine vision can also be used for sorting items based on their visual characteristics and for ensuring correct packaging. This involves real-time decision-making to categorize items accurately.
			  </p>
			</div>
			<div className="col-md-5" data-aos="zoom-in-right">
			  <img src={logo7} alt="loading..." style={{ height: "300px", width: '80%', marginLeft: "6rem" }} />
			</div>
		  </div>
		</div>
  
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-left">
			  <img src={logo8} alt="loading..." style={{ height: "300px", width: '80%' }} />
			</div>
			<div className="col-md-5" data-aos="zoom-in-left">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Training and Support</b></span>
			  </h3>
			  <p>
			  Offering training to operators and maintenance personnel is essential for the successful operation of machine vision systems. Additionally, providing ongoing support for troubleshooting and system updates ensures smooth functioning.
			  </p>
			</div>
		  </div>
		</div>
		<div className="container">
		  <div className="row  paragraph1">
  
			<div className="col-md-5" data-aos="zoom-in-right">
			  <h3 className="b11">
				<span style={{ color: "rgb(255,102,0)" }}><b>Customized Applications</b></span>
			  </h3>
			  <p>
			  Machine vision can be tailored to various industries, from manufacturing to healthcare. Offering customized applications that address specific industry needs is an important service.
			  </p>
			</div>
			<div className="col-md-5" data-aos="zoom-in-right">
			  <img src={logo9} alt="loading..." style={{ height: "300px", width: '80%', marginLeft: "6rem" }} />
			</div>
		  </div>
		</div>
		<div className="container">
		  <div className="row  paragraph1">
			<div className="col-md-10 mt-5"data-aos="zoom-in-left">
			  <p>
			  Overall, machine vision system offerings provide businesses with the tools and expertise you need to enhance your quality control, streamline processes, and improve efficiency through automated visual inspection and analysis.<a href="#">Get in touch with us for more Details.</a>
			  </p>
			</div>
		  </div>
		<NavLink to="/m2m" className="" style={{float:"right",color:"rgb(255,102,0)",fontSize:"1.2rem", marginTop:"2rem",marginRight:"5rem"}}  data-aos="zoom-in-left">Explore to Machine-To-Machine
		</NavLink>
		</div>
	  </div>
  )
}

export default MachineVision