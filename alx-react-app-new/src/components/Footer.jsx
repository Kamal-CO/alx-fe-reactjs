// Footer Component
function Footer() {
    return (
     <footer style={{
      backgroundColor: '#34495e',
      color: '#ecf0f1',
      textAlign: 'center',
      padding: '25px 20px',
      borderTop: '5px solid #e74c3c',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <div style={{
          textAlign: 'left',
          flex: 1,
          minWidth: '200px'
        }}>
          <h3 style={{
            color: '#3498db',
            marginBottom: '10px'
          }}>
            My Favorite Cities
          </h3>
          <p style={{
            fontSize: '0.9rem',
            opacity: 0.8,
            lineHeight: '1.4'
          }}>
            Discovering beautiful destinations since 2024
          </p>
        </div>
        
        <div style={{
          flex: 1,
          minWidth: '200px'
        }}>
          <p style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            marginBottom: '10px'
          }}>
            Contact Us
          </p>
          <p style={{
            fontSize: '0.9rem',
            opacity: 0.8,
            margin: '5px 0'
          }}>
            Email: info@myfavoritecities.com
          </p>
          <p style={{
            fontSize: '0.9rem',
            opacity: 0.8,
            margin: '5px 0'
          }}>
            Phone: +1 (555) 123-4567
          </p>
        </div>
        
        <div style={{
          flex: 1,
          minWidth: '200px'
        }}>
          <p style={{
            fontSize: '0.8rem',
            opacity: 0.7,
            marginTop: '15px'
          }}>
            &copy; 2024 My Favorite Cities. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    );
}

export default Footer;