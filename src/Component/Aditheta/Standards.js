import React from 'react'
import logo1 from '../../AdiImg/Picture4.jpg'
import "./Standards.css"
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import{BsFillArrowUpCircleFill} from "react-icons/bs";


const Standards = () => {
  return (
    <div className='stantab'>
        <div className='smartviewheader'>
            <h2 className='tabstan'><span style={{color: " RebeccaPurple", fontWeight:"bold"}}>STANDARDS</span></h2>
     <p>ADISRA-THETAVEGA products are built around internationally accepted standards such as HTML5, .NET, OPC, SQL, MQTT, XML, and SNMP. This allows for easy integration with third party packages, access to necessary external data, and the ability to store data in a standard SQL database. Your data is not locked into ADISRA-THETAVEGA SmartView so it can be accessed from other third-party packages. Our drivers are based on the industrial automation standard protocols.</p>
        </div>
        
        <div className='container smartview'>
        <h2>ADISRA-THETAVEGA SMARTVIEW</h2>
            <div className='row'>
                <div className='col-6'>
                <img src={logo1} alt="loading... " style={{height:"250px" , width:'80%'}}  />
                </div>

                <div className='col-6'>
                <img src={logo1} alt="loading... " style={{height:"250px" , width:'80%'}}  />
                </div>
            </div>
        </div>
        
            <div className='container paragraph'   >
<div className='row'>
  <div className='col-10'>
  
  <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/> Simple, comprehensive, uniﬁed HMI, SCADA and IIoT development software that changes as the user moves through the development environment.</p>
  <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>Seamless connectivity with devices, using the most popular industrial protocols and standards- based protocols such as MQTT, OPC UA, OPC DA, and databases.</p>
<p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>Access HMI/SCADA applications on any HTML5 compliant web browser delivering information anywhere, any time, on a desktop, tablet, or smartphone – regardless of the form factor.</p>
 <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>Support for FDA CFR Part 11</p>
 <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>From mobile devices to highly-redundant servers, ADISRA-THETAVEGA SmartView scales and grows with the customer.</p>
    </div>  
    </div>  
        </div>
<hr/>
        <div className='container smartview'>
        <h2>ADISRA-THETAVEGA InsightView™</h2>
            <div className='row'>
                <div className='col-6'>
                <img src={logo1} alt="loading... " style={{height:"250px" , width:'80%'}}  />
                </div>

                <div className='col-6'>
                <img src={logo1} alt="loading... " style={{height:"250px" , width:'80%'}}  />
                </div>
            </div>
        </div>

            <div className='container paragraph'  >
<div className='row'>
  <div className='col-10'>
  
  <p><BsFillArrowUpCircleFill style={{color:"orangered"}}/> Software-as-a-Service (SaaS) that provides a secure and managed environment</p>
  <p><BsFillArrowUpCircleFill style={{color:"orangered"}}/>Advanced analytics allows for comparison of real-time data against historical data, plant against plant, line against line, machine against machine, or user deﬁned analysis. Big data drill-down capabilities</p>
<p><BsFillArrowUpCircleFill style={{color:"orangered"}}/>Role-based dashboards that allows user to customize individual views.</p>
 <p><BsFillArrowUpCircleFill style={{color:"orangered"}}/>Preconﬁgured templates that meet most users' needs and allows for easier deployment</p>
 <p><BsFillArrowUpCircleFill style={{color:"orangered"}}/>Powerful data mining capabilities that track throughput, OEE, utilization, yield, availability, uptime, cycle time, six major losses and more.</p>
    </div>  
    </div>  
        </div>
<hr/>
        <div className='container smartview'>
        <h2>ADISRA-THETAVEGA KnowledgeView™</h2>
            <div className='row'>
                <div className='col-6'>
                <img src={logo1} alt="loading... " style={{height:"250px" , width:'80%'}}  />
                </div>

                <div className='col-6'>
                <img src={logo1} alt="loading... " style={{height:"250px" , width:'80%'}}  />
                </div>
            </div>
        </div>
        
            <div className='container paragraph'  >
<div className='row'>
  <div className='col-10'>
  
  <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/> Software-as-a-Service (SaaS) for big data driven maintenance strategy.</p>
  <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>Reduce operational costs by shifting reactive maintenance to predictive maintenance using machine learning and advanced analytics</p>
<p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>Easy-to-customize dashboards for increased insights into machine health, ability to eliminated downtime, and improved productivity.</p>
 <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>Advanced  machine  learning  algorithms  such  as  root-cause  analysis,  anomaly  detection, naive Bayes, random forest, gradient boosting, support vector and more</p>
 <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>Real-time monitoring of various operational parameters with an early warning system.</p>
    </div>  
    </div>  
        </div>




    </div>
  )
}

export default Standards