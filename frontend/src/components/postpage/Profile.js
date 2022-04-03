import React from "react";

const Profile = ({ profileName, profileDateTime }) => {
  return (
    <>
      <div className="postProfileleft">
        <img
          src="./images/profile.png"
          alt="profile"
          className="profileImage"
        />
        <div className="profileDetails">
          <p className="profileName">{profileName}</p>
          <p className="profileDateTime">{profileDateTime}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
