import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/goignis logo.jpg";
import chaticon from "../../assets/images/chat-line-svgrepo-com.svg";
import AnimatedCarousel from "../../components/CustomCarousel";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="custom-nav">
        <div className="custom-nav-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="custom-nav-container">
          <ul className="custom-nav-list">
            <li className="custom-nav-list-item">Home</li>
            <li className="custom-nav-list-item">About</li>
            <li className="custom-nav-list-item">Services</li>
            <li className="custom-nav-list-item">Why Us?</li>
            <li className="custom-nav-list-item">Contact</li>
          </ul>
        </div>
        <div className="chat-container">
          <div className="chat-icon">
            <img src={chaticon} alt="" />
          </div>
          <div className="chat-text">Let's Chat</div>
        </div>
      </div>
      <div className="carousel-container">
        <AnimatedCarousel/>
      </div>
    </div>
  );
};

export default HomePage;