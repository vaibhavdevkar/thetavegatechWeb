import React from 'react';
import "./Aboutadi.css";
import logo from "../../AdiImg/adisra_laptop.jpg";
import logo1 from "../../AdiImg/unity.png";

const Aboutadi = () => {
  return (
    <div className='maindiv'>

      <div className='section about'>
        <h2> <span style={{ color: "RebeccaPurple", fontWeight: "bold", marginLeft: "2rem" }}> ABOUT</span></h2>

        <p> <span style={{ color: "orange" }}>ADISRA® was formed in 2017 </span> to provide leading edge technology at an affordable price to industrial automation customers. We are dedicated to providing the best customer service and working with our customers to exceed their expectations.
        </p>

        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h4><span style={{ color: "RebeccaPurple" , marginLeft: "4rem"}}>ADISRA Software Suite </span></h4>
              <p style={{marginLeft: "4rem"}}>ADISRA offers a building block software suite beginning with <span style={{ fontWeight: "bold" }}> ADISRA SmartView </span>, an HMI/SCADA package for developing applications for monitoring and managing machines and plants.<span style={{ fontWeight: "bold" }}> ADISRA InsightView </span> provides a cloud-based OEE and analytics platform for reducing equipment downtime and improving management of the equipment life cycle to increase productivity in plant-wide processes. <span style={{ fontWeight: "bold" }}> ADISRA KnowledgeView </span> provides a cloud-based system for anticipating maintenance requirements, facilitating fault diagnosis and remaining service life, and increasing machinery mean time between failures (MTBF).</p>
            </div>
            <div className='col-md-6'>
              <img src={logo} alt="Logo" style={{ height: "80%", width: "90%" }} />
            </div>
          </div>

          <p>Our founders are seasoned entrepreneurs and have over 100 years' combined industrial automation software experience. Two ADISRA founders are former InduSoft* founders, that developed and sold InduSoft Web Studio*, an HMI/SCADA software product for 20 years before InduSoft* was acquired by Invensys in 2013. ADISRA's other two founders are former Phi System founders, that provided industrial automation consulting services. Our founders' have deep industrial automation industry software products and services experience with a proven track record of delivering best in market software products and customer support to a growing global customer base.</p>

        </div>
      </div>
    </div>
  )
}

export default Aboutadi;
