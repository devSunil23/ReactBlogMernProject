import React, { createContext } from "react";
import PostHeading from "./PostHeading";
import Postsecond from "./Postsecond";
import PostThird from "./PostThird";
import postImg from "../assets/reactss.png";
export const PostImage = createContext();
const Postpage = ({ imagePost }) => {
  return (
    <>
      <div className="postPage">
        <PostHeading></PostHeading>
        <PostImage.Provider value={imagePost}>
          <Postsecond></Postsecond>
        </PostImage.Provider>
        <PostThird></PostThird>
      </div>
    </>
  );
};

export default Postpage;
