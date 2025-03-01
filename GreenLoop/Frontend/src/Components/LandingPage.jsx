import { useState } from 'react';
import { Link, NavLink, Outlet } from "react-router-dom"
import '../Style/LandingPage.css';
import Footer from './Footer.jsx'; 
import Contact from './Contact.jsx';

import Logo_Svart from '../assets/Logo_Svart.svg';
import Logo_Vit from '../assets/Logo_Vit.svg';
import LandingImg from '../assets/LandingImg.png';

function Landing() {
  return (
    <>
      <header>
        <img src={Logo_Vit} alt="Logo" />
        <div className="menu">
          <NavLink to="/"><h1>Home</h1></NavLink>
          <NavLink to="/OmOss"><h1>Om Oss</h1></NavLink>
          <NavLink to="/Contact"><h1>Kontakt</h1></NavLink>
          <NavLink to="/Produkter"><h1>Produkter</h1></NavLink>
        </div>
      </header>

      <div className="Image">
        <img src={LandingImg} alt="LandingImg" />
      </div>

      <div className="Text">
        <p>
          Hos GreenLoop värnar vi om både miljön och effektiv resursanvändning. Har ni överbliven elektronik, möbler eller andra
          föremål som inte längre används? Eller saknar ni något som en annan avdelning i er kommun kan ha till övers? 
          Genom vår plattform kan ni enkelt omfördela resurser, minska onödiga inköp och bidra till en mer hållbar framtid – samtidigt 
          som ni sparar pengar. Tillsammans skapar vi en smartare och mer miljövänlig kommun!
        </p>
      </div>

      <div className="Categories">
        <p>Kategorier</p>
      </div>
      <div className="Category">
        <button>Priser</button>
        <button>Utbud</button>
        <button>Miljö</button>
        
        
      </div>
      
    </>
  );
}

export default Landing;