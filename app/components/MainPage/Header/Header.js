import React from "react";
import './header.css'

const Header = () => {
  return (
    <div className="video">
      <video className="video_media" src="/main-video-back.mp4" autoPlay muted loop></video>
    </div>
  );
};

export default Header;
