import React from "react";
import { NavLink } from "react-router-dom";

const Storiescard = ({ title, para, paraFirst, paraSecond }) => {
  return (
    <>
      <div className="storiesCard">
        <NavLink to="/Post" style={{ textDecoration: "none" }}>
          <h2 className="storiesCardTitle">{title}</h2>
          <p className="storiesCardPara">{para}</p>
          <p className="bottomPara">
            {paraFirst} <span>{paraSecond}</span>
          </p>
        </NavLink>
      </div>
    </>
  );
};

export default Storiescard;
