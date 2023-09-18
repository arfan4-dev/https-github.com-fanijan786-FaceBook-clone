import React from "react";
import Rightbarhome from "../RightBarHome/RightBarHome";
import "./rightBar.scss";
import ProfileRightBar from "../ProfileRightBar/ProfileRightBar";

const Rightbar = ({ profile }) => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <Rightbarhome /> }
      </div>
    </div>
  );
};

export default Rightbar;