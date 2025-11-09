// Counter.jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{
            textAlign: 'center',
            padding: '40px',
            backgroundColor: '#f8f9fa',
            borderRadius: '15px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            maxWidth: '500px',
            margin: '30px auto',
            border: '2px solid #3498db'
        }}>
            <h2 style={{
                color: '#2c3e50',
                fontSize: '2rem',
                marginBottom: '30px',
                borderBottom: '3px solid #e74c3c',
                paddingBottom: '10px'
            }}>
                Simple Counter
            </h2>
            
            <div style={{
                fontSize: '4rem',
                fontWeight: 'bold',
                color: count > 0 ? '#2ecc71' : count < 0 ? '#e74c3c' : '#2c3e50',
                margin: '30px 0',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease'
            }}>
                {count}
            </div>
            
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '15px',
                flexWrap: 'wrap',
                marginTop: '20px'
            }}>
                <button 
                    onClick={() => setCount(count + 1)}
                    style={{
                        padding: '12px 25px',
                        fontSize: '1.1rem',
                        backgroundColor: '#2ecc71',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        transition: 'all 0.3s ease',
                        minWidth: '120px'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                    }}
                >
                    Increment +
                </button>
                
                <button 
                    onClick={() => setCount(count - 1)}
                    style={{
                        padding: '12px 25px',
                        fontSize: '1.1rem',
                        backgroundColor: '#e74c3c',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        transition: 'all 0.3s ease',
                        minWidth: '120px'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                    }}
                >
                    Decrement -
                </button>
                
                <button 
                    onClick={() => setCount(0)}
                    style={{
                        padding: '12px 25px',
                        fontSize: '1.1rem',
                        backgroundColor: '#3498db',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        transition: 'all 0.3s ease',
                        minWidth: '120px'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                    }}
                >
                    Reset
                </button>
            </div>
            
            <div style={{
                marginTop: '25px',
                padding: '15px',
                backgroundColor: '#ecf0f1',
                borderRadius: '8px',
                borderLeft: '4px solid #3498db'
            }}>
                <p style={{
                    margin: 0,
                    color: '#2c3e50',
                    fontSize: '0.9rem',
                    fontStyle: 'italic'
                }}>
                    💡 Click the buttons to change the counter value!
                </p>
            </div>
        </div>
    );
}

export default Counter;