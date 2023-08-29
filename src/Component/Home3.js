import React from 'react'
import logo from './imgs/smart-building-1.jpg'
import './Home0.css'

const Home3 = () => {
  return (
    <div>
            <section id="hero" class="d-flex align-items-center">
    
          <div class="col-lg-12 order-1 order-lg-2 hero-img2">
            <img src={logo} class="img-fluid animated" alt=" " />
           
            <div className='headingtxt col-lg-6'>
             <h1 className=" text-center" style={{color:"black", fontWeight:"bolder"}}>Building</h1>
             <h1 className=" text-center" style={{color:"black"}}>Management System</h1>
             <p className='headingtext1 text-center'>"Building Intelligence, Elevating Comfort:Discover the Power of Smart Building Management and Energy Management System"</p>

              </div>
              </div>
          

              
            </section>
      </div>
  )
}

export default Home3