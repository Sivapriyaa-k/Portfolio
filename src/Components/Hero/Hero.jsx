import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero d-flex align-items-center justify-content-center flex-column">
      {/* <img src={profile_img} alt="" /> */}
      <h1>
        <span>I'm Sivapriya, </span>a Web Developer based in Thanjavur.
      </h1>
      <p className="text-center">
        I am a Web Developer at <span>Kavisoftek</span> with 2 years of
        experience in WordPress, PHP, and React.
      </p>
      <div className="hero-action d-flex align-items-center ">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
