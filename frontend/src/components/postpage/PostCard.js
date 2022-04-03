import React from "react";
import Profile from "./Profile";

const PostCard = ({ paraTop, imgUrl, heading, name, readTime }) => {
  return (
    <>
      <div className="postCard">
        <p className="postCardTop">{paraTop}</p>
        <img src={imgUrl} alt="backGround" className="postCardImg" />
        <h2 className="postHeaddingBottom">{heading}</h2>
        <Profile profileName={name} profileDateTime={readTime}></Profile>
      </div>
    </>
  );
};

export default PostCard;
