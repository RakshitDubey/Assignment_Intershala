import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };
    const containerStyle = {
        textAlign: 'center',
        padding: '4rem 0',
        backgroundColor:"skyblue" // gray-100
    };

    const headingStyle = {
        fontSize: '1.875rem', // text-3xl
        fontWeight: 'bold',
        marginBottom: '1rem' // mb-4
    };

    const flexContainerStyle = {
        display: 'flex',
        justifyContent: 'center'
    };

    const inputStyle = {
        border: '1px solid #d1d5db', // border-gray-300
        borderRadius: '0.5rem 0 0 0.5rem', // rounded-l-lg
        padding: '0.5rem',
        width: '33.3333%' // w-1/3
    };

    const buttonStyle = {
        backgroundColor: '#e5e7eb', // bg-gray-300
        padding: '0.5rem',
        borderRadius: '0 0.5rem 0.5rem 0' // rounded-r-lg
    };

    return (
        <div style={containerStyle}>
        <h1 style={headingStyle}>How can we help?</h1>
        <div style={flexContainerStyle}>
            <input
                type="text"
                style={inputStyle}
                placeholder="Search"
                value={searchTerm}
                onChange={handleInputChange}
                
            />
               <button style={buttonStyle} onClick={handleSearch}>→</button>
         
        </div>
    </div>
    );
};

export default SearchBar;