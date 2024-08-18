import React from 'react';

const Navbar = () => {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'black', color: 'white', padding: '16px', borderRadius:"10px 5px 2px 2px " }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.125rem',fontFamily:"monospace" }}>Abstract</span>
                <span style={{ marginLeft: '8px' }}>| Help Center</span>
            </div>
            <button style={{ backgroundColor:' #222' , padding: '8px 16px', borderRadius: '4px', color: 'white', border: '2px solid #444',fontSize:"18px" }}>
                Submit a request
            </button>
        </header>
    );
}

export default Navbar;
