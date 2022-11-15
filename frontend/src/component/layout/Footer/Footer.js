import React from "react";
import "./Footer.css";
import LinkedIN from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <footer id="footer">

      <div className="midFooter">
        <h1>OAGMS</h1>
        <p>Marketplace for the most precious Arts</p>
        <p>Copyrights 2021 &copy; OAGMS</p>
        <a href="https://www.linkedin.com/in/meghadri-koley-165018203/" target="blank">
              <LinkedIN className="linkedinSvgIcon" />
        </a>
        <a href="https://instagram.com/oagms" target="blank">
              <InstagramIcon className="instaSvgIcon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
