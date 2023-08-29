import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import logo2 from "./Icons/IOT2.png"
import logo1 from "./Icons/Smart D.png"
import logo4 from "./Icons/MES.png"
import logo5 from "./Icons/Smart v.png"
import logo6 from "./Icons/Insight V.png"
import logo7 from "./Icons/knowlege V.png"
import "./Product.css"
import { useEffect } from 'react';

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, [])

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      <div className='product0'>
        <div className='col' id="bg10">
          <h1 style={{ textAlign: "center", paddingTop: "40px" }} ></h1>
        </div>
      </div>

      <table>
        <Tabs>
          {/* ADD IN TABPANEL */}
          {/* End of tab panel */}
          <TabList>
            <div className='d-flex flex-row'>
              <Tab>
                <div className="col-sm moto1" style={{ cursor: "pointer" }}>
                  <div className="card1" >
                    <div className="card-body ajay">
                      <img src={logo1} alt="Logo" className="logov" />
                      <h5 className="card-title">Smart Display</h5>
                      <p className="card-text"></p>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab>
                <div className="col-sm moto1 ">
                  <div className="card1">
                    <div className="card-body ajay">
                      <img src={logo2} alt="Logo" className="logov" />
                      <h5 className="card-title">IOT Gateway</h5>
                      <p className="card-text"></p>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab>
                <div className=" moto1">
                  <div className="card1">
                    <div className="card-body ajay">
                      <img src={logo4} alt="Logo" className="logov" />
                      <h5 className="card-title">Manufacturing Execution System(MES)</h5>
                      <p className="card-text"></p>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab>
                <div className=" moto1">
                  <div className="card1">
                    <div className="card-body ajay">
                      <img src={logo5} alt="Logo" className="logov" />
                      <h5 className="card-title">ADISARA-Smart 4.0</h5>
                      <p className="card-text"></p>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab>
                <div className=" moto1">
                  <div className="card1">
                    <div className="card-body ajay">
                      <img src={logo6} alt="Logo" className="logov" />
                      <h5 className="card-title">ADISRA-Insight</h5>
                      <p className="card-text"></p>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab>
                <div className=" moto1">
                  <div className="card1">
                    <div className="card-body ajay">
                      <img src={logo7} alt="Logo" className="logov" />
                      <h5 className="card-title">ADISRA-Knowledge</h5>
                      <p className="card-text"></p>
                    </div>
                  </div>
                </div>
              </Tab>
            </div>
          </TabList>

          <TabPanel>
            <div className="card1">
              <div className="card-body ajay">
                <h5 className="card-title">Smart Display</h5>
                <p className="card-text">welcome</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="card1">
              <div className="card-body ajay">
                <h5 className="card-title">IOT Gateway</h5>
                <p className="card-text">welcome</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel> 
            <div className="card1">
              <div className="card-body ajay">
                <h5 className="card-title">Manufacturing Execution System(MES)</h5>
                <p className="card-text">welcome</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="card1">
              <div className="card-body ajay">
                <h5 className="card-title">ADISARA-Smart 4.0</h5>
                <p className="card-text">welcome</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="card1">
              <div className="card-body ajay">
                <h5 className="card-title">ADISRA-Insight</h5>
                <p className="card-text">welcome </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="card1">
              <div className="card-body ajay">
                <h5 className="card-title">ADISRA-Knowledge</h5>
                <p className="card-text">welcome</p>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </table>
    </>
  )
}

export default Product;
