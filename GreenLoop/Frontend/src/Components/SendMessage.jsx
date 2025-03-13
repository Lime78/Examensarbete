import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../Data/Firebase.js';
import '../Style/SendMessages.css';

const SendMessage = ({ recipientId, recipientName, onClose }) => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSendMessage = async () => {
        if (!message.trim()) {
            setError("Meddelandet kan inte vara tomt.");
            return;
        }

        try {
            const senderId = auth.currentUser?.uid; // Get the sender's UID
            await addDoc(collection(db, 'messages'), {
                recipientId,
                recipientName,
                senderId, // Add sender's ID
                message,
                sentAt: new Date().toISOString()
            });
            setMessage("");
            onClose();
        } catch (err) {
            setError("Kunde inte skicka meddelandet: " + err.message);
        }
    };

    return (
        <div className="send-message-overlay">
            <div className="send-message-popup">
                <h2>Skicka meddelande till {recipientName}</h2>
                {error && <p className="error">{error}</p>}
                <textarea
                    placeholder="Skriv ditt meddelande här..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                />
                <div className="button-group">
                    <button onClick={handleSendMessage}>Skicka</button>
                    <button onClick={onClose}>Avbryt</button>
                </div>
            </div>
        </div>
    );
};

export default SendMessage;