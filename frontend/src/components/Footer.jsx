import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'black', color: 'white', padding: '32px 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', textAlign: 'left', fontSize: '14px', color: '#9CA3AF' }}>
                <div>
                    <h3 style={{ fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>Abstract</h3>
                    <p>Branches</p>
                </div>
                <div>
                    <h3 style={{ fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>Resources</h3>
                    <p>Blog</p>
                    <p>Help Center</p>
                    <p>Release Notes</p>
                    <p>Status</p>
                </div>
                <div>
                    <h3 style={{ fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>Community</h3>
                    <p>Twitter</p>
                    <p>LinkedIn</p>
                    <p>Facebook</p>
                    <p>Dribbble</p>
                    <p>Podcast</p>
                </div>
                <div>
                    <h3 style={{ fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>Company</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Legal</p>
                    <p>Contact Us</p>
                    <p>info@abstract.com</p>
                </div>
            </div>
            <div style={{ textAlign: 'center', color: '#6B7280', marginTop: '16px' }}>
                © Copyright 2022 Abstract Studio Design, Inc. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
