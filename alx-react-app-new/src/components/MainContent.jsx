// MainContent Component
function MainContent() {
    return (
        <main style={{
            padding: '40px 20px',
            backgroundColor: '#ecf0f1',
            minHeight: '500px',
            background: 'linear-gradient(135deg, #ecf0f1 0%, #bdc3c7 100%)',
            position: 'relative'
        }}>
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '20px',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.5)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(231, 76, 60, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%'
                }}></div>
                
                <h2 style={{
                    color: '#2c3e50',
                    textAlign: 'center',
                    fontSize: '2.5rem',
                    marginBottom: '30px',
                    borderBottom: '4px solid #e74c3c',
                    paddingBottom: '15px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                    position: 'relative'
                }}>
                    My Favorite Cities
                    <div style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '100px',
                        height: '4px',
                        background: 'linear-gradient(90deg, transparent, #3498db, transparent)'
                    }}></div>
                </h2>
                
                <p style={{
                    fontSize: '1.3rem',
                    lineHeight: '1.7',
                    color: '#34495e',
                    textAlign: 'center',
                    marginBottom: '30px',
                    fontWeight: '500',
                    padding: '0 20px'
                }}>
                    I love to visit New York, Paris, and Tokyo.
                </p>
                
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '40px',
                    flexWrap: 'wrap',
                    gap: '20px'
                }}>
                    {[
                        { name: 'New York', nickname: 'The Big Apple', color: '#e74c3c', icon: '🏙️' },
                        { name: 'Paris', nickname: 'City of Light', color: '#3498db', icon: '🗼' },
                        { name: 'Tokyo', nickname: 'Capital of Japan', color: '#2ecc71', icon: '🗾' }
                    ].map((city, index) => (
                        <div key={index} style={{
                            textAlign: 'center',
                            padding: '25px 20px',
                            margin: '10px',
                            backgroundColor: city.color,
                            color: 'white',
                            borderRadius: '15px',
                            minWidth: '180px',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden',
                            flex: '1',
                            minWidth: '200px'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                fontSize: '1.8rem',
                                opacity: 0.3
                            }}>
                                {city.icon}
                            </div>
                            
                            <h3 style={{ 
                                margin: '0 0 12px 0', 
                                fontSize: '1.7rem',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                            }}>
                                {city.name}
                            </h3>
                            
                            <p style={{ 
                                margin: 0, 
                                opacity: 0.95,
                                fontSize: '1.1rem',
                                fontWeight: '500'
                            }}>
                                {city.nickname}
                            </p>
                            
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                background: 'rgba(255,255,255,0.5)'
                            }}></div>
                        </div>
                    ))}
                </div>
                
                <div style={{
                    marginTop: '40px',
                    padding: '25px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '12px',
                    border: '2px dashed #bdc3c7',
                    textAlign: 'center'
                }}>
                    <p style={{
                        margin: 0,
                        color: '#7f8c8d',
                        fontSize: '1.1rem',
                        fontStyle: 'italic'
                    }}>
                        "Travel is the only thing you buy that makes you richer"
                    </p>
                </div>
            </div>
        </main>
    );
}

export default MainContent;