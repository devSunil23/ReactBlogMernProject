import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const LatestGridCard = (props) => {
  const [latestData, setlatestData] = useState();
  return (
    <>
      <div className="latestGridCard">
        <img src={props.imgSrc} alt="card1" className="cardImage" />
        <NavLink to="/Post" style={{ textDecoration: "none" }}>
          <div className="cardTitle">
            <div className="cardHeadTitle">
              <h1 className="cardHeadInner">{props.headingFirst} </h1>
              <h1 className="cardHeadInner">{props.headingSecond}</h1>
            </div>
            <p className="cardPara">{props.latestPara}</p>
            <p className="paraBottom">
              {props.bottomParaLeft} <span>{props.bottomParaRight}</span>
            </p>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default LatestGridCard;
