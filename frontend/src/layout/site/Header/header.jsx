import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="header__top__left__icon_boxs">
                <div className="header__top__left__icon">
                  <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div className="header__top__left__icon">
                  <i class="fa-brands fa-twitter"></i>
                </div>
                <div className="header__top__left__icon">
                  <i class="fa-brands fa-instagram"></i>
                </div>
                <div className="header__top__left__icon">
                  <i class="fa-brands fa-linkedin-in"></i>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="header__top__right__box_cards">
                <div className="header__top__right__box">
                  <i class="fa-solid fa-phone"></i>
                  <p>(+1) 234 5678 9101</p>
                </div>
                <div className="header__top__right__box">
                  <i class="fa-solid fa-envelope"></i>
                  <p>shop@yourdomain.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom">
          <div className="header__bottom__left">
            <p>
              Selling<span>.</span>
            </p>
          </div>
          <div className="header__bottom__right">
            <ul className="header__nav">
              <li>
                <Link className="header__nav_actib" to="">Home</Link>
              </li>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Special</a>
              </li>
              <li>
                <a href="/">Testimonials</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <Link to="/basket">Sebet</Link>
              </li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Header;
