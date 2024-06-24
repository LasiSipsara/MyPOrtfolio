import React from "react";
import "./Contact.css";
import EmailIcon from "../../assets/email icon.png";
import LocationIcon from "../../assets/location icon.png";
import TeleIcon from "../../assets/tele icon.png";
import FacebookIcon from "../../assets/facebook.png";
import LinkedinIcon from "../../assets/linkedin.png";
import TwiterIcon from "../../assets/twiter.png";
import HackerrankIcon from "../../assets/hackerrank.svg";
import Leetcode from "../../assets/leetcode.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bf6cf183-04aa-4f57-a6a3-888c96a068e7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Feel free to send me a message about anything that you want me to
            work on.You can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={EmailIcon} alt="" />
              <p>lasini272si@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={TeleIcon} alt="" />
              <p>+94 76 4333 656</p>
            </div>
            <div className="contact-detail">
              <img src={LocationIcon} alt="" />
              <p>IhalaMaddepola, Giriulla, Sri Lanka</p>
            </div>
          </div>

          <div className="social-icons">
            <div className="icon">
              <a href="">
                <img src={FacebookIcon} alt="facebook" />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/lasini-sipsara-ab5478266/"
                target="_blank"
              >
                <img src={LinkedinIcon} alt="linkedin" />
              </a>
            </div>
            <div className="icon">
              <a href="">
                <img src={TwiterIcon} alt="twiter" />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.hackerrank.com/profile/lasini272si">
                <img src={HackerrankIcon} alt="hackerrank" />
              </a>
            </div>
            <div className="icon">
              <a href="https://leetcode.com/u/ftOU0FXxiQ/">
                <img src={Leetcode} alt="leetcode" />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
