import '../Style/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} GreenLoop. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Om Oss</a>
          <a href="#">Kontakt</a>
          <a href="#">Integritetspolicy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
