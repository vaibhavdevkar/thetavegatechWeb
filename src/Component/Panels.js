import React from 'react'
import home1 from './imgs/thetavegalogo.jpg'
import home2 from './imgs/thetavegalogo.jpg'
import home3 from './imgs/thetavegalogo.jpg'
import home4 from './imgs/thetavegalogo.jpg'
import home5 from './imgs/thetavegalogo.jpg'
import { BsFillArrowRightCircleFill } from "react-icons/bs";



const Panels = () => {
    return (
        <div>
            <div className='row' style={{ margin: "100px" }}>
                <h1 style={{ textAlign: "center", paddingBottom: "30px",  color: " RebeccaPurple", fontWeight: "bold" }}>PANELS BUILDING</h1>    <hr></hr>
                <div className='col-md-6 order-md-1 '>
                    <span style={{ color: "black" }}>
                        <p className='text-justify animate__animated animate__bounceInLeft' style={{ fontSize: "15px" }}>
                            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                            <br /> <p> Company Introduction *CONTENT HERE*</p>
                            <br />
                        </p>
                    </span>

                    <br />
                    <br />


                </div>
                <div className='col-md-6 order-md-2' >
                    {/* column 2 content */} <img src={home1} alt="not found" style={{ height: '80%', width: '100%', borderRadius: "50px", marginTop: "40px" , border:"2px solid black" }} fluid />
                </div>
            </div >

            {/* Second Section */}
            <div className='row' style={{ margin: "100px" }}>
                <h3 style={{ marginBottom: "40px" }}><span style={{ borderBottom: "2px solid orange" }}>OUR PRODUCTS</span></h3>

                <div className='col-md-6'>
                    <p style={{ fontSize: "19px", fontWeight: "bold", borderBottom: "2px solid orange" }}>*PRODUCT NAME HERE*</p>

                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>*CONTENT HERE*</p>

                </div>
                <div className='col-md-6'>
                    <p style={{ fontSize: "19px", fontWeight: "bold", borderBottom: "2px solid orange" }}>*PRODUCT NAME HERE*</p>

                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                </div>
            </div>
            {/* Third Section */}
            <div className='row' style={{ margin: "100px" }}>

                <div className='col-md-6'>
                    <p style={{ fontSize: "19px", fontWeight: "bold", borderBottom: "2px solid orange" }}>*PRODUCT NAME HERE*</p>

                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*.</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>

                </div>
                <div className='col-md-6'>
                    <p style={{ fontSize: "19px", fontWeight: "bold", borderBottom: "2px solid orange" }}>*PRODUCT NAME HERE*</p>

                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE* </p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                </div>
            </div>
            {/* Fourth Section */}
            <div className='row' style={{ margin: "100px" }}>
                <div className='col-md-6 order-md-1'>
                    <p style={{ fontSize: "19px", fontWeight: "bold", borderBottom: "2px solid orange" }}>*PRODUCT NAME HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <br />
                    <br />
                </div>
                <div className='col-md-6 order-md-2'>
                    {/* column 2 content */} <img src={home2} alt="not found" style={{ height: '80%', width: '100%', borderRadius: "50px", marginTop: "40px", border:"2px solid black" }} fluid />
                </div>
            </div>
            {/* Fifth Section */}
            <div className='row' style={{ margin: "100px" }}>
                <div className='col-md-6 order-md-1'>
                    <p style={{ fontSize: "19px", fontWeight: "bold", borderBottom: "2px solid orange" }}>*PRODUCT NAME HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} />*CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <br />
                    <br />
                </div>
                <div className='col-md-6 order-md-2'>
                    {/* column 2 content */} <img src={home3} alt="not found" style={{ height: '80%', width: '100%', borderRadius: "50px", marginTop: "40px", border:"2px solid black" }} fluid />
                </div>
            </div>
            {/* Sixth Section */}
            <div className='row' style={{ margin: "100px" }}>
                <div className='col-md-6 order-md-1'>
                    <p style={{ fontSize: "19px", fontWeight: "bold", borderBottom: "2px solid orange" }}>*PRODUCT NAME HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} />*CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} />*CONTENT HERE*</p>
                    <br />
                    <br />
                </div>
                <div className='col-md-6 order-md-2'>
                    {/* column 2 content */} <img src={home4} alt="not found" style={{ height: '80%', width: '100%', borderRadius: "50px", marginTop: "40px", border:"2px solid black" }} fluid />
                </div>
            </div>
            {/* Seven Section */}
            <div className='row' style={{ margin: "100px" }}>
                <div className='col-md-6 order-md-1'>
                    <p style={{ fontSize: "19px", fontWeight: "bold", borderBottom: "2px solid orange" }}>*PRODUCT NAME HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} />*CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} />*CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <br />
                    <br />
                </div>
                <div className='col-md-6 order-md-2'>
                    {/* column 2 content */} <img src={home5} alt="not found" style={{ height: '80%', width: '100%', borderRadius: "50px", marginTop: "40px" ,border:"2px solid black"}} fluid />
                </div>
            </div>
            {/* eight Section */}
            <div className='row' style={{ margin: "100px" }}>
                <div >
                    <p style={{ fontSize: "19px", fontWeight: "bold"}}><span style={{ borderBottom: "2px solid orange" }}>*PRODUCT NAME </span>HERE*</p>

                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE* </p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} />*CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>
                    <p><BsFillArrowRightCircleFill style={{color:"orangered"}} /> *CONTENT HERE*</p>

                </div>

            </div>
        </div>
    )
}

export default Panels