import React from "react";
import Footer from "./Footer.jsx";
import { Link, NavLink, Outlet } from "react-router-dom";
import Card from "../Style/style.tsx";
import '../Style/aboutUs.css';
import image_5 from '../assets/image_5.png';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

        <Card className="card">
          <p className="text-lg leading-relaxed mb-8">
            This is a webshop to reuse furniture, electronics, clothes, and so on. My name is Liam, and I am a front-end developer. Together with my friend Philip, a software engineer, we have created GreenLoop.
          </p>

          <div className="profile-container">
            {/* Liam Profile */}
            <div className="profile">
              <div className="profile-img-container">
                <img src={image_5} alt="Liam" className="profile-img" />
              </div>
              <h3 className="text-xl font-semibold">Liam</h3>
              <p className="text-white/80">Frontend Developer</p>
            </div>

            {/* Philip Profile */}
            <div className="profile">
              <div className="profile-img-container">
              <img src={image_5} alt="Liam" className="profile-img" />
              </div>
              <h3 className="text-xl font-semibold">Philip</h3>
              <p className="text-white/80">Software Engineer</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;