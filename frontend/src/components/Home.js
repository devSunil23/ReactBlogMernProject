import React from "react";
import { NavLink } from "react-router-dom";
import Latest from "./latest/Latest";
import Latestarticle from "./latest/Latestarticle";
import Lateststories from "./latest/Lateststories";
import natural1Img from "../components/assets/natural1.jpg";
import natural2Img from "../components/assets/natural2.jpg";
import natural3Img from "../components/assets/natural3.jpg";
const Home = ({ showItems }) => {
  let gridFirstHeading = "Title of vertical gallery";
  let gridFirstPara = "Travel/21 agust 2022";
  return (
    <>
      <div className="home">
        <div className="grid1 grid">
          <div className="homeTitle">
            <NavLink to="/post" className="headingPara">
              <h3 className="titleHead" onClick={() => showItems(natural1Img)}>
                {gridFirstHeading}
              </h3>
              <p className="titlePara" onClick={() => showItems(natural1Img)}>
                {gridFirstPara}
              </p>
            </NavLink>
          </div>
        </div>
        <div className="grid2 grid">
          <div className="homeTitleRight">
            <NavLink to="/post" className="headingPara">
              <h3
                className="titleHeadRight"
                onClick={() => showItems(natural2Img)}
              >
                The sound cloud you loved is domed
              </h3>
              <p
                className="titleParaRight"
                onClick={() => showItems(natural2Img)}
              >
                Travel/21 agust 2022
              </p>
            </NavLink>
          </div>
        </div>
        <div className="grid3 grid">
          <div className="homeTitleRight">
            <NavLink to="/post" className="headingPara">
              <h3
                className="titleHeadRight"
                onClick={() => showItems(natural3Img)}
              >
                The sound cloud you loved is domed
              </h3>
              <p
                className="titleParaRight"
                onClick={() => showItems(natural3Img)}
              >
                Travel/21 agust 2022
              </p>
            </NavLink>
          </div>
        </div>
      </div>
      <Latest></Latest>
      <Latestarticle></Latestarticle>
      <Lateststories></Lateststories>
    </>
  );
};

export default Home;
