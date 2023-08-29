import React from 'react'
import './Worldwide.css'
import logo1 from "../../AdiImg/Picture5.png"
import logo2 from "../../AdiImg/Picture6.png"
// import logo3 from "../../AdiImg/customer.png"
// import logo4 from "../../AdiImg/1.png"


const Worldwide = () => {
  return (
    <div className='tabworld'>
        <div className='container worldwild' >
            <div className='row'>
                <div className='col-4'>
                <img src={logo1} alt="loading... " style={{height:"300px" , width:'70%'}}  />

                </div>

                <div className='col-8 worldwild1'>
                <img src={logo2} alt="loading... " style={{height:"60px" , width:'35%'}} />
                
                <h5>PRODUCT AWARD</h5>
                <h6>ADISRA SmartView won Tech Brief's 2020 product of the year award. Tech Brief is the #1 magazine for OEM, Engineers, and Managers in industrial automation. The award is determined each year by votes from the Tech Brief Magazine readership. 
                    <br/> <br/><span  style={{color: "orange"}}> “we are grateful to the readers for the recognition and support." </span></h6>

                </div>
            </div>
        </div>
        <hr/>
{/* SECOND_PART */}

<div className='section worldwild2'>

    <h3>WORLDWIDE ACCLAIM</h3>
    <p><span  style={{color: "orange"}}> ADISRA "Low-Code" </span>  and  <span  style={{color: "orange"}}>ADISRA “SmartView” </span> Platform has been used to develop  <span  style={{color: "orange"}}> SCADA/HMI applications </span>  in a variety of industries worldwide. We have applications in automotive, 
    oil & gas, machinery, food and beverage, pharmaceutical, building automation, packaging, and more. Our innovative technology and ﬂexible scalable solution is attractive to all size customers. It offers all the functionality of the most popular<span  style={{color: "orange"}}> HMI/SCADA </span> packages at a reasonable competitive price that addresses the economic requirements of small to mid-market customers.</p>
    <p>ADISRA is an international company with ofﬁces in North America, South America, and worldwide distributors in North America, Latin America, South America, Europe, and Asia-Paciﬁc. We also offer an extensive system integrators program that has attracted system integrators throughout the world.</p>

</div>
<hr/>
<div className='container worldwild3'>
    <h3>SUPPORT</h3>
<p>Great customer experience begins and ends with excellent customer service. Serving our customers well is our most important goal. While every software company offers customer service, we strive to make ours a consistently positive experience. We understand that not all customers want to be served in the same way, so we offer a variety of options for receiving excellent customer support.</p>

                {/* <div class="card1 ">
                  <div class="card-body worldwild4 ">
                    <img src={logo3} alt="Logo" className="logov" />    
                  </div> 
                </div>  */}
              

</div>
    </div>
  )
}

export default Worldwide