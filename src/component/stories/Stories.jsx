import React, { useContext } from "react";
import Storycard from "../stroryCard/StoryCard";
import { Users } from "../../data";
import "./stories.scss";
import { AuthContext } from "../Context/AuthContext";

const Stories = () => {
  const {currentUser}=useContext(AuthContext)

  return (
    <div className="stories">
      <div className="storyCard">
        <div className="overlay"></div>
        <img src={currentUser.photoURL} alt="" className="storyProfile" />
        <img src={currentUser.photoURL} alt="" className="storybackground" />
        {/* <img src="https://scontent.flyp3-1.fna.fbcdn.net/v/t39.30808-6/349179643_1667085707086961_8000022294229901493_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeGW-thbYxBQkdospljfLMk5C_3Y_V7t3HwL_dj9Xu3cfPnxrHfV7T_EPqljkvJ-I9o33VUtBgnoKOWwu1gTxDbL&_nc_ohc=NqjpJwnDHuIAX8jIJA2&_nc_ht=scontent.flyp3-1.fna&oh=00_AfDr-7tLVMCRy-7DoLUvGOXwK2x2tNAThWJ82XcDlwcmgg&oe=6509406B" alt="" className="storyadd" /> */}
        <span className="text">{currentUser.displayName}</span>
      </div> 

      {Users.map((u) => (
        <Storycard key={u.id} user={u} />
      ))}
    </div>
  );
};

export default Stories;