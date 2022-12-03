import React, { useState, useRef } from "react";
import { Link , NavLink} from "react-router-dom";
import Logo from "../Pages/Images/Logo-1.svg";
import english from "../Pages/Images/english.webp";
import azerbaijan from "../Pages/Images/azerbaijan.svg";
import RenderCart from "../Pages/MainPages/RenderCart"
import { useCart } from "react-use-cart";
import "../Pages/datas/langConfig/i18next";
import { useTranslation } from "react-i18next";
import Theme from "./MainPages/Theme";
const Nav = ({ color, setColor }) => {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const [show, setShow] = useState(false);
  const switchColor = () => {
    setColor(color === "dark" ? "light" : "dark");
  };
  const { totalItems } = useCart();
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  const { t, i18n } = useTranslation();
  const langClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  const logoutClick =()=>{
    localStorage.clear();
    window.location.reload();
  }
  return (

    <div data-aos="fade-down" data-aos-duration="2000" className="myNavPage">

      <div className="background"></div>
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid">
          <Link to="/">
            {" "}
            <img src={Logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" id="collapse"></span>
          </button>
          <div
            className="collapse navbar-collapse mt-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  {t("navbar.1")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blogPage"
                  className="nav-link active ms-3"
                  aria-current="page"
                  href="#"
                >
                  {t("navbar.2")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/store"
                  className="nav-link active ms-3"
                  aria-current="page"
                  href="#"
                >
                  {t("navbar.3")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="aboutus"
                  className="nav-link active ms-3"
                  aria-current="page"
                  href="#"
                >
                  {t("navbar.4")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  className="nav-link active ms-3"
                  aria-current="page"
                  href="#"
                >
                  {t("navbar.5")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="bestsellers"
                  className="nav-link active ms-3"
                  aria-current="page"
                  href="#"
                >
                  {t("navbar.6")}
                </Link>
              </li>
            </ul>
            <div className=" d-flex align-items-center">
              <img
                width={30}
                onClick={() => langClick("en")}
                src={english}
                alt=""
              />
              <img
                width={30}
                onClick={() => langClick("az")}
                src={azerbaijan}
                className="ms-3"
                alt=""
              />
              <Theme />
              <NavLink className="ms-2" to="/wishlist">
                <i className="myWishList fa-solid fa-heart"></i>
              </NavLink>
              <li className="dr-item nav-item dropdown">
              <i className="changingIcon fa-regular fa-user ms-3 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/login"><a className="dropdown-item" href="#">
                    { 
                    getEmail && getPassword ? getEmail : "Login"
                    }
                    </a></Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a onClick={logoutClick} className="dropdown-item" href="#">Logout</a></li>
                </ul>
              </li>
              {/* <Link to="/login">
                <i className="changingIcon fa-regular fa-user ms-3 nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
              </Link> */}
              <div>
                {
                  show ? <RenderCart /> : null
                }
                <i onClick={() => setShow(!show)} class="fa-solid fa-cart-shopping ms-3"></i>
              </div>
              <div className="cartBalance ms-1">{totalItems}</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
