import React from "react";
import Profile from "./navigation/Profile";
import Message from "./navigation/Message";
import News from "./navigation/News";
import Music from "./navigation/Music";
import Setting from "./navigation/Setting";

const Navigation = () =>{
    return (
        <nav className = "nav">
          <Profile/>
          <Message/>
          <News/>
          <Music/>
          <Setting/>
      </nav>
    );
}

export default Navigation;