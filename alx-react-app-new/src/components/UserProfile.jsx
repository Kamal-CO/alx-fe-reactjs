// UserProfile Component using Props
function UserProfile(props) {
    return (
        <div style={{
            border: '2px solid #bdc3c7',
            borderRadius: '10px',
            padding: '20px',
            margin: '15px',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
        }}>
            <h2 style={{
                color: '#2c3e50',
                fontSize: '1.8rem',
                marginBottom: '15px',
                borderBottom: '2px solid #3498db',
                paddingBottom: '8px'
            }}>
                {props.name}
            </h2>
            
            <p style={{
                fontSize: '1.1rem',
                margin: '8px 0',
                color: '#34495e'
            }}>
                Age: <span style={{
                    fontWeight: 'bold',
                    color: '#e74c3c',
                    fontSize: '1.2rem'
                }}>{props.age}</span>
            </p>
            
            <div style={{
                backgroundColor: '#f8f9fa',
                padding: '15px',
                borderRadius: '5px',
                marginTop: '10px',
                borderLeft: '4px solid #3498db'
            }}>
                <p style={{
                    margin: 0,
                    fontStyle: 'italic',
                    color: '#7f8c8d',
                    lineHeight: '1.5'
                }}>
                    {props.bio}
                </p>
            </div>
        </div>
    );
}

export default UserProfile;