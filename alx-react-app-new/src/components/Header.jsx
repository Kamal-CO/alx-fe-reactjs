// Header Component
function Header() {
    return (
        <header style={{
            backgroundColor: '#2c3e50',
            color: '#ecf0f1',
            textAlign: 'center',
            padding: '25px 0',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            borderBottom: '4px solid #3498db',
            background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 20%, rgba(52, 152, 219, 0.3) 0%, transparent 50%)',
                zIndex: 0
            }}></div>
            
            <h1 style={{
                margin: 0,
                fontSize: '2.8rem',
                fontWeight: '800',
                textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                letterSpacing: '1px',
                position: 'relative',
                zIndex: 1,
                background: 'linear-gradient(45deg, #ecf0f1, #bdc3c7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
                My Favorite Cities
            </h1>
            
            <p style={{
                margin: '15px 0 0 0',
                fontSize: '1.3rem',
                opacity: 0.9,
                fontWeight: '300',
                position: 'relative',
                zIndex: 1,
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}>
                Discover amazing places around the world
            </p>
            
            <div style={{
                height: '4px',
                background: 'linear-gradient(90deg, #e74c3c, #3498db, #2ecc71)',
                marginTop: '20px',
                borderRadius: '2px'
            }}></div>
        </header>
    );
}

export default Header;