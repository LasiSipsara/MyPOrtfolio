import React from "react";
import "./HeroPage.css";

import ProfilePic from "../../assets/profilePic.jpeg";

const HeroPage = () => {
  const handleGithubClick = () => {
    window.open("https://github.com/LasiSipsara");
  };
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "srcassetsLasini Sipsara CV.pdf";
    link.download = "your-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id="home" className="hero-page">
      <div className="img-section">
        <div className="blob"></div>
      </div>

      <div className="hero-description">
        <p className="hero-hello">Hello,</p>
        <p className="hero-name">I'm Lasini Sipsara.</p>
        <p className="hero-text">
          Currently a Software Engineering Undergraduate.
        </p>

        <div className="hero-action">
          <div className="hero-connect" onClick={handleGithubClick}>
            Github
          </div>
          <div className="hero-resume" onClick={handleDownloadCV}>
            Download CV
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
