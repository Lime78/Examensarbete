import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../Data/Firebase.js"; // Ensure db is imported
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import "../style/login.css";
import Footer from './Footer.jsx'; 

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState(""); // Add username state
    const [message, setMessage] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate(); // Use the useNavigate hook

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let userEmail = email;
            if (username) {
                const q = query(collection(db, "users"), where("username", "==", username));
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    userEmail = querySnapshot.docs[0].data().email;
                } else {
                    throw new Error("Användarnamn hittades inte");
                }
            }
            const userCredential = await signInWithEmailAndPassword(auth, userEmail, password);
            setMessage(`Inloggning lyckades! Välkommen, ${userCredential.user.email}`);
        } catch (error) {
            setMessage(error.message);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: username }); // Update profile with username
            await addDoc(collection(db, "users"), {
                username: username,
                email: email
            });
            setMessage(`Registrering lyckades! Välkommen, ${userCredential.user.email}`);
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <>            
            <div className="login-container">
                <h2>{isRegistering ? "Registrera dig" : "Logga in"}</h2>
                <form onSubmit={isRegistering ? handleRegister : handleLogin}>
                    {isRegistering && (
                        <>
                            <input
                                type="text"
                                placeholder="Användarnamn"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="input-field"
                            />
                            <input
                                type="email"
                                placeholder="E-post"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="input-field"
                            />
                        </>
                    )}
                    {!isRegistering && (
                        <input
                            type="text"
                            placeholder="E-post eller Användarnamn"
                            value={username || email}
                            onChange={(e) => {
                                setUsername(e.target.value);
                                setEmail(e.target.value);
                            }}
                            required
                            className="input-field"
                        />
                    )}
                    <input
                        type="password"
                        placeholder="Lösenord"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="input-field"
                    />
                    <button type="submit" className="submit-button">
                        {isRegistering ? "Registrera" : "Logga in"}
                    </button>
                </form>
                <button onClick={() => setIsRegistering(!isRegistering)} className="toggle-button">
                    {isRegistering ? "Har redan ett konto? Logga in" : "Inget konto? Registrera dig"}
                </button>
                {message && <p className={message.includes("lyckades") ? "success" : "error"}>{message}</p>}
                <button onClick={() => navigate('/')} className="back-button">Tillbaka till startsidan</button> {/* Back button */}
            </div>
        </>
    );
}

export default Login;