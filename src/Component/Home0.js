import React from 'react'
import './Home0.css'
import logo from './imgs/WELCOME _SLIDER.jpg'


const Home = () => {
  return (
  
    <section id="hero" class="d-flex align-items-center justify-content-center ">
    
    <div class="col-lg-12 order-1 order-lg-2 hero-img">
      <img src={logo} class="img-fluid animated" style={{opacity:"0.9"}} alt=" " />
     
      <div className='image-text col-lg-5'>
      <h1 className=''>Welcome to </h1>
              <span className='thetavegaText'>ThetaVega Tech</span>
              <h5 className='fst-italic mt-3' style={{color:"purple"}}>"Empowering Tomorrow with Seamless Automation, Digital Transformation, and UnparalleledTraceability Solutions"</h5>
      </div>
      </div>
    

</section>
  
  )
}

export default Home


