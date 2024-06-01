/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./Navbar.css";
import NavLogo from "../../images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [addShadow, setAddShadow] = useState(false);
  const { t, i18n } = useTranslation();

  const handleClickNav = () => {
    setShowNavbar(!showNavbar);
    window.scrollTo({ top: 0 });
  };

  const handleChange = (event: string) => {
    console.log(event);
    const selectlang = event;
    i18n.changeLanguage(selectlang)
    
  };

 

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setAddShadow(true);
      } else {
        setAddShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      style={{ }}
      className='nav-container'
    >
      <div className={`container ${addShadow ? "activeNav" : ""}`}>
        <div className='nav-logo-items'>
          <div className='nav-logo'>
            <a href='/'>
              <img src={NavLogo} alt='Logo' />
            </a>
          </div>
          <div className={`nav-items ${showNavbar ? "active" : ""}`}>
            <FaTimes className='close' onClick={handleClickNav} />
            <Link
              to='/'
              onClick={handleClickNav}
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              {t("nav-item1")}
            </Link>
            <Link
              to='/shop'
              onClick={handleClickNav}
              className={`nav-item ${
                location.pathname === "/shop" ? "active" : ""
              }`}
            >
              {t("nav-item2")}
            </Link>
            <Link
              to='/about-us'
              onClick={handleClickNav}
              className={`nav-item ${
                location.pathname === "/about-us" ? "active" : ""
              }`}
            >
              {t("nav-item3")}
            </Link>
            <Link
              to='/contact-us'
              onClick={handleClickNav}
              className={`nav-item ${
                location.pathname === "/contact-us" ? "active" : ""
              }`}
            >
              {t("nav-item4")}
            </Link>
          </div>
        </div>
        <select
          className='languages'
          onChange={(e)=>handleChange(e.target.value)}
          name='language'
          
          id=''
        >
          <option className='options' value='en'>
            English
          </option>
          <option className='options' value='ru'>
            Russian
          </option>
          <option className='options' value='uz'>
            O'zbek
          </option>
        </select>
        <FaBars className='bars' onClick={handleClickNav} />
      </div>
    </div>
  );
};

export default Navbar;
