import React from 'react'
import "./About.css"
import logo1 from "./ABOUT/Approack.jpeg"
import logo3 from "./ABOUT/Knowledge Networked Environment copy.svg"
import logo4 from "./ABOUT/Enhanced Employee Productivity copy.svg"
import logo5 from "./ABOUT/Reduced Engagement Risk copy.svg"
import logo6 from "./ABOUT/Multi-Dimensional Approach copy.svg"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Innovations = () => {
    useEffect(() => {
        AOS.init(); // Initialize the AOS library
      }, []);
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);
    return (
        <header className="bg32" style={{ overflow: "hidden" }}>
            <div className='container-fluid m-0  p-0'>
                <img src={logo1} alt="Logo" style={{ height: "25rem", opacity: "1", width: '100%', marginTop: "6rem" }} />
                <div className='AB-text0' >
                    <h1><span style={{ color: "rgb(255,102,6)", textAlign: "left", marginLeft: "0px", fontSize: "4rem" }}><b> Infrastructure</b></span></h1>
                    <h6>Elevating Possibilities: Empowering Excellence Through Infrastructure</h6>
                </div>
                <div className='row'>
                    <div className='col-md-11 mt-5 text-justify'>
                        <p> At Thetavega, we understand that the foundation of success lies in our infrastructure. With dedicated and sustained investment in our infrastructure, we've created a premier knowledge-networked environment – the Launchpad from which our talented team crafts high-quality solutions for our clients.
                        </p>
                    </div>
                    <div className='encompass mt-5' data-aos="fade-down">
                        <h1 className='text-center'><span style={{ color: "rgb(255,102,6)", marginLeft: "0rem", fontSize: "2rem" }} ><b>Our Infrastructure Highlights:</b></span></h1>
                    </div>
                    <div className="coreCard">
                        <div className='row '>
                            
                            <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                                <div className='cardCore'>
                                    <img src={logo3} alt="Logo" style={{ padding: "1rem", width: "60%" }} />
                                    <h6 style={{ color: "orange" }}><b>Knowledge Networked Environment</b></h6>
                                    <p>Our infrastructure isn't just bricks and mortar; it's the bedrock of a connected ecosystem where knowledge flows seamlessly. This dynamic environment empowers our employees to deliver exceptional solutions.</p>
                                </div>
                            </div>
                            <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                                <div className='cardCore'>
                                    <img src={logo4} alt="Logo" style={{ padding: "1rem", width: "60%" }} />
                                    <h6 style={{ color: "orange" }}><b>Enhanced Employee Productivity</b></h6>
                                    <p>By providing our team with cutting-edge tools and technologies, we create an environment that fuels their productivity and fosters innovation. An empowered team translates to transformative solutions.</p>
                                </div>
                            </div>
                       
                       
                            <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                                <div className='cardCore'>
                                    <img src={logo5} alt="Logo" style={{ padding: "1rem", width: "60%" }} />
                                    <h6 style={{ color: "orange" }}><b>Reduced Engagement Risk</b></h6>
                                    <p>Investing in our infrastructure isn't just about the present; it's about building a future of stability and confidence. Our robust infrastructure reduces engagement risks for our clients, ensuring that their projects are in capable hands.</p>
                                </div>
                            </div>
                            <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                                <div className='cardCore'>
                                    <img src={logo6} alt="Logo" style={{ padding: "1rem", width: "60%" }} />
                                    <h6 style={{ color: "orange" }}><b>Multi-Dimensional Approach</b></h6>
                                    <p>We don't just invest; we strategically plan. Our multi-dimensional approach is a testament to our commitment to growth and technological advancement. This ensures that the solutions we architect are forward-looking and built to withstand the test of time.</p>
                                </div>
                            </div>
                           
                            <p className='col-md-10 text-center' data-aos="zoom-in">Innovation Beyond Boundaries: Where Infrastructure Meets Excellence
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Innovations
