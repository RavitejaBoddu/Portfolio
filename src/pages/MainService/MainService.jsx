import React from "react";
import Footer from "../../components/footer/Footer";
import Services from "../../components/services/Services";
import "./MainService.css";

const MainService = () => {
  return (
    <div className="main-service">
      <Services />
      <div>
        <div className='dev'>
                <h1>Developer</h1>
                <p>Html, Css, JavaScript, React</p>
            </div>
            <div className='design'>
                <h1>Design</h1>
                <p>Figma, Sketch, photoshp, Adobe, Adobe xd</p>
            </div>
            <div className='ui'>
                <h1>UI/UX</h1>
                <p>Lorem ispum is simpley dummy text of printing of printing Lorem</p>
            </div>           
      </div>
      <Footer />
    </div>
  );
};

export default MainService;
