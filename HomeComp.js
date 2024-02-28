import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import backgroundImage from '../pic1.jpg'; 

export const HomeComp = () => {
    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    };

    const headingStyle = {
        fontFamily: 'Arial, sans-serif',
        color: '#333', 
        backgroundColor: '#f0f0f0', 
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        fontSize: '2.5em',
        textAlign: 'center', 
    
    }

    const descriptionStyle = {
        backgroundColor: "#333",
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.2em',
        color: 'white',
        maxWidth: '600px',
        margin: '20px',
    };

    const featuresStyle = {
        backgroundColor: "#444",
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.2em',
        color: 'white',
        margin: '20px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>WELCOME TO EVENT BOOKING WEB APPLICATION</h1>
            <p style={descriptionStyle}>
                Discover and organize extraordinary events with our platform. Whether you're a music lover,
                comedy enthusiast, or art connoisseur, we have something for everyone.
            </p>
            <div style={featuresStyle}>
                <h2>Key Features:</h2>
                <ul>
                    <li>Organize Music Concerts, Comedy Shows, and Art Exhibitions effortlessly.</li>
                    <li>Seamless ticket booking experience for attendees.</li>
                    <li>Connect with a community of event enthusiasts.</li>
                    
                </ul>
            </div>
            <p style={descriptionStyle}>
                Join us in creating memorable experiences. Let's make your events truly special!
            </p>
        </div>
    );
};