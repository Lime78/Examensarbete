import '../Style/Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <NavLink to="/" className="text-white text-lg">Home</NavLink>
          <NavLink to="/OmOss" className="text-white text-lg">Om Oss</NavLink>
          <NavLink to="/Contact" className="text-white text-lg">Kontakt</NavLink>
          <NavLink to="/Produkter" className="text-white text-lg">Produkter</NavLink>
          <NavLink to="/profile" className="text-white text-lg">Profile</NavLink>
          <NavLink to="/channels" className="text-white text-lg">Meddelanden</NavLink>
          <NavLink to="/Login">Logga in</NavLink>
        </div>        
        <p>&copy; {new Date().getFullYear()} GreenLoop. All rights reserved.</p>

      </div>
    </footer>
  );
}

export default Footer;