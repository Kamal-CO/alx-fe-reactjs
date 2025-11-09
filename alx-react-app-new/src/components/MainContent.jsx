// MainContent Component
function MainContent() {
    return (
        <main style={{
            padding: '30px',
            backgroundColor: '#ecf0f1',
            minHeight: '400px',
            background: 'linear-gradient(135deg, #ecf0f1 0%, #bdc3c7 100%)'
        }}>
            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
            }}>
                <h2 style={{
                    color: '#2c3e50',
                    textAlign: 'center',
                    fontSize: '2rem',
                    marginBottom: '25px',
                    borderBottom: '3px solid #e74c3c',
                    paddingBottom: '10px'
                }}>
                    My Favorite Cities
                </h2>
                
                <p style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.6',
                    color: '#34495e',
                    textAlign: 'center',
                    marginBottom: '20px',
                    fontWeight: '500'
                }}>
                    I love to visit <span style={{color: '#e74c3c', fontWeight: 'bold'}}>New York</span>, 
                    <span style={{color: '#3498db', fontWeight: 'bold'}}> Paris</span>, and 
                    <span style={{color: '#2ecc71', fontWeight: 'bold'}}> Tokyo</span>.
                </p>
                
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '30px',
                    flexWrap: 'wrap'
                }}>
                    <div style={{
                        textAlign: 'center',
                        padding: '20px',
                        margin: '10px',
                        backgroundColor: '#e74c3c',
                        color: 'white',
                        borderRadius: '10px',
                        minWidth: '150px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                    }}>
                        <h3 style={{ margin: '0 0 10px 0', fontSize: '1.5rem' }}>New York</h3>
                        <p style={{ margin: 0, opacity: 0.9 }}>The Big Apple</p>
                    </div>
                    
                    <div style={{
                        textAlign: 'center',
                        padding: '20px',
                        margin: '10px',
                        backgroundColor: '#3498db',
                        color: 'white',
                        borderRadius: '10px',
                        minWidth: '150px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                    }}>
                        <h3 style={{ margin: '0 0 10px 0', fontSize: '1.5rem' }}>Paris</h3>
                        <p style={{ margin: 0, opacity: 0.9 }}>City of Light</p>
                    </div>
                    
                    <div style={{
                        textAlign: 'center',
                        padding: '20px',
                        margin: '10px',
                        backgroundColor: '#2ecc71',
                        color: 'white',
                        borderRadius: '10px',
                        minWidth: '150px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                    }}>
                        <h3 style={{ margin: '0 0 10px 0', fontSize: '1.5rem' }}>Tokyo</h3>
                        <p style={{ margin: 0, opacity: 0.9 }}>Capital of Japan</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainContent;