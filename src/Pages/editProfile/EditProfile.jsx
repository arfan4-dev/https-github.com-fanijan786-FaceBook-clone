import { DriveFolderUploadOutlined } from "@mui/icons-material";
import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import "./editProfile.scss";
import profile from '../../assets/profile.jpg'

 
const EditProfile = () => {
  return (
    <div className="editProfile">
      <Navbar />
      <div className="editProfileWrapper">
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
          <div className="editprofileRightBottom">
            <div className="top">
              <h1>Edit User Profile</h1>
            </div>
            <div className="bottom">
              <div className="left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCKq1XnPYYDaUIlwlsvmLPZ-9-rdK28RToA&usqp=CAU" alt="" />
              </div>
              <div className="right">
                <form>
                  <div className="formInput">
                    <label htmlFor="file">
                      Image: <DriveFolderUploadOutlined className="icon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <div className="formInput">
                    <label>Name</label>
                    <input type="text" placeholder="Jane Doe" />
                  </div>
                  <div className="formInput">
                    <label>Username</label>
                    <input type="text" placeholder="jane_doe" />
                  </div>
                  <div className="formInput">
                    <label>Email</label>
                    <input type="email" placeholder="jane_doe@gmail.com" />
                  </div>
                  <div className="formInput">
                    <label>Phone</label>
                    <input type="text" placeholder="+92 3493557352" />
                  </div>
                  <div className="formInput">
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="Melwood str. 71 Liverpool"
                    />
                  </div>
                  <div className="formInput">
                    <label>Country</label>
                    <input type="text" placeholder="United Kingdom" />
                  </div>
                  <button type="submit" className="updateButton">
                    Update Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;