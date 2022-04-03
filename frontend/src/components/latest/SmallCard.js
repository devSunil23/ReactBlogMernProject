import React from "react";
import { NavLink } from "react-router-dom";

const SmallCard = ({ imgUrl, title, paraBottomFirst, paraBottomSecond }) => {
  return (
    <>
      <div className="smallConatiner">
        <img src={imgUrl} alt="small" className="smallImage" />
        <div className="smallRight">
          <NavLink to="/Post" style={{ textDecoration: "none" }}>
            <h2 className="smallHeader">{title}</h2>
            <p className="bottomPara">
              {paraBottomFirst} <span>{paraBottomSecond}</span>
            </p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
