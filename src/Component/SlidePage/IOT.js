import React from "react";
import "./IOT.css";
import { NavLink } from 'react-router-dom';
import logo1 from "../IOT/Banner.jpg";
import logo2 from "../IOT/1. Digital_Transformation_Consultancy.png";
import logo3 from "../IOT/management.jpg";
import logo4 from "../IOT/analytics.webp";
import logo5 from "../IOT/Cyber_Security.png";
import logo6 from "../IOT/AI_ML_Integration.avif";
import logo7 from "../IOT/IOT_INtegration.svg";

import logo from "../img3/IOT.png"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const IOT = () => {
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
          <NavLink to="/" className="navbutton1"> Our Solutions </NavLink>/ <NavLink to="#" className="navbutton2"> Internet Of Things </NavLink>
        </p>
      </div>

      <header className="bg32">
        <img src={logo1} alt="Logo" style={{ height: "25rem", opacity: "0.8", width: '100%' }} />
        <div className='AB-text0' >
          <h1><span style={{ color: "orange", textAlign: "left", marginLeft: "0px" }}> Internet Of Things </span></h1>
          <h6>Connect your world, unleash the power of IoT.</h6>
         
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-10 paragraph1" style={{ marginTop: "1rem" }}>
              <p>
                <span style={{ color: "rgb(255,102,0)" }}>Internet of Things (IoT) </span> refers to the interconnected network of physical devices, Machines, appliances, and other objects that are embedded with sensors, software, and network connectivity to collect and exchange data. We Offer various IoT service that businesses can leverage to improve their operations and create new revenue streams. We Offer
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
              <span style={{ color: "rgb(255,102,0)" }}><b>IoT Consultancy</b></span>
            </h3>
            <p>
            We provides strategic guidance to businesses looking to implement IoT solutions. we help identify the right technologies and solutions that can improve business processes and create new opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row  paragraph1">

          <div className="col-md-5" data-aos="zoom-in-right">
            <h3 className="b11">
              <span style={{ color: "rgb(255,102,0)" }}><b>IoT Device Management</b></span>
            </h3>
            <p>
            Our IoT device management services offer device provisioning, monitoring, and maintenance solutions. This service helps ensure that devices are secure, reliable, and always connected to the network.
            </p>
          </div>
          <div className="col-md-5" data-aos="zoom-in-right">
            <img src={logo3} alt="loading..." style={{ height: "300px", width: '80%', marginLeft: "6rem" }} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row paragraph1">

          <div className="col-md-5" data-aos="zoom-in-left" >
            <img src={logo4} alt="loading..." style={{ height: "300px", width: '80%' }} />
          </div>
          <div className="col-md-5" data-aos="zoom-in-left">
            <h3 className="b11">
              <span style={{ color: "rgb(255,102,0)" }}><b>IoT Analytics</b></span>
            </h3>
            <p>
            Our IoT analytics services help businesses derive insights from the data collected by IoT devices. This service includes data processing, data analysis, and data visualization.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row  paragraph1">

          <div className="col-md-5" data-aos="zoom-in-right">
            <h3 className="b11">
              <span style={{ color: "rgb(255,102,0)" }}><b>IoT Security</b></span>
            </h3>
            <p>
            Our IoT security services provide solutions to protect IoT devices, networks, and data from cyber threats. This includes secure device authentication, data encryption, and secure network connections.
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
              <span style={{ color: "rgb(255,102,0)" }}><b>IoT Application Development</b></span>
            </h3>
            <p>
            We Provide IoT application development services which includes Developing custom applications that run on IoT devices. These applications can automate processes, enable remote control, and provide real-time data visualization.
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
            We Provide IoT integration services help businesses integrate IoT solutions with existing systems and processes. This includes integrating IoT devices with enterprise software, cloud platforms, and other third-party systems.
            </p>
          </div>
          <div className="col-md-5" data-aos="zoom-in-right">
            <img src={logo7} alt="loading..." style={{ height: "300px", width: '80%', marginLeft: "6rem" }} />
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row  paragraph1">
          <div className="col-md-10 mt-5" data-aos="zoom-in-left">
            <p>
            Our Overall, IoT service offerings provide businesses with the tools and expertise needed to harness the power of IoT and transform their operations. <a href="#">Get in touch with us for more Details.</a>
            </p>
          </div>
        </div>
        <NavLink to="/cloudcomputing" className="" style={{float:"right",color:"rgb(255,102,0)",fontSize:"1.2rem", marginTop:"2rem",marginRight:"5rem"}} data-aos="zoom-in-left">Explore to Cloud Computing
		</NavLink>
      </div>

    </div>
  );
};

export default IOT;
