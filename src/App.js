
import './App.css';
//import Home from './Component/Home';
import About from './Component/About';
import Skills from './Component/Skills'
import Infrastructure from './Component/Infrastructure'
import Capabilities from './Component/Capabilities';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import Maincomp from './Maincomp';
import Error from './Component/Error';
import Slides from './Component/Slides';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Footer from './Component/Footer.js'
import Agriculture from './Component/Industries/Agriculture'
import EnergyAndGas from './Component/Industries/EnergyAndGas';
import SteelAndMining from './Component/Industries/SteelAndMining'
import Defence from './Component/Industries/Defence';
import Textile from './Component/Industries/Textile';
import FoodAndBraveries from './Component/Industries/FoodAndBraveries';
import Pharmaceuticals from './Component/Industries/Pharmaceuticals';
import BuildingsAndSmartCity from './Component/Industries/BuildingsAndSmartCity';
import AutomotiveAndAncillaries from './Component/Industries/AutomotiveAndAncillaries';
import GoToBtn from './Component/GoToBtn';
import Display from './Component/product/Display';
import Autonomous from './Component/SlidePage/Autonomous';
import IOT from './Component/SlidePage/IOT'
import Innovations from './Component/Innovations';  
import ArVr from './Component/SlidePage/ArVr';
import BigData from './Component/SlidePage/BigData';
import CloudComputing from './Component/SlidePage/CloudComputing';
import Integrations from './Component/SlidePage/Integrations'
import DataCapture from './Component/Pages/AutomateIdentification';
import Trace from './Component/Pages/Trace';
import MachineVision from './Component/Pages/MachineVision';
import M2M from './Component/Pages/M2M';
import { Statistical } from './Component/Pages/Statistical';
import DataIntegration from './Component/Pages/DataIntegration';
import Gstart from './Component/SlidePage/Gstart';
import Downi from './Component/SlidePage/Downi';
import Licensing from './Component/SlidePage/Licensing';
import Launch from './Component/SlidePage/Launch';
import Createnew from './Component/SlidePage/Createnew';
import Addfiles from './Component/SlidePage/Addfiles';
import Projectsetting from './Component/SlidePage/Projectsetting';
import Csharp from './Component/SlidePage/Csharp';
import Productstr from './Component/Aditheta/Productstr';
import Standards from './Component/Aditheta/Standards';
import Buildingblocks from './Component/Aditheta/Buildingblocks';
import Worldwide from './Component/Aditheta/Worldwide';
import Helpsite from './Component/Aditheta/Helpsite';
import Programsadi from './Component/Aditheta/Programsadi';
import Aboutadi from './Component/Aditheta/Aboutadi';
import Panels from './Component/Panels';
import RemoteMonitoring from './Component/Pages/RemoteMonitoring';
import OperatexMse from './Component/Products/OperatexMse';
import StepwiseConnect from './Component/Products/StepwiseConnect';
import NexaBridgeIOT from './Component/Products/NexaBridgeIOT';
import PanelExElectrical from './Component/Products/PanelExElectrical';
import PrivacyPolicy from './Component/privacy/PrivacyPolicy';
import TermsOfUse from './Component/privacy/TermsOfUse';
import Disclaimer from './Component/privacy/Disclaimer';
import CopyRightNotice from './Component/privacy/CopyRightNotice';
import Career from './Component/Career';



function App() {
  return (
    <div className='App1'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Maincomp />} />
          <Route path='/' index element={<Slides />} />
          <Route path="/about" element={<About />} />
          <Route path="/innovation" element={<Innovations/>}/>
          <Route path='/infrastructure' element={<Infrastructure/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path="industries/agriculture" element={<Agriculture />} />
          <Route path="industries/energyandgas" element={<EnergyAndGas />} />
          <Route path="industries/steelandmining" element={<SteelAndMining/>} />
          <Route path="industries/defence" element={<Defence />} />
          <Route path="industries/textile" element={<Textile />} />
          <Route path="industries/foodandbraveries" element={<FoodAndBraveries />} />
          <Route path="industries/pharmaceuticals" element={<Pharmaceuticals/>} />
          <Route path="industries/buildingsandsmartcity" element={<BuildingsAndSmartCity />} />

          <Route path="panels" element={<Panels />} />
          <Route path='/termsofuse' element={<TermsOfUse/>}/>
          <Route path="capabilities" element={<Capabilities />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
          <Route path='/termsofuse' element={<TermsOfUse/>}/>
          <Route path='/disclaimer' element={<Disclaimer/>}/>
          <Route path='/copyrightnotice' element={<CopyRightNotice/>}/>
          <Route path="adisra/product" element={<Productstr />} />
          <Route path="adisra/standards" element={<Standards />} />
          <Route path="adisra/building" element={<Buildingblocks />} />
          <Route path="adisra/worldwide" element={<Worldwide />} />
          <Route path="adisra/helpsite" element={<Helpsite />} />
          <Route path="adisra/programs" element={<Programsadi />} />
          <Route path="adisra/about" element={<Aboutadi />} />

          <Route path="contact" element={<Contact />} />
          <Route path="career" element={<Career />} />

          {/* Dont Remove Product and Display */}
          <Route path="product" element={<Product />} />
          <Route path="display" element={<Display />} />
          {/* Dont Remove Product and Display */}

          <Route path="products/operatexmes" element={<OperatexMse />} />
          <Route path="products/stepwiseconnect" element={<StepwiseConnect />}/>
          <Route path="products/nexabridge" element={<NexaBridgeIOT/>}/>
          <Route path="products/panelexelectrical" element={<PanelExElectrical/>}/>
          <Route path="/autonomous" element={<Autonomous />} />
          <Route path="/iot" element={<IOT />} />
          <Route path="/arvr" element={<ArVr />} />
          <Route path="/bigdata" element={<BigData />} />
          <Route path="/cloudcomputing" element={<CloudComputing />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/datacapture" element={<DataCapture />} />
          <Route path="/remotemonitoring" element={<RemoteMonitoring/>} />
          <Route path="/trace" element={<Trace />} />
          <Route path="/machinevision" element={<MachineVision />} />
          <Route path="/m2m" element={<M2M />} />
          <Route path="/statistical" element={<Statistical />} />
          <Route path="/dataintegration" element={<DataIntegration />} />
          <Route path="/requirement" element={<Gstart />} />
          <Route path="/downi" element={<Downi />} />
          <Route path="/licensing" element={<Licensing />} />
          <Route path="/launch" element={<Launch />} />
          <Route path="/createnew" element={<Createnew />} />
          <Route path="/addfiles" element={<Addfiles />} />
          <Route path="/prosetting" element={<Projectsetting />} />
          <Route path="/csharp" element={<Csharp />} />

          <Route path="*" element={<Error />} />
        </Routes>

        <GoToBtn />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
