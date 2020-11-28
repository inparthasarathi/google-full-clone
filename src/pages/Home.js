import React from "react";
import "./css/home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../Components/Search";

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home_headerRight">
          <Link to="/images">Images</Link>
          <Link to="/gmail">Gmail</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home_body">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          alt="Google logo"
        />
        <div className="home_inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
