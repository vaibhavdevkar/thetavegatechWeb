import React from "react";
import "./AutonomousMachine.css";
import { NavLink } from 'react-router-dom';
import logo1 from "../img3/robotics-and-autonomous-machines-banner (1).jpg";
import logo2 from "../autonomus_photo/Consulting.avif";
import logo3 from "../autonomus_photo/Manufacturing.jpg";
import logo4 from "../autonomus_photo/Software Development.avif";
import logo5 from "../autonomus_photo/Machine_Integration.avif";
import logo6 from "../autonomus_photo/Mainch_Maintainance.avif";
import logo7 from "../autonomus_photo/Machine_monitoring.avif";
import logo8 from "../autonomus_photo/Safety.avif";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Autonomous = () => {
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
					<NavLink to="/" className="navbutton1"> Our Solutions </NavLink>/ <NavLink to="#" className="navbutton2"> Autonomous Machine </NavLink>
				</p>
			</div>

			<header className="bg32">
				<img src={logo1} alt="Logo" style={{ height: "25rem", opacity: "0.8", width: '100%' }} />
				<div className='AB-text0' >
					<h1><span style={{ color: "orange", textAlign: "left", marginLeft: "0px" }}> Autonomous Machines </span></h1>
					<div className="" >
						<h6>Revolutionize your industry with the power of autonomous machines.</h6>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-10 paragraph1" style={{ marginTop: "1rem" }}>
							<p>
								<span style={{ color: "rgb(255,102,0)" }}>Autonomous machines</span> are machines that can operate and make decisions without
								human intervention. These machines use sensors, artificial intelligence, and machine
								learning algorithms to perceive their environment, analyse data, and make decisions. We
								Offer related to autonomous machines that businesses can leverage to improve their
								operations.
							</p>
						</div>
					</div>
				</div>
			</header>
			{/* --------------------------------------SECTION----------------------------------------------------- */}
			<div className="container dataparts">
				<div className="row paragraph1 mt-5">
					
					<div className="col-md-5" data-aos="zoom-in-right">
						<img src={logo2} alt="loading..." style={{ height: "350px", width: '100%' }} />
					</div>
					<div className="col-md-5" data-aos="zoom-in-right" >
					<h3 className="b11">
						<span style={{ color: "rgb(255,102,0)" }}><b>Autonomous Machine Consulting</b></span>
					</h3>
						<p>
						We Provide Autonomous machine consulting services that includes strategic guidance to businesses looking to implement autonomous machines. Consultants can help businesses identify the right technologies and solutions that can improve business processes and create new opportunities.
						</p>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row  paragraph1">
					
					<div className="col-md-5" data-aos="zoom-in-left">
					<h3 className="b11">
						<span style={{ color: "rgb(255,102,0)" }}><b>Autonomous Machine Manufacturing</b></span>
					</h3>
						<p>
						We Offer Complete End-to-End Solutions for Designing & Development for Concept to Commissioning Services for Building Autonomous Machines & Integrating it to your existing Manufacturing Setup. 
						</p>
					</div>
					<div className="col-md-5" data-aos="zoom-in-left">
						<img src={logo3} alt="loading..." style={{ height: "300px", width: '80%', marginLeft:"6rem" }} />
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row paragraph1">
				
					<div className="col-md-5" data-aos="zoom-in-right">
						<img src={logo4} alt="loading..." style={{ height: "300px", width: '80%' }} />
					</div>
					<div className="col-md-5"  data-aos="zoom-in-right">
					<h3 className="b11">
						<span style={{ color: "rgb(255,102,0)" }}><b>Autonomous Machine Software Development</b></span>
					</h3>
						<p>
						Our Autonomous machine software development services provide customized software solutions that enable machines to operate autonomously. This includes developing algorithms, control systems, and machine learning models.
						</p>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row  paragraph1">
				
					<div className="col-md-5"  data-aos="zoom-in-left">
					<h3 className="b11">
						<span style={{ color: "rgb(255,102,0)" }}><b>Autonomous Machine Integration</b></span>
					</h3>
						<p>
						Our Autonomous machine integration services help businesses integrate autonomous machines with existing systems and processes. This includes integrating autonomous machines with enterprise software, cloud platforms, and other third-party systems.
						</p>
					</div>
					<div className="col-md-5" data-aos="zoom-in-left">
						<img src={logo5} alt="loading..." style={{ height: "300px", width: '80%' , marginLeft:"6rem" }} />
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
						<span style={{ color: "rgb(255,102,0)" }}><b>Autonomous Machine Maintenance</b></span>
					</h3>
						<p>
						our Autonomous machine maintenance services provide regular maintenance and repair for autonomous machines. This includes software updates, hardware upgrades, and troubleshooting.
						</p>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row  paragraph1">
				
					<div className="col-md-5" data-aos="zoom-in-left">
					<h3 className="b11">
						<span style={{ color: "rgb(255,102,0)" }}><b>Autonomous Machine Monitoring</b></span>
					</h3>
						<p>
						Our Autonomous machine monitoring services enable businesses to monitor the performance and health of autonomous machines in real-time. This includes data analytics, predictive maintenance, and remote monitoring.
						</p>
					</div>
					<div className="col-md-5" data-aos="zoom-in-left">
						<img src={logo7} alt="loading..." style={{ height: "300px", width: '80%', marginLeft:"6rem"  }} />
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row  paragraph1">
				
					<div className="col-md-5" data-aos="zoom-in-right">
						<img src={logo8} alt="loading..." style={{ height: "300px", width: '80%' }} />
					</div>
					<div className="col-md-5" data-aos="zoom-in-right">
						<br />
						<h3 className="b11">
						<span style={{ color: "rgb(255,102,0)" }}><b>Autonomous Machine Security</b></span>
					</h3>
						<p>
						our Autonomous machine security services provide solutions to protect autonomous machines, networks, and data from cyber threats. This includes secure machine authentication, data encryption, and secure network connections.
						</p>
					</div>
				</div>
			</div>
					
			<div className="container">
				<div className="row  paragraph1">
					<div className="col-md-10 mt-5" data-aos="zoom-in-left">
						<p>
						Our Overall, autonomous machine service offerings provide businesses with the tools and expertise needed to harness the power of autonomous machines and transform their operations. <a href="#">Get in touch with us for more Details.</a>
						</p>
					</div>
				</div>
				<NavLink to="/integrations" className="" style={{float:"right",color:"rgb(255,102,0)",fontSize:"1.2rem", marginTop:"2rem",marginRight:"5rem" }} data-aos="zoom-in-left">Explore to system Integration
		</NavLink>
			</div>

		</div>
	);
};

export default Autonomous;

