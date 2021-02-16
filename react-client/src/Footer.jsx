import React from "react";
const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>About</h6>
          <p className="text-justify">
            Our App was created in our Green Field, we hope that will go across
            million people and it will be used, for professional reasons.
          </p>
        </div>
        <div className="col-xs-6 col-md-3">
          <ul className="footer-links">
            <li>
              <a href="http://scanfcode.com/about/">About Us</a>
            </li>
            <li>
              <a href="https://www.rebootkamp.net/">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by Organization
              <a href="https://github.com/RBKCloudX">RBK CohortX</a>
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="facebook ui circular facebook icon button"
                  href="https://www.facebook.com/RBKTunisia"
                >
                  <i className="facebook icon"></i>
                </a>
              </li>
              <li>
                <a
                  className="twitter ui circular facebook icon button"
                  href="https://twitter.com/rebootkamp?lang=en"
                >
                  <i className="twitter icon"></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin ui circular facebook icon button"
                  href="https://www.linkedin.com/company/rebootkamp-tunisie/"
                >
                  <i className="linkedin icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
