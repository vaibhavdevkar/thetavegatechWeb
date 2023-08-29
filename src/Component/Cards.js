import React from 'react'
import './Cards.css'
import logo from './imgs/logo.jpg'

 const Cards = () => {
  return (
    <div className="cardv">
      <img src={logo} alt="Logo" className="logov" />
      <h2 className="titlev">Autonomous Machines</h2>
      <p className="contentv">AI Based Fully Automated Special purpose machines required for smart manufacturing</p>
    </div>
  )
}


export default Cards

