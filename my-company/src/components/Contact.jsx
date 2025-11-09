// Contact.jsx
import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! Your message has been received. We'll get back to you soon.`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div style={{
            padding: '60px 20px',
            maxWidth: '800px',
            margin: '0 auto',
            backgroundColor: '#f8f9fa'
        }}>
            <h1 style={{
                textAlign: 'center',
                fontSize: '3rem',
                color: '#2c3e50',
                marginBottom: '40px',
                borderBottom: '3px solid #2ecc71',
                paddingBottom: '15px'
            }}>
                Contact Us
            </h1>
            
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
                marginBottom: '40px'
            }}>
                <div style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '15px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Get In Touch</h3>
                    <div style={{ marginBottom: '15px' }}>
                        <strong>📍 Address:</strong>
                        <p>123 Tech Street, Innovation City, IC 12345</p>
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <strong>📞 Phone:</strong>
                        <p>+1 (555) 123-4567</p>
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <strong>📧 Email:</strong>
                        <p>info@techinnovate.com</p>
                    </div>
                    <div>
                        <strong>🕒 Business Hours:</strong>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                </div>
                
                <div style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '15px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Send us a Message</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '12px',
                                margin: '10px 0',
                                border: '2px solid #bdc3c7',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                boxSizing: 'border-box'
                            }}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '12px',
                                margin: '10px 0',
                                border: '2px solid #bdc3c7',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                boxSizing: 'border-box'
                            }}
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '12px',
                                margin: '10px 0',
                                border: '2px solid #bdc3c7',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                boxSizing: 'border-box',
                                resize: 'vertical'
                            }}
                        />
                        <button 
                            type="submit"
                            style={{
                                padding: '15px 30px',
                                backgroundColor: '#2ecc71',
                                color: 'white',
                                border: 'none',
                                borderRadius: '25px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                width: '100%',
                                marginTop: '10px'
                            }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;