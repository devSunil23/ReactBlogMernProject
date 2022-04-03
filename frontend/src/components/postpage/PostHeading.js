import React from "react";
import SirenHeading from "../SirenHeading";

const PostHeading = () => {
  return (
    <>
      <div className="postContainer">
        <div className="postTop">
          <div className="postHeading">
            <SirenHeading
              verticleThe="verticleThePost"
              siren="sirenPost"
            ></SirenHeading>
          </div>
          <p className="getStarted">Get Started</p>
        </div>
      </div>
    </>
  );
};

export default PostHeading;
