// UserProfile Component using Props
function UserProfile(props) {
    return (
        <div style={{
            border: '2px solid #3498db',
            borderRadius: '15px',
            padding: '25px',
            margin: '20px auto',
            backgroundColor: '#ffffff',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            maxWidth: '650px',
            transition: 'all 0.3s ease',
            background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
            borderLeft: '6px solid #e74c3c',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '80px',
                height: '80px',
                background: 'radial-gradient(circle, rgba(52, 152, 219, 0.1) 0%, transparent 70%)',
                borderRadius: '0 0 0 100%'
            }}></div>
            
            <h2 style={{
                color: '#2c3e50',
                fontSize: '2.1rem',
                marginBottom: '20px',
                borderBottom: '3px solid #3498db',
                paddingBottom: '12px',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}>
                <span style={{
                    display: 'inline-block',
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#2ecc71',
                    borderRadius: '50%'
                }}></span>
                {props.name}
            </h2>
            
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '15px',
                flexWrap: 'wrap'
            }}>
                <p style={{
                    fontSize: '1.2rem',
                    margin: 0,
                    color: '#34495e',
                    backgroundColor: '#ecf0f1',
                    padding: '8px 15px',
                    borderRadius: '20px',
                    border: '1px solid #bdc3c7'
                }}>
                    Age: <span style={{
                        fontWeight: 'bold',
                        color: '#e74c3c',
                        fontSize: '1.3rem',
                        marginLeft: '5px'
                    }}>{props.age}</span>
                </p>
                
                <p style={{
                    fontSize: '1.2rem',
                    margin: 0,
                    color: '#34495e',
                    backgroundColor: '#ecf0f1',
                    padding: '8px 15px',
                    borderRadius: '20px',
                    border: '1px solid #bdc3c7'
                }}>
                    Location: <span style={{
                        fontWeight: 'bold',
                        color: '#3498db',
                        fontSize: '1.3rem',
                        marginLeft: '5px'
                    }}>{props.location || 'Unknown'}</span>
                </p>
            </div>
            
            <div style={{
                backgroundColor: '#f8f9fa',
                padding: '20px',
                borderRadius: '10px',
                marginTop: '15px',
                borderLeft: '5px solid #3498db',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)',
                position: 'relative'
            }}>
                <p style={{
                    margin: 0,
                    fontStyle: 'italic',
                    color: '#2c3e50',
                    lineHeight: '1.6',
                    fontSize: '1.1rem',
                    textAlign: 'justify'
                }}>
                    {props.bio}
                </p>
                
                <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '15px',
                    fontSize: '2rem',
                    color: '#3498db',
                    opacity: 0.1
                }}>
                    "
                </div>
            </div>
            
            {props.hobbies && (
                <div style={{
                    marginTop: '20px',
                    padding: '15px',
                    backgroundColor: '#fff9e6',
                    borderRadius: '8px',
                    border: '1px dashed #f39c12'
                }}>
                    <p style={{
                        margin: '0 0 10px 0',
                        fontWeight: 'bold',
                        color: '#e67e22'
                    }}>
                        Hobbies:
                    </p>
                    <p style={{ margin: 0, color: '#d35400' }}>
                        {props.hobbies}
                    </p>
                </div>
            )}
        </div>
    );
}

export default UserProfile;