import React from 'react';
import './Buildingblocks.css';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const Buildingblocks = () => {
    return (
        <div className='buildtab'>
            <h2 className='block4'>
                <span style={{ color: 'RebeccaPurple', fontWeight: 'bold' }}>BUILDING BLOCKS</span>
            </h2>

            <div className='container block2'>
                <div className='row'>
                    <div className='col-sm-6 col-md-3 block'>
                        <h5>VISUALIZATION & DESCRIPTIVE ANALYTICS</h5>
                    </div>
                    <div className='col-sm-6 col-md-3 block1'>
                        <h5>DIAGNOSTIC ANALYTICS</h5>
                    </div>
                    <div className='col-sm-6 col-md-3 block'>
                        <h5>PREDICTIVE ANALYTICS</h5>
                    </div>
                    <div className='col-sm-6 col-md-3 block1'>
                        <h5>PRESCRIPTIVE ANALYTICS</h5>
                    </div>
                </div>
            </div>

            <div className='container block5'>
                <div className='row'>
                    <div className='col-sm-6 col-md-3'>
                        <h5>HMI / SCADA</h5>
                        <p>
                            Aims to provide information in a comprehensive way. Its role is to gathering data and managing the
                            overall operation of the equipment or processes. It answers the question,
                            <span style={{ color: 'orange' }}> “What is happening now?”</span>
                        </p>
                    </div>
                    <div className='col-sm-6 col-md-3'>
                        <h5>OEE & Advanced Analytics :</h5>
                        <p>Aims to provide help in uncovering valuable insights from the data being analyzed. It answers the question,
                            <span style={{ color: "orange" }}> “What has happened ?” </span>
                        </p>
                    </div>
                    <div className='col-sm-6 col-md-3'>
                        <h5> Predictive Analytic Maintenance :</h5>
                        <p>Aims to forecast behavior of
                            equipment or processes. It answers the question <span style={{ color: "orange" }}>“What could happen in the future ?”</span>
                        </p>
                    </div>
                    <div className='col-sm-6 col-md-3'>
                        <h5>Prescriptive Analytic Maintenance :</h5>
                        <p>
                            Aims to suggest conclusions or actions that may be taken based on the analysis. It answers the question<span style={{ color: "orange" }}>
                                “What should be done ?”</span>

                        </p>
                    </div>

                    {/* The rest of the columns follow a similar pattern */}
                </div>
            </div>
            <div className='container paragrap'  >
                <div className='row'>
                    <div className='col-10'>

                        <p><BsFillArrowUpCircleFill />Our products are modular building blocks. ADISRA-THETAVEGA SmartView's role is to gather data from various devices, sources, and manage the overall equipment or processes operation. It answers the question, “What is happening now? “</p>
                        <p><BsFillArrowUpCircleFill />InsightView™'s role is to uncover valuable insights from the data being analyzed. It answers the question, “What has happened?”.</p>
                        <p><BsFillArrowUpCircleFill />KnowledgeView™'s role is to forecast equipment and processes behavior. It answers the question “What could happen?”</p>
                        <p><BsFillArrowUpCircleFill />Finally, prescriptive analytics answers the questions “How should we respond to those potential future events?” KnowledgeView™ offers the ability to ultimately prescribe an optimal course of action in real-time.</p>
                        <p><BsFillArrowUpCircleFill />Our Innovative technology's cornerstone is anchored by a commitment to superior customer support. We ﬁrmly believe that a software product without good customer support is just a package with an impending headache. That is why we provide our customers superior customer support that includes extensive online help ﬁles, training materials video library, whitepapers,  phone  support,  email  support,  chat  support,  and  online  bulletin  boards  so customers can help each other.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buildingblocks;
