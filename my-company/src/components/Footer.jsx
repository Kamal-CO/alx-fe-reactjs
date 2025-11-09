// Footer.jsx
function Footer() {
    return (
        <footer style={{
            backgroundColor: '#34495e',
            color: 'white',
            padding: '40px 20px',
            marginTop: 'auto'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '40px'
            }}>
                {/* Company Info */}
                <div>
                    <h3 style={{ color: '#3498db', marginBottom: '20px' }}>TechInnovate</h3>
                    <p style={{ lineHeight: '1.6', opacity: 0.8 }}>
                        Leading the way in digital transformation and innovative technology solutions since 1990.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 style={{ marginBottom: '20px' }}>Quick Links</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {['Home', 'About', 'Services', 'Contact'].map((link) => (
                            <a 
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                style={{ 
                                    color: 'white', 
                                    textDecoration: 'none', 
                                    opacity: 0.8,
                                    transition: 'opacity 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.opacity = '1'}
                                onMouseLeave={(e) => e.target.style.opacity = '0.8'}
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 style={{ marginBottom: '20px' }}>Contact Info</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', opacity: 0.8 }}>
                        <p>📧 info@techinnovate.com</p>
                        <p>📞 +1 (555) 123-4567</p>
                        <p>📍 123 Tech Street, Innovation City</p>
                    </div>
                </div>

                {/* Social Media */}
                <div>
                    <h4 style={{ marginBottom: '20px' }}>Follow Us</h4>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                            <div 
                                key={social}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(52, 152, 219, 0.3)'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                            >
                                {social === 'Facebook' && '📘'}
                                {social === 'Twitter' && '🐦'}
                                {social === 'LinkedIn' && '💼'}
                                {social === 'Instagram' && '📷'}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div style={{
                borderTop: '1px solid rgba(255,255,255,0.2)',
                marginTop: '40px',
                paddingTop: '20px',
                textAlign: 'center',
                opacity: 0.6
            }}>
                <p>&copy; 2024 TechInnovate. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;