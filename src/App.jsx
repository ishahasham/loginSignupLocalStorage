import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './Screens/Login/Login';
import Signup from './Screens/Signup/Signup';
import Dashboard from './Screens/Dashboard/Dashboard'; 

function App() {
  const handleFormSubmit = (e, navigate) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (form.name) {
      //  signup
      const name = form.name.value;
      const newUser = { name, email, password };
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Signup successful!');
      navigate('/login');
    } else {
      //  login
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find((u) => u.email === email && u.password === password);
      if (user) {
        alert('Login successful!');
        navigate('/dashboard');
      } else {
        alert('Invalid email or password');
      }
    }
  };

  return (
    <div>
      <div>
        <Routes>
          <Route path="/login" element={<LoginForm onSubmit={handleFormSubmit} />} />
          <Route path="/signup" element={<SignupForm onSubmit={handleFormSubmit} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<LoginForm onSubmit={handleFormSubmit} />} />
        </Routes>
      </div>
    </div>
  );
}

const LoginForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  return <Login onSubmit={(e) => onSubmit(e, navigate)} />;
};

const SignupForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  return <Signup onSubmit={(e) => onSubmit(e, navigate)} />;
};

export default App;
