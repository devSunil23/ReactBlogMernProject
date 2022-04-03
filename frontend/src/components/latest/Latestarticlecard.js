import React from "react";
import { NavLink } from "react-router-dom";

const Latestarticlecard = ({
  imgCard,
  headingTitle,
  articlePara,
  paraBottomFirst,
  paraBottomSecond,
}) => {
  return (
    <>
      <div className="articleCard">
        <div className="imgCard">
          <img src={imgCard} alt="bg" className="cardImaeField" />
        </div>
        <div className="articleCardRight">
          <NavLink to="/Post" style={{ textDecoration: "none" }}>
            <h2 className="articleRightHeading">{headingTitle}</h2>
            <p className="articlePara">{articlePara}</p>
            <p className="arcticleBottomPara">
              {paraBottomFirst} <span>{paraBottomSecond}</span>
            </p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Latestarticlecard;
