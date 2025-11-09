// Footer Component
function Footer() {
    return (
     <footer style={{
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      textAlign: 'center',
      padding: '35px 20px',
      borderTop: '6px solid #e74c3c',
      marginTop: 'auto',
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
        background: 'radial-gradient(circle at 20% 80%, rgba(231, 76, 60, 0.1) 0%, transparent 50%)',
        zIndex: 0
      }}></div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '30px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          textAlign: 'left',
          flex: 1,
          minWidth: '250px'
        }}>
          <h3 style={{
            color: '#3498db',
            marginBottom: '15px',
            fontSize: '1.5rem',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              backgroundColor: '#e74c3c',
              borderRadius: '50%'
            }}></span>
            My Favorite Cities
          </h3>
          <p style={{
            fontSize: '1rem',
            opacity: 0.9,
            lineHeight: '1.6',
            marginBottom: '15px'
          }}>
            Discovering beautiful destinations since 2024
          </p>
          <div style={{
            display: 'flex',
            gap: '15px',
            marginTop: '20px'
          }}>
            {['📘', '📷', '✈️', '🏨'].map((icon, index) => (
              <div key={index} style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(52, 152, 219, 0.3)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                {icon}
              </div>
            ))}
          </div>
        </div>
        
        <div style={{
          flex: 1,
          minWidth: '250px'
        }}>
          <p style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '18px',
            color: '#ecf0f1',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            borderLeft: '3px solid #3498db',
            paddingLeft: '10px'
          }}>
            Contact Us
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            margin: '12px 0'
          }}>
            <span style={{ fontSize: '1.2rem' }}>📧</span>
            <p style={{
              fontSize: '1rem',
              opacity: 0.9,
              margin: 0
            }}>
              info@myfavoritecities.com
            </p>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            margin: '12px 0'
          }}>
            <span style={{ fontSize: '1.2rem' }}>📞</span>
            <p style={{
              fontSize: '1rem',
              opacity: 0.9,
              margin: 0
            }}>
              +1 (555) 123-4567
            </p>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            margin: '12px 0'
          }}>
            <span style={{ fontSize: '1.2rem' }}>📍</span>
            <p style={{
              fontSize: '1rem',
              opacity: 0.9,
              margin: 0
            }}>
              123 Travel Street, Adventure City
            </p>
          </div>
        </div>
        
        <div style={{
          flex: 1,
          minWidth: '250px'
        }}>
          <p style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '18px',
            color: '#ecf0f1',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            borderLeft: '3px solid #2ecc71',
            paddingLeft: '10px'
          }}>
            Quick Links
          </p>
          {['Home', 'Cities', 'Gallery', 'Blog', 'About Us'].map((link, index) => (
            <p key={index} style={{
              fontSize: '1rem',
              opacity: 0.9,
              margin: '10px 0',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: '5px 0',
              borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#3498db';
              e.currentTarget.style.paddingLeft = '10px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#ecf0f1';
              e.currentTarget.style.paddingLeft = '0';
            }}>
              {link}
            </p>
          ))}
        </div>
      </div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '30px auto 0 auto',
        paddingTop: '20px',
        borderTop: '1px solid rgba(255,255,255,0.2)',
        position: 'relative',
        zIndex: 1
      }}>
        <p style={{
          fontSize: '0.9rem',
          opacity: 0.8,
          margin: 0,
          textAlign: 'center'
        }}>
          &copy; 2024 My Favorite Cities. All rights reserved. | Designed with ❤️ for travelers
        </p>
      </div>
    </footer>
    );
}

export default Footer;