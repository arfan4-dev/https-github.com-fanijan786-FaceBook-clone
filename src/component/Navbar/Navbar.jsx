import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import profile from '../../assets/profile.jpg'
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
      <Link to="/" style={{ textDecoration: "none" }}> 
          <span className="logo">FakeBook</span>
        </Link>
      </div>
      <div className="navbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friends post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
        <Link to="/" style={{ textDecoration: "none" , color:'white'}}> 
        <span className="navbarLink">Homepage</span>
        </Link> <span className="navbarLink">Timeline</span>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <PersonIcon />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <ChatBubbleIcon />
            <span className="navbarIconBadge">10</span>
          </div>
          <div className="navbarIconItem">
            <NotificationsIcon />
            <span className="navbarIconBadge">8</span>
          </div>
        </div>
        <Link to="/profile/userId">
          <img src={profile} alt="" className="navbarImg" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;