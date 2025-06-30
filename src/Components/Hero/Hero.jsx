import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div
      className="hero d-flex align-items-center justify-content-center flex-column"
      id="home"
    >
      {/* <img src={profile_img} alt="" /> */}
      <h1
        className="wow animate__animated animate__fadeInRight"
        data-wow-delay="0.5s"
      >
        <span>I'm Sivapriya</span>
        <br /> Web Developer
      </h1>
      <p
        className="text-center wow animate__animated animate__fadeInUp"
        data-wow-delay="0.6s"
      >
        I am a Web Developer at <span>Kavisoftek</span> with 2.10 years of
        experience in WordPress, PHP, and React.
      </p>
      <div className="hero-action d-flex align-items-center ">
        <div
          className="hero-connect wow animate__animated animate__zoomIn"
          data-wow-delay="0.5s"
        >
          <AnchorLink href="#contact">Connect with me</AnchorLink>
        </div>
        <div
          className="hero-resume wow animate__animated animate__zoomIn"
          data-wow-delay="0.5s"
        >
          <a
            href="https://drive.google.com/file/d/1MyIHIOBRTvCvZerZc4YwKcXZbDgPYNsy/view?usp=sharing"
            target="_blank"
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
