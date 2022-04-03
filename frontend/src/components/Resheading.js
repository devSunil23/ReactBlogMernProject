import React from "react";
import SirenHeading from "./SirenHeading";
import { FaBars } from "react-icons/fa";
const Resheading = ({ toggleMenu }) => {
  return (
    <>
      <div className="postContainer responsiveHeading">
        <div className="postTop">
          <div className="postHeading">
            <SirenHeading
              verticleThe="verticleThePost"
              siren="sirenPost"
            ></SirenHeading>
          </div>
          <p>
            <FaBars style={{ fontSize: "25px" }} onClick={toggleMenu}></FaBars>
          </p>
        </div>
      </div>
    </>
  );
};

export default Resheading;
