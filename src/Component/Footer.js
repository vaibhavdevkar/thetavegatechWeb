import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faYoutube, faBlogger } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {

  return (
    <footer id="footer" className="footer-1" style={{ marginTop: "4px" }}>
      <div className="main-footer widgets-dark typo-light" >
        <div className="container-fluid">
          <div className="row">
            
            {/* ----------------------------------SECTION----------------------------------------------------- */}
            <div className="col-xs-12 col-sm-6 col-md-3" >
              <div className="widget subscribe no-box">
                <h5 className="widget-title">
                  About<span></span>
                </h5>
                <p className=" thumbnail-widget " style={{ fontSize: "13px" }}>
                ThetaVega: Your partner for revolutionizing manufacturing and building management. Our cutting-edge Automation, Digitization, and Traceability solutions redefine industries, empowering businesses with unparalleled efficiency, precision, and transparency. Seamlessly integrated into your processes, our tailored solutions elevate productivity while ensuring traceability at every step. Join us and embrace a new era of manufacturing excellence and building management.
                </p>
              </div>
            </div>
            {/* ---------------------------------------SECTION---------------------------------------------------- */}
            <div className="col-xs-12 col-sm-6 col-md-2">
              <div className="widget no-box">
                <h5 className="widget-title">
                Industries<span></span>
                </h5>
                <ul className="thumbnail-widget" style={{ fontSize: "13px", lineHeight: '1' }}>
                 
           
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/requirement">Agriculture</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/requirement">Energy & Gas</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/downi">Steel & Mining</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/licensing">Defence</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/launch">Textile</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/createnew">Food & Braveries</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <NavLink to="/addfiles">Pharmaceuticals</NavLink>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/prosetting">Buildings & Smart City</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/csharp">Automotive & Ancillaries </NavLink>

                    </div>
                  </li>
               
                </ul>
              </div>
            </div>
            {/* ------------------------------------SECTION------------------------------------------------------ */}
            <div className="col-xs-12 col-sm-6 col-md-2">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">
                Solutions and Services<span></span>
                </h5>

                <ul className="thumbnail-widget" style={{ fontSize: "13px", lineHeight: '1' }}>

                  <li>
                    <div className="thumb-content">

                      <NavLink to="/trace">Autonomous Machines</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/arvr">System Integrations</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/bigdata">IOT</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <NavLink to="/cloudcomputing">Cloud Computing</NavLink>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <NavLink to="/iot">Big Data Analytics</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/integrations">AR & VR Solutions</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/autonomous" >AIDC Systems</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/autonomous" >Machine Vision</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/autonomous" >M2M communication</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/autonomous" >Remote Monitoring</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/autonomous" >SPC Analytics</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/autonomous" >Data Integration </NavLink>

                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* ------------------------------------SECTION------------------------------------------------------ */}
            <div className="col-xs-12 col-sm-6 col-md-2">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">
                Products<span></span>
                </h5>

                <ul className="thumbnail-widget" style={{ fontSize: "13px", lineHeight: '1' }}>

                  <li>
                    <div className="thumb-content">
                      <NavLink to="/cloudcomputing">Panel Ex- Electrical Panels</NavLink>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/bigdata">NexaBridge IoT</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/arvr">Stepwise Connect</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/trace">OperateX – MES</NavLink>

                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* ---------------------------------SECTION---------------------------------------------------------- */}
            <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="widget no-box mb-1">
                <h5 className="widget-title">
                Careers<span></span>
                </h5>
                <ul className="thumbnail-widget" style={{ fontSize: "13px", lineHeight: '1' }}>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/career">Join Our Team: </NavLink>
                      
                      <p className='mt-2'>Shape the Future with Theta-Vega Tech</p>

                    </div>
                  </li>
                  </ul>
                </div>
              <div className="widget no-box mb-2" >
                <h5 className="widget-title">
                  Contact Us<span></span>
                </h5>
                <p className=" thumbnail-widget " style={{ fontSize: "13px" }}>
                  Block No. 02, Sadafuli, Rana Nagar, Aurangabad, Maharashtra 431001
                </p>
                <p className=" thumbnail-widget " style={{ fontSize: "13px" }}>
                  Email: <br></br>
                  info@thetavega.tech <br></br>
                </p>

                <div className="social-icons" style={{marginLeft:"10%"}}>
                  {/* Using Font Awesome */}
                  <p style={{ fontSize: "13px" }}>Follow Us On: <br></br></p>
                  <a href="https://www.facebook.com/thetavega/" target="_blank"  rel="noopener noreferrer">
                    <FontAwesomeIcon className='icon' icon={faFacebook}  style={{ fontSize: '24px', color:"white", marginRight: '20px'}}/>
                  </a>
                  <a href="https://www.twitter.com/your-twitter-url" target="_blank"  rel="noopener noreferrer">
                    <FontAwesomeIcon className='icon' icon={faTwitter} style={{ fontSize: '24px', color:"white", marginRight: '20px' }}/>
                  </a>
                  <a href="https://in.linkedin.com/company/thetavegatech" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className='icon' icon={faLinkedin} style={{ fontSize: '24px', color:"white", marginRight: '20px',  }}/>
                  </a>
                  <a href="https://in.linkedin.com/company/thetavegatech" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className='icon' icon={faYoutube} style={{ fontSize: '24px', color:"white", marginRight: '20px' }}/>
                  </a>
                  <a href="https://in.linkedin.com/company/thetavegatech" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className='icon' icon={faBlogger} style={{ fontSize: '24px', color:"white", marginRight: '20px' }}/>
                  </a>

                </div>
                {/* <p className=" thumbnail-widget " style={{ fontSize: "13px" }}>

                  Follow Us On: <br></br>
                  Facebook
                  Instagram
                  Twitter
                  Linkedln
                </p> */}

                {/* <p style={{ fontSize: "13px" }}>Block No. 02, Sadafuli, Rana Nagar, Aurangabad, Maharashtra 431001</p>
                <p style={{ fontSize: "13px" }}>Email at us: <br></br>
                  info@thetavega.tech <br></br></p>
                <p style={{ fontSize: "13px" }}>
                  Follow Us On: <br></br>
                  Facebook
                  Instagram
                  Twitter
                  Linkedln
                </p> */}
                {/* <p className=" thumbnail-widget " style={{fontSize:"13px"}}>
                Follow Us On<br></br>
                  Facebook<br></br>
                  Instagram<br></br>
                  Twitter<br></br>
              </p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid m-0 pt-2">
              <div className="d-flex">
                <div className='me-3'>
                <NavLink to="/privacypolicy" style={{fontSize:"12px", color:"gray"}}> Privacy Policy</NavLink>
                </div>
                <div className='me-3'>
                <NavLink to="/termsofuse" style={{fontSize:"12px", color:"gray"}}> Terms Of Use</NavLink>
                </div>
             
                <div className='me-3'>
                <NavLink to="/disclaimer" style={{fontSize:"12px", color:"gray"}}> Disclaimer</NavLink>
                </div>

                <div className='me-3'>
                <NavLink to="/copyrightnotice" style={{fontSize:"12px", color:"gray"}}> Copyright Notice</NavLink>
                </div>
              </div>
        </div>

        <div className="container-fluid" >
          <div className="row" >
            <div className="col-md-12 copyright text-center">
              <p  className="copyright-text">
                &copy; COPYRIGHT 2023 - Thetavega Tech Pvt Ltd
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
