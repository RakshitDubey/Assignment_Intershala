import React, { useState, useEffect } from 'react';

const CardList = ({ searchTerm }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                let url = 'http://localhost:5000/cards';
                if (searchTerm) {
                    url = `http://localhost:5000/cards/${searchTerm}`;
                }
                const response = await fetch(url);
                const data = await response.json();
                setCards(Array.isArray(data) ? data : [data]);
            } catch (error) {
                console.error('Error fetching cards:', error);
            }
        };

        fetchCards();
    }, [searchTerm]);

    const containerStyle = {
        display: 'flex',
        margin:"20px",
        flexWrap: 'wrap', // Allow cards to wrap to the next line if there's not enough space
        gap: '20px', // Add space between cards
        justifyContent: 'center' // Center the cards horizontally
    };

    const cardStyle = {
        padding: '12px',
        border: '1px solid #D1D5DB',
        borderRadius: '4px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
        maxWidth: '300px',
        width: '100%',
        boxSizing: 'border-box'
    };

    const titleStyle = {
        fontSize: '18px',
        fontWeight: '500',
        marginBottom: '6px'
    };

    const hrStyle = {
        margin: '6px 0',
        border: '0',
        borderTop: '1px solid #D1D5DB'
    };

    const descriptionStyle = {
        color: '#4B5563',
        fontSize: '14px'
    };

    return (
        <div style={containerStyle}>
            {cards.map((card) => (
                <div key={card.id} style={cardStyle}>
                    <h3 style={titleStyle}>{card.title}</h3>
                    <hr style={hrStyle} />
                    <p style={descriptionStyle}>{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CardList;
