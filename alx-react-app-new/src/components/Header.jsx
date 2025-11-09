// Header Component
function Header() {
    return (
        <header style={{
            backgroundColor: '#2c3e50',
            color: '#ecf0f1',
            textAlign: 'center',
            padding: '20px 0',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            borderBottom: '3px solid #3498db'
        }}>
            <h1 style={{
                margin: 0,
                fontSize: '2.5rem',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
                My Favorite Cities
            </h1>
            <p style={{
                margin: '10px 0 0 0',
                fontSize: '1.1rem',
                opacity: 0.8
            }}>
                Discover amazing places around the world
            </p>
        </header>
    );
}

export default Header;