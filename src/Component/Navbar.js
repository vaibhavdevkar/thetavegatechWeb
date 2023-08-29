import React from "react";
import logo from "../logo.svg";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import beforeLogo from '../beforeLogo.svg'
// import { useState } from "react";

// import Industries from './Industries'

const Navbar = () => {  
  return (
        <>
          <div className="  fixed-top nav5">
            <div className="row" id="trans">
              <div className="col-12 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <NavLink className="navbar-brand mt-n3 mb-n1" to="/">
                  <img src={beforeLogo} alt="not found" height="40%" width="30%" style={{marginTop:"1rem"}}/>
                  <img src={logo} alt="not found" height="70%" width="50%" style={{marginTop:"1rem", marginLeft:"1rem"}}/>
                  </NavLink>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    

                  >
                  
                    <span className="navbar-toggler-icon" ></span>
                 </button>
    
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     
                    <ul className="navbar-nav ml-auto" id="navItems">
                      <li className="nav-item ">
                        {/* <NavLink className="nav-link  "  to="/"  >
                          Home <span class="sr-only">(current)</span>
                        </NavLink> */}
                      </li>
                      
                     
                      <li className="nav-item dropdown">
                        <NavLink
                          className="nav-link dropdown-toggle"
                          to="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          
                        >
                          <span id="navItems text-dark">About</span>
                        </NavLink>
                        <div
                          className="dropdown-menu" aria-labelledby="navbarDropdown"
                        >

                          <NavLink className="dropdown-item" to="/about">
                            About Us <span class="caret"></span>
                          </NavLink>
                          <NavLink className="dropdown-item" to="/innovation">
                          Innovations
                          </NavLink>
                          <NavLink className="dropdown-item" to="/infrastructure">
                          Infrastructure
                          </NavLink>
                          <NavLink className="dropdown-item" to="/Skills">
                          Skills
                          </NavLink>
                          
                        </div>
                      </li>


                      <li className="nav-item dropdown">
                        <NavLink
                          className="nav-link dropdown-toggle"
                          to="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span id="navItems text-dark">Industries</span>
                        </NavLink>
                        <div
                          className="dropdown-menu" aria-labelledby="navbarDropdown"
                        >

                          <NavLink className="dropdown-item" to="/industries/automotiveandancillaries">
                          Automotive & Ancillaries
                          </NavLink>
                          <NavLink className="dropdown-item" to="/industries/buildingsandsmartcity">
                          Buildings & Smart City
                          </NavLink>
                          <NavLink className="dropdown-item" to="/industries/pharmaceuticals">
                          Pharmaceuticals
                          </NavLink>
                          <NavLink className="dropdown-item" to="/industries/foodandbraveries">
                          Food & Braveries
                          </NavLink>
                          <NavLink className="dropdown-item" to="industries/textile">
                          Textile
                          </NavLink>
                          <NavLink className="dropdown-item" to="/industries/defence">
                          Defence
                          </NavLink>
                          <NavLink className="dropdown-item" to="/industries/steelandmining">
                          Steel & Mining
                          </NavLink>
                          <NavLink className="dropdown-item" to="/industries/energyandgas">
                          Energy & Gas
                          </NavLink>
                          <NavLink className="dropdown-item" to="/industries/agriculture">
                          Agriculture <span class="caret"></span>
                          </NavLink>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <NavLink
                          className="nav-link dropdown-toggle"
                          to="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span id="navItems text-dark">Products</span>
                        </NavLink>
                        <div
                          className="dropdown-menu" aria-labelledby="navbarDropdown"
                        >

                          <NavLink className="dropdown-item" to="products/operatexmes">
                          OperateX – MES <span class="caret"></span>
                          </NavLink>
                          <NavLink className="dropdown-item" to="products/stepwiseconnect">
                          Stepwise Connect
                          </NavLink>
                          <NavLink className="dropdown-item" to="products/nexabridge">
                          NexaBridge IoT
                          </NavLink>
                          <NavLink className="dropdown-item" to="products/panelexelectrical">
                          Panel Ex- Electrical Panels
                          </NavLink>
                          
                        </div>
                      </li>
                          
                      {/* <li className="nav-item">
                        <NavLink className="nav-link" to="/product" id="navItems">
                          Product
                        </NavLink>
                      </li> */}
                      <li className="nav-item ">
                        <NavLink className="nav-link text-dark" to="/capabilities" id="navItems">
                          Capabilities
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown">
                        <NavLink
                          className="nav-link dropdown-toggle"
                          to="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span id="navItems">Adisra-Thetavega</span>
                        </NavLink>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >

                          <NavLink className="dropdown-item" to="/adisra/product">
                            Project Strategy <span class="caret"></span>
                          </NavLink>
                          <NavLink className="dropdown-item" to="adisra/standards">
                            Standards
                          </NavLink>
                          <NavLink className="dropdown-item" to="adisra/building">
                            Building Blocks
                          </NavLink>
                          <NavLink className="dropdown-item" to="adisra/worldwide">
                            Worldwide Acclaim
                          </NavLink>
                          {/* <NavLink className="dropdown-item" to="adisra/helpsite">Help Site</NavLink> */}
                          <NavLink className="dropdown-item" to="adisra/programs">
                            Programs
                          </NavLink>
                          <NavLink className="dropdown-item" to="adisra/about">
                            About
                          </NavLink>
                          
                        </div>
                      </li>
                      {/* <li className="nav-item">
                        <NavLink className="nav-link" to="/adisara" id="navItems">
                          Adisra-Thetavega
                        </NavLink>
                      </li> */}
                      <li className="nav-item ">
                        <NavLink className="nav-link text-dark" to="/contact" id="navItems">
                          Contact Us
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                
                </nav>
              </div>
            </div>
          </div>
        </>
      )
    };
    

export default Navbar;
