import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid py-3">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="footer-top-left">
              <p>© 2025 | Sivapriya</p>
            </div>
          </div>

          <div className="col-md-6">
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
