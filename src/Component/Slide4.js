import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "./imgs/Autonomous-machines-copy.svg";
import logo1 from "./imgs/system-integration-copy.svg";
import logo2 from "././imgs/IOT copy.svg";
import logo3 from "./imgs/cloud_computing_copy.svg";
import logo4 from  "./imgs/big_data_analytics_copy.svg";
import logo5 from "./imgs/AR-VR_Solutions_copy.svg";
import "./card2.css";
import { colors } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Slide4 = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleExploreClick = (url) => {
    window.location.href = url;
  }

  const handleNextClick = () => {
    // navigate to the next page
    console.log("/Autonomous");
  }

  useEffect(() => {
    AOS.init(); // Initialize the AOS library
  }, []);

  return (
    <div className='product0'>
      {/* <div className='col' id="bg10">
        <h1 style={{ textAlign: "center", paddingTop: "40px" }}></h1>
      </div> */}
      <h1 style={{textAlign:"center"}}  data-aos="fade-down" >Elevating Possibilities</h1>
      <h6 style={{textAlign:"left",fontSize:"1.2rem", color:"rgb(255,102,0)" ,textAlign:"center"}}  data-aos="fade-down">Discover Our Range of Tailored Solutions and Services for Smart Automations.</h6>
      <div className='home_card'>
        <div className="row">
          <div className="col-6 col-md-4 col-lg-3 moto1" style={{ cursor: "pointer" }} data-aos="zoom-in">
            <div className="card1" >
              <div className="card-body ajay">
                <img src={logo} alt="Logo" className="logov" />
                <h5 className="card-title">Autonomous Machines</h5>
                <NavLink to="/autonomous" className="navbuttonexp">
                  <button >Explore more</button>
                </NavLink>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 moto1" data-aos="zoom-in">
            <div className="card1">
              <div className="card-body ajay">
                <img src={logo1} alt="Logo" className="logov" />
                <h5 className="card-title">System Integrations</h5>
                <NavLink to="/integrations" className="navbuttonexp">
                  <button>Explore more</button>
                </NavLink>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 moto1" data-aos="zoom-in">
            <div className="card1">
              <div className="card-body ajay">
                <img src={logo2} alt="Logo" className="logov" />
                <h5 className="card-title">Internet of Things (IoT)</h5>
                <NavLink to="/iot" className="navbuttonexp">
                  <button>Explore more</button>
                </NavLink>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 moto1" data-aos="zoom-in">
            <div className="card1">
              <div className="card-body ajay">
                <img src={logo3} alt="Logo" className="logov" />
                <h5 className="card-title">Cloud Computing</h5>
                <NavLink to="/cloudcomputing" className="navbuttonexp">
                  <button>Explore more</button>
                </NavLink>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 moto1" data-aos="zoom-in">
            <div className="card1">
              <div className="card-body ajay">
                <img src={logo4} alt="Logo" className="logov" />
                <h5 className="card-title">Big Data Analytics</h5>
                <NavLink to="/bigdata" className="navbuttonexp">
                  <button>Explore more</button>
                </NavLink>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 moto1" data-aos="zoom-in">
            <div className="card1">
              <div className="card-body ajay">
                <img src={logo5} alt="Logo" className="logov" />
                <h5 className="card-title">AR/VR Solutions</h5>
                <NavLink to="/arvr" className="navbuttonexp">
                  <button>Explore more</button>
                </NavLink>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide4;
