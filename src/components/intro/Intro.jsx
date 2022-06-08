import "./Intro.css";
import React, { useContext } from "react";
import { themeContext } from "../../Context";
import Vector1 from '../../images/vector-1.png'
import Vector2 from '../../images/vector-2.png'
import person from '../../images/person.png'
import thumbup from '../../images/thumbup.png'
import crown from '../../images/crown.png'
import glassesimoji from '../../images/glassesimoji.png'
import FloatingDiv from "../floatingDiv/FloatingDiv";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin"

const Intro = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id="home">
      <div className="intro-left">
        <div className="intro-name">
          <span className="bounce-in-top" style={{ color: darkMode ? "white" : "" }} >Hi! I Am</span>
          <span className="bounce-in-right">Raviteja Boddu</span>
          <p>
            Frontend Developer with high knowledge in web designing and
            development, providing quality services.
          </p>
        </div>
        <button className="intro-hire button">
          Hire me
          </button>
        <div className="intro-icons">
          {/* <a href="#" >
            <img src={Github} alt="Github" />
          </a>
          <a href="#" >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="#" >
            <img src={Instagram} alt="Instagram" />
          </a> */}
          <Insta className="in-insta jello-horizontal"  size={"3rem"} />
          <LinkedIn className="in-fb jello-horizontal"  size={"3rem"} />
          <Gitub className="in-github jello-horizontal" size={"3rem"} />
        </div>
      </div>
      <div className="intro-right">
        <img src={Vector1} alt="Vector1" />
        <img src={Vector2} alt="Vector2" />
        <img src={person} alt="person" />
        <img src={glassesimoji} alt="glassesimoji"  className="slide-right"/>
        <div 
          className="floating-crown slide-left"
          style={{ color: darkMode ? "black" : "" }}
        >
        <FloatingDiv image={crown} txt1="Web" txt2="Developer"/>
        </div>
        <div 
          className="floating-thumb slide-right"
          style={{ color: darkMode ? "black" : "" }}
        >
        <FloatingDiv  image={thumbup} txt1="Creative &" txt2="Best Designs"/>
        </div>
        {/* blur divs */}
        <div className="blur-pink"></div>
        <div className="blur-blue"></div>
      </div>
    </div>
  );
};

export default Intro;
