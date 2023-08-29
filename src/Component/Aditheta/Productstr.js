import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,

} from 'mdb-react-ui-kit';
import './Productstr.css'
import 'animate.css';
import logo1 from "../../AdiImg/Picture1.jpg"
import logo2 from "../../AdiImg/Picture3.png"

const Productstr = () => {
  const [fillActive, setFillActive] = useState('tab1');

  const handleFillClick = (value, string) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };
  return (
    <div className='prdtab'>
      <h4 className='tab11'><span style={{ color: " RebeccaPurple", fontWeight: "bold" }}>PRODUCT STRATEGY</span> </h4>
      <p> <span style={{ color: "orange" }}> ADISRA® - THETAVEGA </span> offers leading edge products designed to help you meet your manufacturing goals and improve operational efﬁciency. We are constantly working with our customers and partners to understand what matters most to them and provide new and evolving product offerings.
        Our product portfolio consists of <span style={{ color: "orange" }}>  “Low-Code” platform,  </span> our ability to create, conﬁgure, delete, and change applications at run-time; SmartView, our Human Machine Interface (HMI) and Supervisory
        Control and Data Acquisition (SCADA) product;<span style={{ color: "orange" }}> InsightViewTM, </span> our advanced analytics and OEE
        product; and <span style={{ color: "orange" }}> KnowledgeViewTM, </span> our predictive analytics product.
      </p>
      <MDBTabs fill className='mb-3' id="janu2" >
        <MDBTabsItem  >
          <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
            Low-Code
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
            SmartView
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
            InsightView
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab4')} active={fillActive === 'tab4'}>
            KnowledgeView
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>


      <br />
      <MDBTabsContent>
        <MDBTabsPane show={fillActive === 'tab1'}>
          <div className='container'>
            <div className='row'>
              <div className='col-6 text'>
                <h4>ADISARA-THETAVEGA</h4>
                <h7>"Low-Code" Platform</h7>
                <p>Application Builder allows Building, <br />Modifying, and Conﬁguring at Run-Time.</p>
              </div>
              <div className='col-6'>
                <img src={logo1} alt="loading... " style={{ height: "250px", width: '80%' }} />
              </div>
            </div>
          </div>
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab2'}>
          <div className='row'>
            <div className='col-6'>
              <img src={logo1} alt="loading... " style={{ height: "250px", width: '80%' }} />
            </div>
            <div className='col-6 text'>
              <h4>ADISARA-THETAVEGA</h4>
              <h7> "SmartView"</h7>
              <p>(HMI/SCADA) Collect and Visualize Manufacturing Data</p>
            </div>
          </div>
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab3'}>
          <div className='row'>
            <div className='col-6 text'>
              <h4>ADISARA-THETAVEGA</h4>
              <h7>"InsightView"</h7>
              <p>Interprets Data for Measuring Productivity of Machines and Processes</p>
            </div>

            <div className='col-6'>
              <img src={logo1} alt="loading... " style={{ height: "250px", width: '80%' }} />
            </div>
          </div>
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab4'}>
          <div className='row'>
            <div className='col-6'>
              <img src={logo1} alt="loading... " style={{ height: "250px", width: '80%' }} />
            </div>
            <div className='col-6 text' >
              <h4>ADISARA-THETAVEGA</h4>
              <h7> "KnowledgeView"</h7>
              <p>Artiﬁcial Intelligence Based Machine Learning <br /> Analysis & Interprets Data for Predictive Maintenance and Reporting</p>
            </div>
          </div>
        </MDBTabsPane>

      </MDBTabsContent>

      <div className='view'> <p> <span style={{ color: "orange" }}>  Our products can be used individually or in conjunction with the othe    ADISRA- THETAVEGA  products. ADISRA-THETAVEGA has an open platform so it can work with other HMI/SCADA packages or other third-party packages.
        <br />ADISRA-THETAVEGA “Low-Code” Platform and ADISRA-THETAVEGA SmartView are
        sold as perpetual license and ADISRA-THETAVEGA InsightView and ADISRA-THETAVEGA Knowledge View as Software as a service. </span></p>
      </div>
    </div>
  )
}

export default Productstr;