import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.webp";
import PhoneIcon from "../assets/tel.webp";
import EmailIcon from "../assets/email.webp";
import LocationIcon from "../assets/location.webp";



function Footer() {
  const location = useLocation();
  const isPositionPage = location.pathname === "/positions";
  const isContactPage = location.pathname === "/contact";
  return (
    <div className={isContactPage || isPositionPage ? "footer footer--border" : "footer"}>
      <Link to="/">
        <img className="footer__logo" src={Logo} width="40" height="40" alt="Logo icon" />
      </Link>
      <div className="footer__text-box">
        <p className="footer__text"><img className="footer__img" src={EmailIcon} alt="Email icon" /> xyz@amu.edu.pl</p>
        <p className="footer__text"><img className="footer__img" src={PhoneIcon} alt="Phone icon" /> 829 00 0000</p>
        <p className="footer__text"> <a href="https://maps.app.goo.gl/u3aa4uVqtLps6BHK7"><img className="footer__img" src={LocationIcon} alt="Location icon" /></a> Lorem ipsum, dolor, wing A, room X.Y
        </p>
      </div>
    </div>
  );
}

export default Footer;
