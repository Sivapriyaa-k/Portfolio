import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/javascript.svg";
import wordpress from "../../assets/wordpress.svg";
import php from "../../assets/php.svg";
import bootstrap from "../../assets/bootstrap.svg";
import java from "../../assets/java.svg";
import git from "../../assets/git.svg";
import react from "../../assets/react.svg";

function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt=""></img>
      </div>
      <div className="about-section">
        <div className="about-right">
          <div className="about-para ">
            <p>
              Hi, I'm Sivapriya, a web developer currently working at Kavisoftek
              in Thanjavur. I graduated with a BE in Computer Science and
              Engineering from the Government College of Engineering, Thanjavur.
              I have over 2 years and 3 months of experience in web development,
              primarily using WordPress, PHP, HTML, CSS, and JavaScript.
              Additionally, I have knowledge in Java, SQL,React.
            </p>
            <p>
              I have a strong foundation in web development and enjoy solving
              complex problems through clean and efficient code. My goal is to
              create seamless digital experiences that are both visually
              appealing and highly functional.
            </p>
            <p>
              Always eager to learn and stay updated with the latest
              technologies, I am looking forward to contributing to impactful
              projects and growing in the tech industry.
            </p>
          </div>
          <div className="about-skills d-flex flex-wrap justify-content-center mt-5">
            <img
              src={html}
              alt=""
              className="bg-dark p-2 rounded-lg img-fluid"
            />
            <img src={css} alt="" className="bg-dark p-2" />
            <img src={js} alt="" className="bg-dark p-2" />
            <img src={wordpress} alt="" className="bg-dark p-2" />
            <img src={php} alt="" className="bg-dark p-2" />
            <img src={bootstrap} alt="" className="bg-dark p-2" />
            <img src={java} alt="" className="bg-dark p-2" />
            <img src={git} alt="" className="bg-dark p-2" />
            <img src={react} alt="" className="bg-dark p-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
