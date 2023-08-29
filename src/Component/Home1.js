import React from 'react'
import './Home0.css'
import logo from './imgs/Mission_Automation.avif'

const Home1 = () => {
  return (

    <section id="hero" class="d-flex align-items-center justify-content-center ">
    
          <div class="col-lg-12 order-1 order-lg-2 hero-img">
            <img src={logo} class="img-fluid animated" alt=" " />
           
            <div className='image-text col-lg-5'>
            <h1 className="headingImg" style={{color:"rgb(255,102,0)"}}>Mission Automation</h1>
            <h5 className="mb-5" style={{color:"lightBlue"}}> Pioneering the Future of Effortless Efficiency</h5>
            <p>"Transforming Industries: From Automation to Optimization” Your Journey through the</p>
            <p className='fs-4' style={{color:"#01A0FF"}}> Automate | Connect | Monitor |  Control |  Analyse | Predict |  Optimise </p>
            </div>
            </div>
          

</section>
  )
}

export default Home1


