// Services.jsx
function Services() {
    const services = [
        {
            title: "Technology Consulting",
            description: "Strategic technology advisory services to help your business stay ahead of the curve.",
            icon: "💻",
            color: "#3498db"
        },
        {
            title: "Software Development",
            description: "Custom software solutions tailored to your specific business needs and requirements.",
            icon: "🚀",
            color: "#e74c3c"
        },
        {
            title: "Digital Marketing",
            description: "Comprehensive digital marketing strategies to boost your online presence and growth.",
            icon: "📈",
            color: "#2ecc71"
        },
        {
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure and migration services for modern businesses.",
            icon: "☁️",
            color: "#f39c12"
        },
        {
            title: "Data Analytics",
            description: "Advanced data analysis and business intelligence solutions for informed decision-making.",
            icon: "📊",
            color: "#9b59b6"
        },
        {
            title: "Cybersecurity",
            description: "Robust security solutions to protect your digital assets and customer data.",
            icon: "🛡️",
            color: "#e67e22"
        }
    ];

    return (
        <div style={{
            padding: '60px 20px',
            maxWidth: '1200px',
            margin: '0 auto',
            backgroundColor: '#ecf0f1'
        }}>
            <h1 style={{
                textAlign: 'center',
                fontSize: '3rem',
                color: '#2c3e50',
                marginBottom: '50px',
                borderBottom: '3px solid #e74c3c',
                paddingBottom: '15px'
            }}>
                Our Services
            </h1>
            
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '30px'
            }}>
                {services.map((service, index) => (
                    <div key={index} style={{
                        backgroundColor: 'white',
                        padding: '30px',
                        borderRadius: '15px',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease',
                        borderTop: `5px solid ${service.color}`
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-10px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                        <div style={{
                            fontSize: '3rem',
                            marginBottom: '20px'
                        }}>
                            {service.icon}
                        </div>
                        <h3 style={{
                            color: service.color,
                            marginBottom: '15px',
                            fontSize: '1.5rem'
                        }}>
                            {service.title}
                        </h3>
                        <p style={{
                            lineHeight: '1.6',
                            color: '#34495e',
                            fontSize: '1rem'
                        }}>
                            {service.description}
                        </p>
                        <button style={{
                            marginTop: '20px',
                            padding: '10px 20px',
                            backgroundColor: service.color,
                            color: 'white',
                            border: 'none',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}>
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;