import React from 'react'
import "./About.css"
import logo1 from "./ABOUT/Skills.jpg"
import logo2 from "./ABOUT/Dynamic Skill Fusion copy.svg"
import logo3 from "./ABOUT/Iterative Strategy Alignment copy.svg"
import logo4 from "./ABOUT/Development Competence copy.svg"
import logo5 from "./ABOUT/Integration Mastery copy.svg"
import logo6 from "./ABOUT/AI & Deep Learning Alchemy copy.svg"
import logo7 from "./ABOUT/Ingenious Design.svg"
import logo8 from "./ABOUT/Software Expertise.svg"
import logo9 from "./ABOUT/Hardware Proficiency copy.svg"
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
                <img src={logo1} alt="Logo" style={{ height: "25rem", opacity: "0.8", width: '100%', marginTop: "6rem" }} />
                <div className='AB-text0' >
                    <h1><span style={{ color: "rgb(255,102,6)", textAlign: "left", marginLeft: "0px", fontSize: "4rem" }}><b> Skills</b></span></h1>
                    <h6>Unleashing Expertise: Where Skills Sculpt Transformation</h6>
                </div>
                <div className='row'>
                    <div className='col-md-11 mt-5 text-justify'>
                        <p> At Thetavega, we understand that true technological transformation demands a symphony of skills and competencies. It's about harnessing the power of multidisciplinary expertise to orchestrate the convergence of business and technology.
                        </p>
                    </div>
                    <div className='encompass mt-5' data-aos="fade-down">
                        <h1 className='text-center'><span style={{ color: "rgb(255,102,6)", marginLeft: "0rem", fontSize: "2rem" }}><b>Our Our Skills Unveiled</b></span></h1>
                    </div>
                    <div className="coreCard">
                        <div className='row '>
                            
                            <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                                <div className='cardCore'>
                                    <img src={logo2} alt="Logo" style={{ padding: "1rem", width: "60%" }} />
                                    <h6 style={{ color: "orange" }}><b>Dynamic Skill Fusion</b></h6>
                                    <p>Just as colors blend to create a masterpiece, our diverse skills and competencies seamlessly meld to forge technology-driven business transformations. We are the architects of innovation.</p>
                                </div>
                            </div>
                            <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                                <div className='cardCore'>
                                    <img src={logo3} alt="Logo" style={{ padding: "1rem", width: "60%" }} />
                                    <h6 style={{ color: "orange" }}><b>Iterative Strategy Alignment</b></h6>
                                    <p>In a world where strategies evolve, we are your partners in constant iteration. We optimize and align your business strategy with technology initiatives, ensuring every move is strategic and impactful.</p>
                                </div>
                            </div>
                       
                       
                            <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                                <div className='cardCore'>
                                    <img src={logo4} alt="Logo" style={{ padding: "1rem", width: "60%" }} />
                                    <h6 style={{ color: "orange" }}><b>Development Competence</b></h6>
                                    <p>Our development team is a powerhouse of expertise. From machine interfacing to networking, embedded systems to Microsoft technologies, we are fluent in the language of innovation.</p>
                                </div>
                            </div>
                            <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                                <div className='cardCore'>
                                    <img src={logo5} alt="Logo" style={{ padding: "1rem", width: "60%" }} />
                                    <h6 style={{ color: "orange" }}><b>Integration Mastery</b></h6>
                                    <p>Bridging gaps is our forte. We seamlessly integrate SAP, harness database management, and navigate the realms of cloud computing with expertise that breeds simplicity out of complexity.</p>
                                </div>
                            </div>
                            <div className='row '>
                            
                            <div className='col-md-3 p3 text-center' data-aos="zoom-in" >
                                <div className='cardCore'>
                                    <img src={logo6} alt="Logo" style={{ padding: "1rem", width: "60%" }} />
                                    <h6 style={{ color: "orange" }}><b>AI & Deep Learning Alchemy</b></h6>
                                    <p>As pioneers in AI and deep learning, we conjure algorithms that shape the future. We turn data into intelligence and make machines not just smart, but insightful.</p>
                                </div>
                            </div>
                            <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                                <div className='cardCore'>
                                    <img src={logo7} alt="Logo" style={{ padding: "1rem", width: "60%" }} />
                                    <h6 style={{ color: "orange" }}><b>Ingenious Design</b></h6>
                                    <p>Our skills don't just reside in the digital realm. We master PLCs and SCADA systems, paint with pixels in image processing, compose symphonies with sound processing, and craft mechanical systems with precision.</p>
                                </div>
                            </div>
                       
                       
                            <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                                <div className='cardCore'>
                                    <img src={logo8} alt="Logo" style={{ padding: "1rem", width: "60%" }} />
                                    <h6 style={{ color: "orange" }}><b>Software Expertise</b></h6>
                                    <p>Our software team boasts mastery over frontend and backend technologies, database management, and cloud solutions. We infuse creativity and functionality into every line of code.</p>
                                </div>
                            </div>
                            <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                                <div className='cardCore'>
                                    <img src={logo9} alt="Logo" style={{ padding: "1rem", width: "60%" }} />
                                    <h6 style={{ color: "orange" }}><b>Hardware Proficiency</b></h6>
                                    <p>From panel building to embedded logic development, our hardware team's expertise extends seamlessly to PLC and SCADA programming. We translate concepts into tangible, functional reality.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                            <p className='col-md-10 text-center' data-aos="zoom-in">Where Skills Ignite Possibilities: Crafting Transformational Solutions</p>
                </div>
            </div>
            </div>
        </header>
    )
}

export default Innovations
