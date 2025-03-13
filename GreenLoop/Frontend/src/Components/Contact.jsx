import { Link, NavLink } from "react-router-dom";
import '../Style/Contact.css';
import Logo_Vit from '../assets/Logo_Vit.svg';
import contact from '../assets/contact.jpg';

function Contact() {
  return (
    <>
      <header>
        <img src={Logo_Vit} alt="Logotyp" className="logo" />
        <div className="menu">
          <NavLink to="/"><h1>Hem</h1></NavLink>
          <NavLink to="/OmOss"><h1>Om Oss</h1></NavLink>
          <NavLink to="/Contact"><h1>Kontakt</h1></NavLink>
          <NavLink to="/Produkter"><h1>Produkter</h1></NavLink>
          <NavLink to="/profile"><h1>Profil</h1></NavLink>
          <NavLink to="/channels"><h1>Meddelanden</h1></NavLink>
        </div>
      </header>

      <div className="contact-container">
        <div className="contact-content">
          <div className="text-section">
            <h1 className="contact-title">Kontakta oss om GreenLoop</h1>
            <p className="contact-description">
              Vi vill gärna visa dig hur du kan få mer trafik, leads, öka din försäljningsproduktivitet, ge bättre kundservice eller allt ovanstående! Här är några sätt att komma i kontakt med vårt säljteam.
            </p>
            <div className="contact-options">
              <div className="contact-option">
                <span role="img" aria-label="phone">📞</span>
                <h3>Ring oss direkt</h3>
                <p>+46 76 327 46 94</p>
              </div>
              <div className="contact-option">
                <span role="img" aria-label="chat">💬</span>
                <h3>Chatta med vårt säljteam</h3>
                <p>info@greenloop.se</p>
              </div>
              <div className="contact-option">
                <span role="img" aria-label="calendar">📅</span>
                <h3>Boka en produktdemonstration</h3>
                <p>Via mail/ nummer</p>
                {/* <button className="demo-btn">Boka en Demo</button> */}
              </div>
            </div>
          </div>
          <div className="image-section">
            <img src={contact} alt="Telefon" className="contact-img" /> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
