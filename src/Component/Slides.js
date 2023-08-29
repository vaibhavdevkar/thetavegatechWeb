import React from "react";
import Home0 from "./Home0";
import Home1 from "./Home1";
import Home2 from "./Home2";
import Cards from "./Cards";
import './Slide.css'
import Jadu from "./Jadu"
import Slide4 from "./Slide4";
import Niche from "./Pages/Niche";
import Element from "./Pages/Element";
import { NavLink } from 'react-router-dom';
import chat from "./img3/chat.png"

import Home3 from './Home3'
import Home4 from './Home4'



const Slides = () => {
  return (
    <div>
    <div className=" container-fluid col-12 mx-auto h-100" style={{marginTop:"40px",marginBottom:"0px"}}>
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
      
    >
      <div class="carousel-inner">
        <div class="carousel-item active " data-interval="3000">
          <Home0 />
        </div>
        <div class="carousel-item " data-interval="3000">
          <Home1 />
        </div>
        <div class="carousel-item " data-interval="3000">
          <Home2 />
        </div>
        <div class="carousel-item " data-interval="3000">
          <Home3 />
        </div>
        <div class="carousel-item " data-interval="3000">
          <Home4 />
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>

      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a> 
    </div >
    </div>
    <hr />

    <div className="col">
      <div className="row">
        <div className="col">
          <Slide4/>
        </div>

        <div className="img">
        
          <Niche/>
        </div>
       <div>
        <Element/>
       </div>

       {/* Chat Contact */}
     {/* <div className="contact9">
     <NavLink to="/contact" className="navbutton1"><img src={chat} alt="Logo" className="logov"style={{height:"5%", width:"5%", position:"inherit"}} />
  </NavLink>
     </div> */}


      </div>
    </div>
</div>    
  )
};

export default Slides;
