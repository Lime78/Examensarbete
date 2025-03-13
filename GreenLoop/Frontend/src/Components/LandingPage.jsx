// Landing.jsx (Updated Component)
import { Link, NavLink, Outlet } from "react-router-dom";
import '../Style/LandingPage.css';
import Footer from './Footer.jsx'; 
import Contact from './Contact.jsx';

import Logo_Svart from '../assets/Logo_Svart.svg';
import Logo_Vit from '../assets/Logo_Vit.svg';
import LandingImg from '../assets/LandingImg.png';
import InventoryIcon from '../assets/InventoryIcon.svg';
import book from '../assets/book.svg';
import chair from '../assets/chair.svg';

function Landing() {
  return (
    <>
      <header>
        <img src={Logo_Vit} alt="Logo" className="logo" />
        <nav className="menu">
        <NavLink to="/"><h1>Hem</h1></NavLink>
          <NavLink to="/OmOss"><h1>Om Oss</h1></NavLink>
          <NavLink to="/Contact"><h1>Kontakt</h1></NavLink>
          <NavLink to="/Produkter"><h1>Produkter</h1></NavLink>
          <NavLink to="/profile"><h1>Profil</h1></NavLink>
          <NavLink to="/channels"><h1>Meddelanden</h1></NavLink>
        </nav>
      </header>

      <div className="LandingImage">
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

      <div className="features">
        <div className="feature-item">
          <img src={InventoryIcon} alt="Inventory Icon" className="feature-icon" />
          <h3>Inventering</h3>
          <p>Med vår webbapp och en mobiltelefon kan ni snabbt, enkelt och strukturerat inventera möbler och inventarier.</p>
        </div>
        <div className="feature-item">
          <img src={book} alt="Furniture Library Icon" className="feature-icon" />
          <h3>Möbelbibliotek</h3>
          <p>Möbelbibliotek inventerar ditt möbelbestånd och ger ansvariga en helt ny överblick.</p>
        </div>
        <div className="feature-item">
          <img src={chair} alt="Booking Icon" className="feature-icon" />
          <h3>Boka möbler</h3>
          <p>Gör möbler bokningsbara för alla i organisationen. Håll koll på flödet från reservation till leverans.</p>
        </div>
      </div>
    </>
  );
}

export default Landing;