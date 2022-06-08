import React, {useRef, useState, useContext} from 'react'
import { themeContext } from "../../Context";
import './Contact.css'
import emailjs from "@emailjs/browser";

const Contact = () => {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
    const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    /*
      emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
    */
    emailjs
      .sendForm(
        "service_yejgw2p",
        "template_i297uoc",
        form.current,
        "81Gy1wlacH5J7F-2r"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (

    <div className="contact-form" id="contact">
      <div className="contact-left">
        <div className="contact-heading">
            <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
            <span>Contact me</span>
            <div className="blur contact-blur1"></div>
        </div>
      </div>
      <div className="contact-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur contact-blur"></div>
        </form>
      </div>
    </div>
  )
}

export default Contact