import React from 'react'
import "./Footer.css";
import wave from "../../images/wave.png";
import waveb from "../../images/blue-wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={waveb} alt="" style={{ width: "100%", height:'380px' }} />
      <div className="footer-content">
        <span>raviteja1312boddu@gmail.com</span>
        <div className="footer-icons">
          <Insta className="i-insta"  size={"2.5rem"} />
          <Facebook className="i-fb"  size={"2.5rem"} />
          <Gitub className="i-github"  size={"2.5rem"} />
        </div>
        <span>© 2021 `Devilshost` development. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer