import React from 'react';

function Login({ onSubmit }) {
  return (
    <div className="form-container">
    <form onSubmit={onSubmit} className='form-card'>
      <h2 className="form-title">Login</h2>
      <input type="email" name="email" placeholder="Email" className="form-input" required />
      <input type="password" name="password" placeholder="Password" className="form-input" required />
      <button type="submit" className="form-button">Login</button>
      <div className="form-link">
        Don't have an account? <a href="/signup">Sign up</a>
      </div>
    </form>
    </div>
  );
}

export default Login;
