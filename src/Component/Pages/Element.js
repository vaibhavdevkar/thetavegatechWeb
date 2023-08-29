import React, { useState } from 'react';
import logo from "../imgs/QR_CODE.svg"
import logo1 from "../imgs/EYE.svg"
import logo2 from "../imgs/M2M.svg"
import logo3 from "../imgs/STATISTICAL.svg"
import logo4 from  "../imgs/DATA_INTEGRATION.svg"
import logo5 from "../imgs/REMOTE_MONITORING.svg"
import './Element.css'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';





const Element = () => {
  useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
	  }, []);

  const [selectedCard, setSelectedCard] = useState(null);

  const handleExploreClick = (url) => {
    window.location.href = url;
  }

  const handleNextClick = () => {
    // navigate to the next page
    console.log("/Autonomous");
  }

  return (
    <>
          <h1 className='track1' style={{textAlign:"left", textAlign:"center" ,marginLeft:"58px"}} data-aos="fade-down">
               Revolutionizing Your Workflow
            </h1>
            <p style={{textAlign:"left",fontSize:"1.2rem", color:"rgb(255,102,0)" ,textAlign:"center"}} data-aos="fade-down"> Discover Our Key Traceability Solution Offerings</p>
          {/* <h3 className='bg20' > <p style={{textAlign:"center"}}>Major Elements</p>  </h3>  */}
       <br/>
      <div className='element'>
      <table >
        <ul class='power-supply-box-row'>
          <section class='home_card'>
            <div className="row justify-content-center">
              <div class="col-sm-2 slide1" data-aos="zoom-in" >
                <div class="card1"> 
                  <div class="card-body ajay">
                    <img src={logo} alt="Logo" className="logov" />
                    <h6 class="card-title">Automated Identification</h6>
                    <NavLink to="/datacapture" className="navbutton">   Explore more</NavLink>
                    <p class="card-text"></p>
                  </div>
                </div>
              </div>
        
              <div class="col-sm-2 slide1 " data-aos="zoom-in">
                <div class="card1">
                  <div class="card-body ajay ">
                    <img src={logo1} alt="Logo" className="logov" />
                    <h6 class="card-title">Machine Vision</h6>
                    
                    <NavLink to="/machinevision" className="navbutton">   Explore more</NavLink>
                    <p class="card-text"></p>
                  </div>
                  
                </div>
              </div>
              <div class="col-sm-2 slide1" data-aos="zoom-in">
                <div class="card1">
                  <div class="card-body ajay">
                    <img src={logo2} alt="Logo" className="logov" />
                    <h6 class="card-title"> Machine to Machine Communication</h6>
                    <NavLink to="/m2m" className="navbutton">   Explore more</NavLink>
                    <p class="card-text"></p>
                  </div>
                </div>
              </div>
              <div class="col-sm-2 slide1" data-aos="zoom-in">
                <div class="card1">
                  <div class="card-body ajay">
                    <img src={logo5} alt="Logo" className="logov" />
                    <h6 class="card-title">Remote Monitoring</h6>
                    <NavLink to="/remotemonitoring" className="navbutton">   Explore more</NavLink>
                    <p class="card-text"></p>
                  </div>
                </div>
              </div>
              <div class="col-sm-2 slide1" data-aos="zoom-in">
                <div class="card1">
                  <div class="card-body ajay">
                    <img src={logo3} alt="Logo" className="logov" />
                    <h6 class="card-title">Statistical Process Control </h6>
                    <NavLink to="/statistical" className="navbutton">  Explore more</NavLink>
                    <p class="card-text"></p>
                  </div>
                </div>
              </div>
              <div class="col-sm-2 slide1" data-aos="zoom-in">
                <div class="card1">
                  <div class="card-body ajay">
                    <img src={logo4} alt="Logo" className="logov" />
                    <h6 class="card-title">Data Integration</h6>
                    <NavLink to="/dataintegration" className="navbutton">   Explore more</NavLink>
                    <p class="card-text"></p>
                  </div>
                </div>
              </div>
              
              
</div>
</section>
</ul>
</table>

</div>

    </>
  )
}

export default Element;

