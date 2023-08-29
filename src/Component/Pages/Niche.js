import React from 'react';
import './Niche.css';
import { NavLink } from 'react-router-dom';
import logo6 from '../imgs/img_copy.svg';

const Niche = () => {
  return (
    <div>
      <h2 className='header1'>
        <hr className='hrtag' />
        <h1 style={{ textAlign: "center",fontStyle:"bold", marginTop: "50px" }} data-aos="fade-down">Empowering Through Expertise</h1>
      </h2>
      <p style={{ textAlign: "center", fontSize:"1.2rem" , color:"rgb(255,102,0)" }} data-aos="fade-down">Explore Our Core Solutions Driving Success and Innovation</p>
    


      <section className='our' data-aos="zoom-in">
        <div className='row'>
          
          <div className='col-md-8 col-sm-9 track'>
            <h3 className='track1' style={{ textAlign: "left" ,fontFamily:"Courier New"}}>
              <span style={{ color: 'red'}}>&gt;</span> track n{' '}
              <span style={{ color: 'red' }}>trace</span>
            </h3>
            <p style={{textAlign:"justify"}}>
              Seamless Visibility and Control: Navigating Manufacturing Excellence with Traceability Systems
              <br />
              <br/>
              Traceability systems modernize manufacturing by integrating advanced technologies for quality, efficiency, and data-driven decisions in the entire production process.Modern manufacturing relies on traceability systems, combining AIDC, Machine Vision, M2M communication, remote monitoring, SPC analytics, and cloud integration. This fusion ensures top-notch quality, faster issue resolution, and data-driven insights, fostering efficient, innovative, and successful manufacturing
              <br />
              <br />
                            
              The result? A manufacturing ecosystem primed for efficiency, innovation, and sustainable success. 
              <br />
              <br />
              
              <NavLink to='/trace' className='navbutton'>Explore</NavLink> Comprehensive Traceability Solutions: Unlock the Power of End-to-End Implementation.
     
              
             
       
            </p>
          </div>
          <div className='col-md-2 col-sm-2 mt-5 animat ms-3 hide-on-mobile'>
            <img src={logo6} alt='loading...' style={{ height: '100%', width: '100%' }} />
          </div>
        </div>
      </section>
      <hr/>
    </div>
  );
};

export default Niche;
