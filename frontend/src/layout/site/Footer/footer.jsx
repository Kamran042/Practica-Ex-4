import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop__box">
        <div className="footerTop">
          <div className="footerTop__left">
            <div className="footerTop__left__box">
              <h2>ABOUT US</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
                veritatis aliquam.
              </p>
            </div>
            <div className="footerTop__left__box">
              <h2>QUICK LINKS</h2>
              <div className="footerTop__left__box_a">
                <a href="/">About Us</a>
                <a href="/">Services</a>
                <a href="/">Testimonials</a>
                <a href="/">Testimonials</a>
              </div>
            </div>
            <div className="footerTop__left__box">
              <h2>FOLLOW US</h2>
              <div className="footerTop__left__box_icons">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
          <div className="footerTop__right">
            <h2>FEATURED PRODUCT</h2>
            <img
              src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg.webp"
              width={"255px"}
              height={"255px"}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
      </div>
    </div>
  );
};

export default Footer;
