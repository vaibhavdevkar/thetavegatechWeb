import React from 'react'
import logo from './imgs/Scada.svg'
import './Home0.css'

const Home2 = () => {
  return (
    <div>
            <section id="hero" class="d-flex align-items-center">
    
          <div class="col-lg-12 order-1 order-lg-2 hero-img2">
            <img src={logo} class="img-fluid animated" alt=" " />
            <div className='image-text-2 col-lg-5'>
            <h1 className="headingImg" style={{color:"#800080"}}>ADISRA - <span className="headingImg" style={{color:"rgb(255,102,0)"}}>ThetaVega</span></h1>
            <p>"Elevating Industries Through Intelligent SCADA Solutions"</p>
            <p className='fs-4 mt-2'>Enabling Better Visualization of Your Machine Data and a Smarter Bottom Line for your Business.</p>
            </div>
            </div>
            </section>
      </div>
  )
}

export default Home2