// Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    return (
        <nav style={{
            backgroundColor: '#2c3e50',
            padding: '0 20px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '1200px',
                margin: '0 auto',
                height: '70px'
            }}>
                {/* Logo */}
                <Link 
                    to="/" 
                    style={{
                        fontSize: '1.8rem',
                        fontWeight: 'bold',
                        color: 'white',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                >
                    <span style={{ 
                        backgroundColor: '#3498db', 
                        padding: '8px 12px', 
                        borderRadius: '8px',
                        fontSize: '1.5rem'
                    }}>
                        ⚡
                    </span>
                    TechInnovate
                </Link>

                {/* Navigation Links */}
                <div style={{
                    display: 'flex',
                    gap: '30px'
                }}>
                    {[
                        { path: '/', label: 'Home' },
                        { path: '/about', label: 'About' },
                        { path: '/services', label: 'Services' },
                        { path: '/contact', label: 'Contact' }
                    ].map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            style={{
                                color: location.pathname === item.path ? '#3498db' : 'white',
                                textDecoration: 'none',
                                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                                padding: '10px 15px',
                                borderRadius: '5px',
                                transition: 'all 0.3s ease',
                                backgroundColor: location.pathname === item.path ? 'rgba(255,255,255,0.1)' : 'transparent'
                            }}
                            onMouseEnter={(e) => {
                                if (location.pathname !== item.path) {
                                    e.target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (location.pathname !== item.path) {
                                    e.target.style.backgroundColor = 'transparent';
                                }
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;