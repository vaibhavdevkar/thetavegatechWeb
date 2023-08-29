import React from 'react'
import logo1 from "./ABOUT/About us .jpg"
import logo2 from "./ABOUT/trust copy.svg"
import logo3 from "./ABOUT/business scale copy.svg"
import logo4 from "./ABOUT/reliablitiy copy.svg"
import logo5 from "./ABOUT/relationship copy.svg"
import logo6 from "./ABOUT/morality copy.svg"
import logo7 from "./ABOUT/choice copy.svg"
import logo8 from "./ABOUT/customer centric.svg"
import logo9 from "./ABOUT/INNOVATION copy.svg"
import logo10 from "./ABOUT/OWNERSHIP copy.svg"
import logo11 from "./ABOUT/TEAMWORK copy.svg"
import logo12 from "./ABOUT/INTEGRITY FAIR copy.svg"
import "./About.css"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




const About = () => {
  useEffect(() => {
    AOS.init(); // Initialize the AOS library
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <header className="bg32" style={{ overflow: "hidden" }}>
      <img src={logo1} alt="Logo" style={{ height: "25rem", opacity: "0.9", width: '100%', marginTop: "6rem" }} />
      <div className='AB-text0' >
        <h1><span style={{ color: "rgb(255,102,6)", textAlign: "left", marginLeft: "0px", fontSize: "4rem" }}><b> About Us </b></span></h1>
        <h6>Empowering Progress, Engineering Tomorrow</h6>
      </div>
      <div className='row'>
        <div className='col-md-11 mt-5 text-justify' data-aos="fade-up">
          <p> <span style={{ color: "rgb(255,102,0)", fontSize: "1.4rem" }}><b>Welcome to Theta-Vega Tech</b></span> your partner in propelling manufacturing industries into a smarter future. As a premier technological solutions provider, we specialize in delivering end-to-end <b>Automation, Digitalization, and Traceability solutions</b> that drive business transformations.<br /><br />
            Our mission is to conceptualize and realize technology-driven initiatives that empower businesses to thrive in dynamic environments. We excel at bridging the gap between business and technology strategies, enhancing productivity, quality, and profitability through innovative approaches.<br /><br />
            At the heart of our offerings lies the fusion of Information Technology and Operational Technology. We harness the power of autonomous machines, system integration, Industrial Internet of Things (IIOT), cloud computing, big data analytics, and augmented & virtual reality solutions. With our turnkey solutions, we elevate manufacturing processes to new heights, transforming industries such as automotive, steel and mining, textiles, energy and gas, white goods, food, pharmaceuticals, breweries, building management, and agriculture.<br /><br />
            Collaborating with global corporations and embracing cutting-edge technologies, we design new products and services, and strategically implement digital solutions in ever-evolving digital landscapes. Our commitment to quality is unwavering as we continuously refine our systems and processes to deliver predictable excellence.
            Accredited with ISO 9001:2015 for Quality Management System (QMS) and ISO 27001:2013 for Information Security Management System (ISMS), we uphold the highest standards on a global scale.<br /><br />
            Join us on this journey of innovation, transformation, and progress. Discover how Thetavega is shaping industries, delivering results, and building a future powered by technology, ingenuity, and vision.<br /><br />

          </p>
          <div className='meaning mt-5'>
            <h1 className='text-center heading-ethics ' style={{ color: "orange" }} data-aos="fade-down"
            ><b>Unveiling the Essence</b></h1>
            <p className='text-center' data-aos="fade-down"
            >The Profound Significance Behind the name Theta-Vega</p>
            <div className="row" style={{ padding: "1rem" }}>
              <h2 style={{ color: "orange", textAlign: "center", fontSize: "bolder" }} data-aos="fade-down">Theta (θ):</h2>
              <div className="col-md-4 p-3 " data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className='border p-4 meaning-card' style={{ borderRadius: "1rem", boxShadow: " 1px 1px 9px 1px orange" }}>
                  <h3 className="text-center">Transformation</h3>
                  <p>Theta (θ) is often used to represent transformation in various fields, including mathematics and physics. Similarly, our company symbolize the transformation of traditional processes into modern, automated, and digitalized workflows.</p>
                </div>
              </div>
              <div className="col-md-4 p-3 " data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className='border p-4 meaning-card' style={{ borderRadius: "1rem", boxShadow: " 1px 1px 9px 1px orange" }}>
                  <h3 className="text-center">Continuous Improvement</h3>
                  <p>Theta also signifies continuous improvement and change. This aligns well with our focus on Automation, Digitization & Traceability, which constantly seeks to enhance processes, efficiency, and traceability.</p>
                </div>
              </div>
              <div className="col-md-4 p-3" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className='border p-4 meaning-card' style={{ borderRadius: "1rem", boxShadow: " 1px 1px 9px 1px orange" }}>
                  <h3 className="text-center">Innovation</h3>
                  <p>Theta represent innovation and new beginnings. It suggests that our company is at the forefront of adopting innovative technologies and practices in automation and digitalization.</p>
                </div>
              </div>
            </div>
            <div className="row" style={{ padding: "1rem" }}>
              <h2 style={{ color: "orange", textAlign: "center", fontSize: "bolder" }} data-aos="fade-down">Vega (V):</h2>
              <div className="col-md-4 p-3 " data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className='border p-4 meaning-card' style={{ borderRadius: "1rem", boxShadow: " 1px 1px 9px 1px orange" }}>
                  <h3 className="text-center">Symbolism of Vision</h3>
                  <p>Vega is one of the brightest stars in the sky and is often associated with vision and clarity. Here, Vega implies a clear vision for the future of automation, digitalization, and traceability.</p>
                </div>
              </div>
              <div className="col-md-4 p-3 " data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className='border p-4 meaning-card' style={{ borderRadius: "1rem", boxShadow: " 1px 1px 9px 1px orange" }}>
                  <h3 className="text-center">Precision and Accuracy</h3>
                  <p>Vega's brightness and visibility can be linked to the precision and accuracy that automation and digitalization bring to processes. this conveys the idea that ensures accurate and reliable results.</p>
                </div>
              </div>
              <div className="col-md-4 p-3 " data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className='border p-4 meaning-card' style={{ borderRadius: "1rem", boxShadow: " 1px 1px 9px 1px orange" }}>
                  <h3 className="text-center">Navigational Aspect</h3>
                  <p>In navigation, Vega has been used as a reference point. Similarly, we could be seen as a guiding reference in the realm of Automation, Digitization & Traceability needs, assisting businesses in navigating the complexities of modern processes.</p>
                </div>
              </div>
              <p style={{fontSize:"1.2rem"}} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">Combining <span style={{ color: 'orange' }}>"Theta"</span> and <span style={{ color: 'orange' }}
              >"Vega"</span> create a name that represents both transformation and clarity, showcasing our company's commitment to driving change through innovative automation, digitalization, and traceability solutions while maintaining a focus on accuracy and vision for the future.</p>
            </div>
          </div>
          <div className="Ethics mt-5">
            <h1 className='text-center heading-ethics mb-5' style={{ color: "orange" }} data-aos="fade-down"><b>Business Ethics</b></h1>
            <div className='row'>
              <div className='col-md-2 p-3' data-aos="zoom-in">
                <div className='EthicsCard'>
                  <img src={logo2} alt="Logo" style={{ padding: "1rem" }} />
                  <h5 style={{ textAlign: "center" }}>Trust</h5>
                </div>
              </div>
              <div className="col-md-2 p-3" data-aos="zoom-in">
                <div className='EthicsCard'>
                  <img src={logo3} alt="Logo" style={{ padding: "1rem" }} />
                  <h5 style={{ textAlign: "center" }}>Business Scale</h5>
                </div>
              </div>
              <div className="col-md-2 p-3" data-aos="zoom-in">
                <div className='EthicsCard'>
                  <img src={logo4} alt="Logo" style={{ padding: "1rem" }} />
                  <h5 style={{ textAlign: "center" }}>Reliability</h5>
                </div>
              </div>
              <div className="col-md-2 p-3" data-aos="zoom-in">
                <div className='EthicsCard'>
                  <img src={logo5} alt="Logo" style={{ padding: "1rem" }} />
                  <h5 style={{ textAlign: "center" }}>Relationship</h5>
                </div>
              </div>
              <div className="col-md-2 p-3" data-aos="zoom-in">
                <div className='EthicsCard'>
                  <img src={logo6} alt="Logo" style={{ padding: "1rem" }} />
                  <h5 style={{ textAlign: "center" }}>Morality</h5>
                </div>
              </div> 
              <div className="col-md-2 p-3"data-aos="zoom-in">
                <div className='EthicsCard'>
                  <img src={logo7} alt="Logo" style={{ padding: "1rem" }} />
                  <h5 style={{ textAlign: "center" }}>Choice</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='Corevalues'>
          <h1 className='text-center heading-ethics mb-2' style={{ color: "orange", marginTop: "5rem" }}><b>Core Values</b></h1>
          <div className="coreCard">
            <div className='row '>
              <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                <div className='cardCore' >
                  <img src={logo8} alt="Logo" style={{ padding: "1rem", width: "40%" }} />
                  <h6 style={{ color: "orange" }}><b>Customer Centric</b></h6>
                  <p>Customer satisfaction forms the crux of all sorts of deliverables from Thetavega</p>
                </div>
              </div>
              <div className='col-md-3 p3 text-center'data-aos="zoom-in">
                <div className='cardCore' >
                  <img src={logo9} alt="Logo" style={{ padding: "1rem", width: "40%" }} />
                  <h6 style={{ color: "orange" }}><b>Innovation</b></h6>
                  <p>Out-of-the-box thinking sets us apart and brings all our stakeholders the best solution for a win-win situation</p>
                </div>
              </div>
              <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                <div className='cardCore'>
                  <img src={logo10} alt="Logo" style={{ padding: "1rem", width: "40%" }} />
                  <h6 style={{ color: "orange" }}><b>Ownership & Accountability</b></h6>
                  <p>We take accountability for our actions and own the results to improve and enhance all your needs</p>
                </div>
              </div>
            </div>
            <div className='row '>
              <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                <div className='cardCore'>
                  <img src={logo2} alt="Logo" style={{ padding: "1rem", width: "40%" }} />
                  <h6 style={{ color: "orange" }}><b>Trust & Mutual Respect</b></h6>
                  <p>Transparent and open communication at Thetavega values your opinions and suggestions</p>
                </div>
              </div>
              <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                <div className='cardCore'>
                  <img src={logo11} alt="Logo" style={{ padding: "1rem", width: "40%" }} />
                  <h6 style={{ color: "orange" }}><b>Teamwork</b></h6>
                  <p>Cooperative working brings the best results as trust is shared and result is achieved through collaborative efforts</p>
                </div>
              </div>
              <div className='col-md-3 p3 text-center' data-aos="zoom-in">
                <div className='cardCore'>
                  <img src={logo12} alt="Logo" style={{ padding: "1rem", width: "40%" }} />
                  <h6 style={{ color: "orange" }}><b>Customer Centric</b></h6>
                  <p>Functioning makes us unique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default About
