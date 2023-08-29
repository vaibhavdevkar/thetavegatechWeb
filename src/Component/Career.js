import React from 'react'
import logo1 from './imgs/Career_banner.jpg'

const Career = () => {
  return (
    <div>
       <header className="bg32" style={{ overflow: "hidden" }}>
            <div className='container-fluid m-0  p-0'>
                <img src={logo1} alt="Logo" style={{ height: "25rem", opacity: "1", width: '100%', marginTop: "6rem" }} />
                <div className='AB-text0' >
                    <h1><span style={{ color: "rgb(255,102,6)", textAlign: "left", marginLeft: "0px", fontSize: "4rem" }}><b> Careers</b></span></h1>
                    <h6>Join Our Team: Shape the Future with Theta-Vega Tech</h6>
                </div>
                <div className='row'>
                    <div className='col-md-11 mt-2 text-justify'>
                        <p> At Theta-Vega Tech, we believe that innovation is powered by people. We're always on the lookout for exceptional talent to join our team and be a part of shaping the future of technology-driven business transformation. As a premier technological solutions provider, we offer a dynamic and collaborative work environment that fosters creativity, growth, and impact.
                        </p>
                    <h3>Mail your resume on :<a href="#"> info@thetavega.tech</a></h3>
                    </div>
                    </div>
                    </div>
                    </header>
    </div>
  )
}

export default Career