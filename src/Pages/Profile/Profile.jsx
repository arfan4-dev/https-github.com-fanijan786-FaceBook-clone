import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import "./Profile.scss";
import Feed from "./../../component/feed/Feed";
import Rightbar from "./../../component/rightBar/RightBar";
import profile from '../../assets/profile.jpg'

const Profile = () => {
  return (
    <div className="profile">
      <Navbar />
      <div className="profileWrapper">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="https://media.licdn.com/dms/image/D4D16AQECd6MpCZF3hQ/profile-displaybackgroundimage-shrink_350_1400/0/1674390789581?e=1700092800&v=beta&t=fQiDalFQgAxmBlkXdDeHy2p2iG35iLqKg7sALHnhzzo"
                alt=""
                className="profileCoverImg"
              /> 
              <img
                src={profile}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">F A A N</h4>
              <span className="profileInfoDesc">Hi Friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;