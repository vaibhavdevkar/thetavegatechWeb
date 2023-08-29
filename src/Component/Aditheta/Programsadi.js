import React from 'react'
import logo1 from "../../AdiImg/Picture1.jpg"
import logo2 from '../../AdiImg/Picture1.png'
import logo3 from '../../AdiImg/Picture7.png'
import './Programsadi.css'

const Programsadi = () => {
    return (
        <div className='procon'>
            <div className='program1'> <h2><span style={{ color: " RebeccaPurple", fontWeight: "bold" }}>PROGRAMS</span> </h2>
            </div>

            {/* second SEction  */}
            <div className='program2'>
                <h3>REGISTERED SYSTEM INTEGRATORS</h3>
                <p>System Integrators are valuable partners in the ADISRA-THETAVEGA worldwide ecosystem. It is important that system integrators grow with us and have the tools to be successful. We offer two system integrators programs</p>
                <p>Registered System Integrator. Apply online to be a part of our program. You will be notiﬁed when new releases will be available and before they are released to the market.
                </p>
            </div>

            <div className='program3'>
                <h3>CERTIFIED SYSTEM INTEGRATORS</h3>
                <p>Certiﬁed System Integrator program. Register to be a Certiﬁed System Integrator, taking the training course online or in person, and then pass the exam. You will join our growing number of Certiﬁed System Integrators. You can take advantage of excellent beneﬁts such as:</p>
            </div>

            {/* Third Section */}

            <div className='container program4'>
                <div className='row'>
                    <div className='col-4'>
                        <img src={logo1} alt="loading... " style={{ height: "200px", width: '70%' }} />
                    </div>
                    <div className='col-4'>
                        <img src={logo2} alt="loading... " style={{ height: "200px", width: '70%' }} />

                    </div>
                    <div className='col-4'>
                        <img src={logo3} alt="loading... " style={{ height: "200px", width: '70%' }} />
                    </div>
                </div>
            </div>

            <div className='container program5'>
                <div className='row'>
                    <div className='col-4 pro1'>
                        <h4>FREE DEVELOPMENT SOFTWARE</h4>
                    </div>
                    <div className='col-4 pro2'>
                        <h4>FREE TRAINING</h4>
                    </div>
                    <div className='col-4 pro1'>
                        <h4>ASSISTANCE WITH MARKETING SUPPORT </h4>
                    </div>
                    <p>There are many reasons to join the ADISRA-THETAVEGA System Integrator program, but most of all we want to partner with you to help you deliver leading edge, state of the art manufacturing solutions to help your customers meet their manufacturing goals.</p>
                </div>
            </div>

            <div className='program7'>
                <h2>EDUCATIONAL PROGRAM</h2>
                <p >ADISRA-THETAVEGA is passionate about education and working with educational institutions so we may learn from each other. We want to partner with educational institutions and research groups by providing them access to no charge educational licenses and training on our software. Our goal is to learn from each other and promote a mutual exchange of ideas focused on fostering innovation and promoting the next generation of industrial automation.</p>
            </div>
        </div>
    )
}

export default Programsadi