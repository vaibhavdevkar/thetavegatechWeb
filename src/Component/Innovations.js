import React from 'react'
import "./About.css"
import logo1 from "./ABOUT/Innovation.jpg"
import logo2 from "./ABOUT/assemblyLine.svg"
import logo3 from "./ABOUT/dataquality copy.svg"
import logo4 from "./ABOUT/productionPlanning copy.svg"
import logo5 from "./ABOUT/monitoring copy.svg"
import logo6 from "./ABOUT/quality copy.svg"
import logo7 from "./ABOUT/machineVision copy.svg"
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
                    <h1><span style={{ color: "rgb(255,102,6)", textAlign: "left", marginLeft: "0px", fontSize: "4rem" }}><b> Innovations</b></span></h1>
                    <h6>Innovating Beyond Boundaries: Speed, Imagination, and Excellence</h6>
                </div>
                <div className='row'>
                    <div className='col-md-11 mt-2 text-justify'>
                        <p> At Thetavega, we embody a culture of dynamic innovation that permeates every facet of our work – whether it's in service of our esteemed clients, dedicated employees, valued investors, or the wider community. Our core focus revolves around crafting and delivering Smart Automation, Digitization, and Traceability Solutions that redefine industry standards.
                        </p>
                    </div>
                    <div className='encompass mt-5' data-aos="fade-down">
                        <h1 className='text-center'><span style={{ color: "rgb(255,102,6)", marginLeft: "0rem", fontSize: "2.5rem" }}><b>Our Innovations Encompass</b></span></h1>
                    </div>
                    <div className="coreCard">
                        <div className='row '>
                            <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                                <div className='cardCore'>
                                    <img src={logo2} alt="Logo" style={{ padding: "1rem", width: "40%" }} />
                                    <h6 style={{ color: "orange" }}><b>Assembly Lines & Material Handling Systems</b></h6>
                                    <p>Revolutionizing manufacturing processes with intelligent assembly lines and efficient material handling systems.</p>
                                </div>
                            </div>
                            <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                                <div className='cardCore'>
                                    <img src={logo3} alt="Logo" style={{ padding: "1rem", width: "40%" }} />
                                    <h6 style={{ color: "orange" }}><b>Part Traceability & Quality Data Management</b></h6>
                                    <p>Pioneering track and trace systems that ensure part traceability and seamless quality data management.</p>
                                </div>
                            </div>
                            <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                                <div className='cardCore'>
                                    <img src={logo4} alt="Logo" style={{ padding: "1rem", width: "40%" }} />
                                    <h6 style={{ color: "orange" }}><b>Production Planning, Scheduling, Monitoring & Controlling</b></h6>
                                    <p>Elevating production efficiency through innovative planning, Proper scheduling, monitoring, and control systems.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row '>
                            <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                                <div className='cardCore'>
                                    <img src={logo5} alt="Logo" style={{ padding: "1rem", width: "40%" }} />
                                    <h6 style={{ color: "orange" }}><b>Remote Monitoring, Data Logging & Control</b></h6>
                                    <p>Harnessing remote monitoring capabilities and data logging for optimized operations.</p>
                                </div>
                            </div>
                            <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                                <div className='cardCore'>
                                    <img src={logo6} alt="Logo" style={{ padding: "1rem", width: "40%" }} />
                                    <h6 style={{ color: "orange" }}><b>Quality Testing & Assurance</b></h6>
                                    <p>Transforming quality testing and assurance with advanced systems for impeccable products.</p>
                                </div>
                            </div>
                            <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                                <div className='cardCore'>
                                    <img src={logo7} alt="Logo" style={{ padding: "1rem", width: "40%" }} />
                                    <h6 style={{ color: "orange" }}><b>Machine Vision and Sensors</b></h6>
                                    <p>Leveraging machine vision and cutting-edge sensors to unlock new dimensions of insights.</p>
                                </div>
                            </div>
                            <p className='col-md-10 text-justify' data-aos="zoom-in"> These solutions seamlessly integrate with our thought leadership, showcasing our prowess in both solution definition and engagement delivery. But our commitment to innovation goes beyond technology. It extends to how we operate our business, manage our processes, and foster leadership. It's about building a future where technology and humanity converge to create something truly exceptional.<br/><br/>

                                With Thetavega, you embark on a journey that pushes the boundaries of what's possible. Our promise to excel through innovation is etched into every aspect of our work – from our strategic approach to business operations, all the way to the way we shape our physical infrastructure and empower our talented team.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Innovations
