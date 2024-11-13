
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'; 
import './SignUp.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const users = await response.json();

      const user = users.find((user) => user.email === email && user.password === password);

      if (user) {
        console.log('User logged in:', { email, password });
        login(user); 
        navigate('/'); 
      } else {
        alert('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('There was an issue logging in. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2>Comfort Nest</h2>
        <p>Embark on a Journey of Luxury and Elegance.</p>
        <p>Join Us Today!</p>
        <form className="signup-form" onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
        <p className="signup-prompt">
          Don't have an account?{' '}
          <span onClick={() => navigate('/signup')} className="signup-link">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
