import React, { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import './Adisara.css';
// import demo from './imgs/demo.jpg'
import Tabtwo from '../Getting/Tabtwo';
import Tabthree from '../Getting/Tabthree';
import Tabfour from '../Getting/Tabfour';
import Tabfive from '../Getting/Tabfive';
// import Tabsix from './Industries/Tabsix';
import Tabseven from '../Getting/Tabseven';
import Tabeight from '../Getting/Tabeight';
import Tabnine from '../Getting/Tabnine';
import Challenge from "../Getting/Challenge";
import logo6 from './imgs/adisara.png'
import Tab11 from '../Adisara/Tab11';
import Tab12 from '../Adisara/Tab12';
import Tab13 from '../Adisara/Tab13';
import Tab14 from '../Adisara/Tab14';
import Tab15 from '../Adisara/Tab15';
import Tab16 from "../Adisara/Tab16";

function Adisara() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };

  const tabContents = {
    tab1: <div className='one'>
      <div style={{ textAlign: "center" }}>
        {/* <img src={demo} class="img-fluid animated" alt="" /> */}
      </div>
    </div>,
    tab2: <div className='two'><Tabtwo/></div>,
    tab3: <div className='three'><Tabthree/></div>,
    tab4: <div><Tabfour/></div>,
    tab5: <div><Tabfive/></div>,
    // tab6: <div><Tabsix/></div>,
    tab7: <div><Tabseven/></div>,
    tab8: <div><Tabeight/></div>,
    tab9: <div><Tabnine/></div>,
    tab10: <div className='ten'><Challenge/></div>,
    tab11: <div><Tab11/></div>,
    tab12: <div><Tab12/></div>,
    tab13: <div><Tab13/></div>,
    tab14: <div> <Tab14/></div>,
    tab15: <div><Tab15/></div>,
    tab16: <div><Tab16/></div>
  };

  return (
    <div className='adi1'>
      		<img src={logo6} alt="loading... " style={{height:"80px" , width:'20%'}}  />
      <h4>Enabling Better Visualization Of Your Machine Data And </h4>
      <h2> <span  style={{color: "orange"}}> A Smarter Bottom Line For Your Business </span></h2>
      <Nav variant="tabs" activeKey={activeTab} onSelect={handleSelect} className="adi justify-content-center">
        <NavDropdown title="Getting Started">
          <NavDropdown.Item eventKey="tab1">Home</NavDropdown.Item>
          <NavDropdown.Item eventKey="tab2">Requirements</NavDropdown.Item>
          <NavDropdown.Item eventKey="tab3">Download & Installation</NavDropdown.Item>
          <NavDropdown.Item eventKey="tab4">Licensing</NavDropdown.Item>
          <NavDropdown.Item eventKey="tab5">Launch ADISRA® SmartView</NavDropdown.Item>
          <NavDropdown.Item eventKey="tab6">Create New Project</NavDropdown.Item>
          <NavDropdown.Item eventKey="tab7"> Add Documents & Files</NavDropdown.Item>
          <NavDropdown.Item eventKey="tab8">Project Settings</NavDropdown.Item>
          <NavDropdown.Item eventKey="tab9">C# Scripting</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link eventKey="tab10">Challenges</Nav.Link>
        
        <NavDropdown title="ADISARA">
          <NavDropdown.Item eventKey="tab11">Product Strategy</NavDropdown.Item>
          <NavDropdown.Item eventKey="tab12">Standards</NavDropdown.Item>
          <NavDropdown.Item eventKey="tab13">Building Blocks</NavDropdown.Item>
          <NavDropdown.Item eventKey="tab14">Worldwide Acclaim</NavDropdown.Item>
          
          <NavDropdown.Item eventKey="tab6">Help Site</NavDropdown.Item>
          <NavDropdown.Item eventKey="tab15">Programs</NavDropdown.Item>
          <NavDropdown.Item eventKey="tab16">About Us</NavDropdown.Item>
        </NavDropdown>


        <NavDropdown title="Support">
          <NavDropdown.Item eventKey="tab13">Tab 7</NavDropdown.Item>
          <NavDropdown.Item eventKey="tab14">Tab 8</NavDropdown.Item>
          <NavDropdown.Item eventKey="tab15">Tab 9</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      {tabContents[activeTab]}
    </div>
  );
}

export default Adisara;