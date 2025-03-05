import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Data/Firebase.js";
import "../style/login.css";
import Footer from './Footer.jsx'; 
import { createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setMessage(`Inloggning lyckades! Välkommen, ${userCredential.user.email}`);
      } catch (error) {
        setMessage(error.message);
      }
    };
  
    const handleRegister = async (e) => {
      e.preventDefault();
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        setMessage(`Registrering lyckades! Välkommen, ${userCredential.user.email}`);
      } catch (error) {
        setMessage(error.message);
      }
    };

    return (
        <div className="login-container">
          <h2>{isRegistering ? "Registrera dig" : "Logga in"}</h2>
          <form onSubmit={isRegistering ? handleRegister : handleLogin}>
            <input
              type="email"
              placeholder="E-post"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Lösenord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">{isRegistering ? "Registrera" : "Logga in"}</button>
          </form>
          <button onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? "Har redan ett konto? Logga in" : "Inget konto? Registrera dig"}
          </button>
          {message && <p className={message.includes("lyckades") ? "success" : "error"}>{message}</p>}
        </div>
      );
      
    }

export default Login;