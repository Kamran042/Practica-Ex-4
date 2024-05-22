import React from "react";
import "./Girls.scss"

const Girls = () => {
  return (
    <div className="girls_box">
        <div className="girls_box__BG"></div>
      <div className="girls_box__title">
        <h1>Shop With Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda ea quo cupiditate facere deleniti fuga officia.
        </p>
        <div className="girls_box__title__btns">
            <button className="girls_box__title__btns_shop"> SHOP NOW</button>
            <button className="girls_box__title__btns_club">CLUB MEMBERSHIP</button>
        </div>
      </div>
    </div>
  );
};

export default Girls;
