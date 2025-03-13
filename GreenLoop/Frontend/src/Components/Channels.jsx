import { useState, useEffect } from 'react';
import { useStore } from '../Data/store.js';
import { auth } from '../Data/Firebase.js';
import '../Style/Channels.css'; 
import Logo_Vit from '../assets/Logo_Vit.svg';
import { NavLink } from 'react-router-dom';
import SendMessage from './SendMessage.jsx';

const Channels = () => {
    const { messages, fetchMessages } = useStore();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showReplyPopup, setShowReplyPopup] = useState(false); 
    const [replyTo, setReplyTo] = useState({ recipientId: '', recipientName: '' });

    useEffect(() => {
        const loadMessages = async () => {
            const userId = auth.currentUser?.uid;
            if (userId) {
                try {
                    await fetchMessages(userId); // Fetch messages once
                    setLoading(false);
                } catch (err) {
                    setError("Kunde inte hämta meddelanden: " + err.message);
                    setLoading(false);
                }
            } else {
                setError("Du måste vara inloggad för att se meddelanden.");
                setLoading(false);
            }
        };

        loadMessages();

        // No unsubscribe needed if fetchMessages is a one-time fetch
        return () => {
            // Cleanup is empty if no real-time listener is used
        };
    }, [fetchMessages]);

    const userMessages = messages.filter(
        (msg) => msg.recipientId === auth.currentUser?.uid || msg.senderId === auth.currentUser?.uid
    );

    const handleLogout = () => {
        auth.signOut();
    };

    const handleReply = (recipientId, recipientName) => {
        setReplyTo({ recipientId, recipientName });
        setShowReplyPopup(true);
    };

    const handleCloseReply = async () => {
        setShowReplyPopup(false);
        setReplyTo({ recipientId: '', recipientName: '' });
        const userId = auth.currentUser?.uid;
        if (userId) {
            await fetchMessages(userId);
        }
    };

    const groupedMessages = userMessages.reduce((acc, msg) => {
        const otherUserId = msg.senderId === auth.currentUser?.uid ? msg.recipientId : msg.senderId;
        const otherUserName = msg.senderId === auth.currentUser?.uid ? msg.recipientName : msg.recipientName;

        if (!acc[otherUserId]) {
            acc[otherUserId] = { name: otherUserName, messages: [] };
        }
        acc[otherUserId].messages.push(msg);
        return acc;
    }, {});
    
    Object.values(groupedMessages).forEach((group) => {
        group.messages.sort((a, b) => new Date(a.sentAt) - new Date(b.sentAt));
    });

    return (
        <>
            {/* Header Section */}
            <header>
                <img src={Logo_Vit} alt="Logo" className="h-10" />
                <div className="menu">
                <NavLink to="/"><h1>Hem</h1></NavLink>
          <NavLink to="/OmOss"><h1>Om Oss</h1></NavLink>
          <NavLink to="/Contact"><h1>Kontakt</h1></NavLink>
          <NavLink to="/Produkter"><h1>Produkter</h1></NavLink>
          <NavLink to="/profile"><h1>Profil</h1></NavLink>
          <NavLink to="/channels"><h1>Meddelanden</h1></NavLink>
                    <button className="logout" onClick={handleLogout}>Logga ut</button>
                </div>
            </header>

            {/* Channels Section */}
            <div className="channels-container">
                <h2>Dina Meddelanden</h2>
                {loading ? (
                    <p>Laddar meddelanden...</p>
                ) : error ? (
                    <p className="error">{error}</p>
                ) : userMessages.length === 0 ? (
                    <p>Inga meddelanden ännu.</p>
                ) : (
                    <div className="messages-list">
                        {Object.entries(groupedMessages).map(([userId, { name, messages }]) => (
                            <div key={userId} className="conversation">
                                <h3>Konversation med {name}</h3>
                                {messages.map((msg) => (
                                    <div key={msg.id} className="message-card">
                                        <p>
                                            <strong>
                                                {msg.senderId === auth.currentUser?.uid
                                                    ? `Till: ${msg.recipientName}`
                                                    : `Från: ${msg.recipientName}`}
                                            </strong>
                                        </p>
                                        <p>{msg.message}</p>
                                        <span>{new Date(msg.sentAt).toLocaleString()}</span>
                                        <button
                                            onClick={() =>
                                                handleReply(
                                                    msg.senderId === auth.currentUser?.uid
                                                        ? msg.recipientId
                                                        : msg.senderId,
                                                    msg.senderId === auth.currentUser?.uid
                                                        ? msg.recipientName
                                                        : msg.recipientName
                                                )
                                            }
                                            className="reply-button"
                                        >
                                            Svara
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Show the SendMessage popup when replying */}
            {showReplyPopup && (
                <SendMessage
                    recipientId={replyTo.recipientId}
                    recipientName={replyTo.recipientName}
                    onClose={handleCloseReply}
                />
            )}
        </>
    );
};

export default Channels;