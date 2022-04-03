import React, { useContext } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Profile from "./Profile";
import { PostImage } from "./Postpage";
const Postsecond = () => {
  const imgPost = useContext(PostImage);
  return (
    <>
      <div className="postSecond">
        <div className="postLeft post">
          <div className="leftPost">
            <div className="leftPostFirst">
              <img src="./images/hand.svg" alt="hand" className="hand" />
              <span className="countNumber">9.3k</span>
            </div>
            <div className="leftPostSecond">
              <img
                src="./images/share1.svg"
                alt="share"
                className="shareImage"
              />
              <div className="share">Share this article</div>
            </div>
          </div>
        </div>
        <div className="postMid post">
          <h2 className="headingPost">5 Ways to animate a React app.</h2>
          <div className="postProfile">
            <Profile
              profileName="Dmitry Nozhenko"
              profileDateTime="Jan 28, 2019 · 10 min read"
            ></Profile>
            <div className="postProfileRight">
              <FaFacebookF className="socialIcon" />
              <FaTwitter className="socialIcon" />
              <FaInstagram className="socialIcon" />
              <FaYoutube className="socialIcon" />
            </div>
          </div>
          <img
            // src="./images/reactss.png"
            src={imgPost}
            alt="reactss"
            className="reactScreenShot"
          />
          <p className="reactScreenPara">
            <p className="reactScreenParaBig">
              Animation in ReactJs app is a popular topic and there are many
              ways to create different types of animations.Many developers
              create animation exclusively using css and adding classes to HTML
              tags. This is a great way and you should use it. If you want to
              create complex animations you can pay attention to GreenSock.
              GreenSock is the most powerful animation platform. There are also
              a lot of libraries, components for creating animation in React.
            </p>
            <p className="reactScreenParaSmall"> Let’s talk about them</p>
          </p>
          <img src="./images/codess.png" alt="code" className="codess" />
          <div className="languageName">
            <span className="languageItem">React</span>
            <span className="languageItem">Javascript</span>
            <span className="languageItem">Animation</span>
          </div>
          <div className="imgClap">
            <img src="./images/hand.svg" alt="hand" className="imgClapHands" />
            <p className="clapCounts">
              9.3K <span>claps</span>
            </p>
          </div>
          <div className="imageProfileBottom">
            <img
              src="./images/profile.png"
              alt="profile"
              className="bigProfileImg"
            />
            <div className="profileDetailsBottom">
              <p className="written">Written By</p>
              <p className="writerName">Dmitry Nozhenko</p>
              <p className="readTime">Jan 28, 2019 · 10 min read</p>
            </div>
          </div>
        </div>
        <div className="postRight post"></div>
      </div>
    </>
  );
};

export default Postsecond;
