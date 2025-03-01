import Footer from "./Footer";
import { useState } from 'react';
import { Link, NavLink, Outlet } from "react-router-dom"

import '../Style/Contact.css';
import Logo_Vit from '../assets/Logo_Vit.svg';


function Contact() {
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
      <div className="Contact">
        <h1>Kontakt</h1>
        <p>Har du frågor eller funderingar? Kontakta oss gärna via formuläret nedan.</p>
        <form>
          <label htmlFor="name">Namn:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">E-post:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Meddelande:</label>
          <textarea id="message" name="message" required />
          <button className="contactButton"type="submit">Skicka</button>
        </form>
      </div>
    </>
  );
}

export default Contact;