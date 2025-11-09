// Home.jsx
function Home() {
    return (
        <div style={{
            padding: '60px 20px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1 style={{
                fontSize: '3.5rem',
                marginBottom: '20px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
                Welcome to TechInnovate
            </h1>
            <p style={{
                fontSize: '1.5rem',
                maxWidth: '600px',
                marginBottom: '30px',
                lineHeight: '1.6'
            }}>
                We are dedicated to delivering excellence in digital transformation, innovative solutions, and cutting-edge technology services.
            </p>
            <div style={{
                display: 'flex',
                gap: '20px',
                marginTop: '30px'
            }}>
                <button style={{
                    padding: '15px 30px',
                    fontSize: '1.1rem',
                    backgroundColor: '#ff6b6b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}>
                    Get Started
                </button>
                <button style={{
                    padding: '15px 30px',
                    fontSize: '1.1rem',
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '2px solid white',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}>
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default Home;