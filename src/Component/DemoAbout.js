
import React from 'react';
// import { Container, Row, Col, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Demoabout.css'
import { useState } from 'react';
import logo from './imgs/slide2.jpg'
import logo2 from './imgs/about.png'
import Footer from './Footer'


function Demoabout() {

    let aboutdata = ` Offering Turnkey Automation, Digitalization & Traceability Solutions
    We Offer, IIoT based Smart Automation, Digitalization & Traceability Solutions to Manufacturing Industries-as partner to conceptualize and realize technology driven business transformation Initiatives. We provide solution for any Dynamic Environment where Business and Technology Strategies converge to enhance their Productivity and Profitability Together by using a low-risk Global Delivery Model (GDM) to accelerate schedules with a high degree of Time and Cost Predictability. Our approach focuses on innovative ways of Technologies combining both Information Technology and Operational Technology which includes Smart Autonomous Machines, System Integration, IIOT, Could Computing, Big Data Analytics, and AR & VR Solutions. We work with large Global Corporations and new Generation Technologies to build new Products or Services and to Implement Sensible Business and Technology Strategies in Dynamic Digital Environment`
  
    let infradata = `With sustained Infrastructure Investment, we have created a Premier Knowledge Networked Environment from where our employees provide High Quality Solutions to Clients.  These investments enhance Employee productivity and reduce engagement risk for our clients. A Multi –Dimensional approach, planned to support Growth and Technology Advancement, ensures that the solutions we Architect for our clients are built in a most Productive and Effective`
  
    const [data , setData ] = useState(aboutdata)
    const [img , setImg] = useState(logo)
    
    function handleClick1() {
      setData("Innovation")
      setImg(logo2)
      
    }
  
    function handleClick2() {
      setData(infradata)
    }
  
    function handleClick3() {
      setData("Skills data ")
    }
  
    function handleClick4() {
      setData("Our Approach")
    }
  
    
    function handleClick5() {
      setData(aboutdata)
      setImg(logo)
      
    }

  return (
    <div className="container-fluid" id="democontainer">
    <div className="row">
      <div className="col-lg-2 col-md-3 col-sm-4 col-12" id="demodiv1">
        <nav className="navbar bg-dark">
          <ul className="nav navbar-nav flex-column">
            <li className="nav-item">
              <NavLink to="/about" onClick={handleClick5} className="link">
              <button class="button-4" role="button">About</button>
              {/* <button type="button" class="btn btn-secondary" id="demobutton">Secondary</button> */}
                {/* <button className="button-40 btn-outline-light btn-sm">About</button> */}
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleClick1}>
              <NavLink to="/about" className="link">
              <button class="button-4" role="button">Innovation</button>
              {/* <button type="button" class="btn btn-secondary" id="demobutton">Secondary</button> */}
                {/* <button className="button-40 btn-outline-light btn-sm">Innovation</button> */}
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleClick2}>
              <NavLink to="/about" className="link">
              <button class="button-4" role="button">Infracture</button>
              {/* <button type="button" class="btn btn-secondary" id="demobutton">Secondary</button> */}
                {/* <button className="button-40 btn-outline-light btn-sm">Infrastructure</button> */}
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleClick3}>
              <NavLink to="/about" className="link">
              <button class="button-4" role="button">Skills</button>
              {/* <button type="button" class="btn btn-secondary" id="demobutton">Secondary</button> */}
                {/* <button className="button-40 btn-outline-light btn-sm">Skills</button> */}
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleClick4}>
              <NavLink to="/about" className="link">
              {/* <button type="button" class="btn btn-secondary" id="demobutton">Secondary</button> */}
              <button class="button-4" role="button">Our Approach</button>
                {/* <button className="button-40 btn-outline-light btn-sm">Our Approach</button> */}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-lg-5 col-md-4 col-sm-8 col-12 text-justify" id="demodiv2">
      {/* <img src={logo} alt="not found" className="img-fluid" /> */}
      {data}
      </div>
      <div className="col-lg-5 col-md-5 col-sm-12 col-12 " id="demodiv3">
        <img src={logo} alt="not found" className="img-fluid" />
        {/* {data} */}
      </div>
     
    </div>
    <div className='row'>
        <div className='col-12 ' id="demoborder">
            <Footer />
        </div>
    </div>
  </div>
  
  );
}

export default Demoabout;
