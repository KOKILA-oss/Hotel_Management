import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const users = await response.json();

      
      const userExists = users.some(user => user.email === email);
      if (userExists) {
        setError('User already exists!'); 
        return;
      }

      const userData = { fullName, email, password };

      
      const registerResponse = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!registerResponse.ok) {
        throw new Error('Failed to register user'); 
      }
      const data = await registerResponse.json();
      console.log('User signed up:', data);

      
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError(''); 

      
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      setError('There was an issue registering. Please try again.'); 
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2>Comfort Nest</h2>
        <p>Embark on a Journey of Luxury and Elegance.</p>
        <p>Join Us Today!</p>
        {error && <p className="error-message">{error}</p>} 
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

