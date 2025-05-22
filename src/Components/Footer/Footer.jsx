import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  // const year = date("Y");
  return (
    <div className="footer">
      <div className="container-fluid py-3">
        <div className="row align-items-center">
          <div className="col-6 col-md-6">
            <div className="footer-top-left">
              <p>© {year} | <a href="https://sivapriyaa-portfolio.netlify.app/">Sivapriya</a></p>
            </div>
          </div>

          <div className="col-6 col-md-6">
            <div className="footer-top-right ">
              <div className="footer-icons d-flex justify-content-end">
                <a
                  href="https://www.linkedin.com/in/sivapriya-k/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/Sivapriyaa-k/" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="mailto:sivapriyakalamegam@gmail.com" target="_blank">
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
