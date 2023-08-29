import React from 'react'
import "../Jadu.css"
import logo from "./Icons/AM1.png"
import logo1 from "./Icons/SI1.png"
import logo2 from "./Icons/IOT1.png"
import logo3 from "./Icons/CC.png"
import logo4 from  "./Icons/BD.png"
import logo5 from "./Icons/AR.png"
// import "@fontsource/montserrat"

const Jadu = () => {
  return (
    <div class='grayWraper-values'>
      <div class ='pages-tital'>
        <div class = 'center-block2'>
         
      


<table >

<ul class=' power-supply-box-row'>
<section  class='home_card '>
<div class="row">
  <div class="col-sm-3 ">
    <div class="card1">
      <div class="card-body ">
      <img src={logo} alt="Logo" className="logov" />
        <h5 class="card-title">Autonomous Machines </h5>
        <p class="card-text">Al Based Fully Automated Special purpose machines required for smart manufacturing</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card1">
      <div class="card-body">
      <img src={logo1} alt="Logo" className="logov" />
        <h5 class="card-title">System Integrations</h5>
        <p class="card-text"> Interconnecting Companies both externally and internally. Which Results in an agile manufacturing environment allowing real time production corrections and quick pivots.
</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card1">
      <div class="card-body">
      <img src={logo2} alt="Logo" className="logov" />
        <h5 class="card-title">Industrial Internet of Things (IoT)</h5>
        <p class="card-text"> Connecting Real Time Data of Shop floor, which influences decisions nod time and leads to increased efficiency and productivity
</p>
        
      </div>
    </div>
  </div>
</div>
</section>
<br/>
<br/>
<section  class='home_card '>
<div class="row">
  <div class="col-sm-3 ">
    <div class="card1">
      <div class="card-body ">
      <img src={logo3} alt="Logo" className="logov" />
        <h5 class="card-title">Cloud Computing
</h5>
        
        <p class="card-text"> Providing scalable storage and increased computing power which improves data accessibility and integrity, helping to eliminate data silon</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card1">
      <div class="card-body">
      <img src={logo4} alt="Logo" className="logov" />
        <h5 class="card-title">Big Data Analytics </h5>
        <p class="card-text">Providing manufacturers tools, such as dashboards, to help them clown, organize, and visualize the massive amount of data available. Which will free up time to analyse data, communicate insights, and optimize inefficient processes.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card1">
      <div class="card-body">
      <img src={logo5} alt="Logo" className="logov" />
        <h5 class="card-title">AR/VR Solutions</h5>
        <p class="card-text"> Augmented reality (AR) displays digital content in the real word through a device, such as mobile phone or special eyeglasses.
</p>
        
      </div>
    </div>
  </div>
</div>
</section>
</ul>
</table>
    </div>
    </div>
    </div>

  )
}

export default Jadu;



