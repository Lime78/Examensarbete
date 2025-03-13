import React from "react";
import Footer from "./Footer.jsx";
import { NavLink } from "react-router-dom";
import '../Style/aboutUs.css';
import Logo_Vit from '../assets/Logo_Vit.svg';
import aboutus from '../assets/aboutus.jpg'; 

const AboutUs = () => {
  return (
    <>
      <header>
        <img src={Logo_Vit} alt="Logo" className="logo" />
        <div className="menu">
          <NavLink to="/"><h1>Home</h1></NavLink>
          <NavLink to="/OmOss"><h1>Om Oss</h1></NavLink>
          <NavLink to="/Contact"><h1>Kontakt</h1></NavLink>
          <NavLink to="/Produkter"><h1>Produkter</h1></NavLink>
          <NavLink to="/profile"><h1>Profile</h1></NavLink>
          <NavLink to="/channels"><h1>Meddelanden</h1></NavLink>
        </div>
      </header>

      <div className="about-us-container">
        {/* Main About Us Section */}
        <div className="about-us-content">
          <div className="text-section">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
            GreenLoop är en webbshop skapad för att ge nytt liv åt möbler, elektronik, kläder och andra produkter genom återanvändning. Jag heter Liam och är frontend-utvecklare, och jag startade GreenLoop med visionen om en mer hållbar framtid. Genom att främja resursdelning och cirkulär konsumtion vill vi minska onödigt avfall och inspirera fler att göra miljövänliga val. Vårt mål är att göra det enkelt och tillgängligt för alla att hitta och ge vidare kvalitetsprodukter, samtidigt som vi tillsammans bidrar till en mer hållbar värld.            {/* <button className="learn-more-btn">Learn More</button> */}
            </p>
          </div>
          <div className="image-section">
            <img src={aboutus} alt="Team" className="team-img" />
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="additional-section mission-section">
          <h2 className="section-title">Vårt uppdrag</h2>
          <p className="section-description">
          På GreenLoop är vårt uppdrag att främja en cirkulär ekonomi genom att göra det möjligt för samhällen att dela och återanvända resurser effektivt. Vi strävar efter att minska svinnet, minimera onödiga inköp och skapa en plattform där möbler, elektronik och annat kan hitta nya hem inom kommunerna, vilket sparar både pengar och miljö.          </p>
        </div>

        {/* Our Impact Section */}
        <div className="additional-section impact-section">
          <h2 className="section-title">Vår påverkan</h2>
          <p className="section-description">
          Sedan GreenLoop lanserades har vi hjälpt över 50 kommuner att omfördela tusentals varor, vilket minskat CO2-utsläppen med uppskattningsvis 200 ton årligen. Genom att koppla samman avdelningar och individer har vi sparat samhällen miljoner i kostnader samtidigt som vi främjar hållbara metoder och bygger starkare, mer samarbetande lokala nätverk.          </p>
        </div>
      </div>

    </>
  );
};

export default AboutUs;