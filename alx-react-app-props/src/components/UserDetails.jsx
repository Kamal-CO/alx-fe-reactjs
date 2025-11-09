// UserDetails.jsx
import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      maxWidth: '400px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h3 style={{
        color: '#2c3e50',
        borderBottom: '2px solid #3498db',
        paddingBottom: '10px',
        marginBottom: '15px'
      }}>
        User Details (Using Context)
      </h3>
      <p style={{ fontSize: '1.1rem', margin: '10px 0' }}>
        <strong>Name:</strong> {userData.name}
      </p>
      <p style={{ fontSize: '1.1rem', margin: '10px 0' }}>
        <strong>Email:</strong> {userData.email}
      </p>
      <div style={{
        marginTop: '15px',
        padding: '10px',
        backgroundColor: '#e8f4f8',
        borderRadius: '5px',
        fontSize: '0.9rem',
        color: '#3498db'
      }}>
        ℹ️ This data is accessed via Context API, not prop drilling!
      </div>
    </div>
  );
}

export default UserDetails;