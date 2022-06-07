import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Services.css";
import heartemoji from "../../images/heartemoji.png";
import glasses from "../../images/glasses.png";
import humble from "../../images/humble.png";
import Card from "../card/Card";
import Resume from "./resume.docx";
import Clock from "../clock/Clock";

const Services = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="services">
      <div className="services-info">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <p>
          You can get various services from web designing to app development.
        </p>
        <a href={Resume} download>
          <button className="services-button button">Download CV</button>
        </a>
        <div className="blur services-blur1"></div>
        {/* <Clock /> */}
      </div>
      <div className="services-cards">
        <div className="design-card slide-left">
          <Card
            image={heartemoji}
            heading={"Design"}
            detail={"Figma, Sketch, photoshp, Adobe, Adobe xd"}
          />
        </div>
        <div className="developer-card slide-left">
          <Card
            image={glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React"}
          />
        </div>
        <div className="ui-card slide-left">
          <Card
            image={humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum is simpley dummy text of printing of printing Lorem"
            }
          />
        </div>
        <div className="blur services-blur2" ></div>
      </div>
    </div>
  );
};

export default Services;
