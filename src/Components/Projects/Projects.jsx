import React from "react";
import "./Projects.css";
import projects_data from "../../assets/projects_data.js";
// import theme_pattern from "../../assets/theme_pattern.svg";

const Services = () => {
  return (
    <div className="projects">
      <div className="project-title  d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-center">Projects</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>

      <div className="projects-container">
        <div className="row">
          {projects_data.map((service, index) => {
            return (
              <div key={index} className="col-4 col-md-4 services-format">
                <h3>{service.s_no}</h3>

                <a href={service.s_link}>
                  <img src={service.s_image} alt="" />
                  <h2>{service.s_name}</h2>
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
