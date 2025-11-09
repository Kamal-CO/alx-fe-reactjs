// About.jsx
function About() {
    return (
        <div style={{
            padding: '60px 20px',
            maxWidth: '1200px',
            margin: '0 auto',
            backgroundColor: '#f8f9fa'
        }}>
            <h1 style={{
                textAlign: 'center',
                fontSize: '3rem',
                color: '#2c3e50',
                marginBottom: '40px',
                borderBottom: '3px solid #3498db',
                paddingBottom: '15px'
            }}>
                About Us
            </h1>
            
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
                marginTop: '40px'
            }}>
                <div style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '15px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                }}>
                    <h3 style={{ color: '#e74c3c', marginBottom: '15px' }}>Our Story</h3>
                    <p style={{ lineHeight: '1.6', color: '#34495e' }}>
                        Founded in 1990, TechInnovate has been at the forefront of technological innovation. 
                        We started as a small startup and have grown into a global leader in digital solutions.
                    </p>
                </div>
                
                <div style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '15px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                }}>
                    <h3 style={{ color: '#3498db', marginBottom: '15px' }}>Our Mission</h3>
                    <p style={{ lineHeight: '1.6', color: '#34495e' }}>
                        To empower businesses with innovative technology solutions that drive growth, 
                        efficiency, and competitive advantage in the digital age.
                    </p>
                </div>
                
                <div style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '15px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                }}>
                    <h3 style={{ color: '#2ecc71', marginBottom: '15px' }}>Our Vision</h3>
                    <p style={{ lineHeight: '1.6', color: '#34495e' }}>
                        To be the world's most trusted partner for digital transformation, 
                        creating a future where technology enhances every aspect of business and life.
                    </p>
                </div>
            </div>
            
            <div style={{
                marginTop: '50px',
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '15px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
            }}>
                <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Our Journey</h2>
                <p style={{ lineHeight: '1.8', color: '#34495e', fontSize: '1.1rem' }}>
                    Our company has been providing top-notch services since 1990. We specialize in various fields 
                    including technology consulting, digital marketing, software development, and business consultancy. 
                    With over 30 years of experience, we've helped thousands of businesses transform and thrive in the digital era.
                </p>
            </div>
        </div>
    );
}

export default About;