import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  // State for form fields - these are the controlled values
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State for errors
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Individual change handlers for each field
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    // Clear error when user starts typing
    if (errors.username) {
      setErrors(prev => ({ ...prev, username: '' }));
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (errors.password) {
      setErrors(prev => ({ ...prev, password: '' }));
    }
  };

  // OR use a single handler (alternative approach)
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    switch(name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // FIXED VALIDATION FUNCTION
  const validateForm = () => {
    const newErrors = {};
    
    // Basic validation using if (!field) checks
    if (!username) {
      newErrors.username = 'Username is required';
    } else if (username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    // FIXED: Using if (!email) as requested
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  // Alternative simple validation basic checks
  const basicValidate = () => {
    const newErrors = {};
    
    // Simple if (!field) checks only
    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Use validateForm() for full validation
    // OR use basicValidate() for just the required field checks
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Mock API call
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
        alert('Registration successful!');
        
        // Reset form
        setUsername('');
        setEmail('');
        setPassword('');
        setErrors({});
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="registration-form">
      <h2>User Registration (Controlled Components)</h2>
      <form onSubmit={handleSubmit}>
        {/* Username Field */}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="Enter username"
            className={errors.username ? 'error' : ''}
          />
          {errors.username && (
            <span className="error-message">{errors.username}</span>
          )}
        </div>
        
        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter email"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        
        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter password"
            className={errors.password ? 'error' : ''}
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="submit-btn"
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;