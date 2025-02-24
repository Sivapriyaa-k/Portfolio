import React from "react";
import "./Projects.css";
import projects_data from "../../assets/projects_data.js";
// import theme_pattern from "../../assets/theme_pattern.svg";
const Services = () => {
  return (
    <div className="projects" id="projects">
      <div className="project-title  d-flex flex-column align-items-center justify-content-center">
        <h1
          className="text-center wow animate__animated animate__fadeInRight"
          data-wow-delay="0.5s"
        >
          Projects
        </h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>

      <div className="projects-container">
        <div className="row">
          {projects_data.map((service, index) => {
            return (
              <div
                key={index}
                className="col-12 col-md-4 services-format wow animate__animated animate__fadeInUp"
                data-wow-delay="0.5"
              >
                <a href={service.s_link} target="_blank">
                  <div className="project-ind">
                    <img src={service.s_image} alt="" className="img-fluid" />
                    <h2>{service.s_name}</h2>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
