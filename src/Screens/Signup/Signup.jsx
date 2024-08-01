import React from 'react';

function Signup({ onSubmit }) {
  return (
    <div className="form-container">
    <form onSubmit={onSubmit} className='form-card'>
      <h2 className="form-title">Sign Up</h2>
      <input type="text" name="name" placeholder="Name" className="form-input" required />
      <input type="email" name="email" placeholder="Email" className="form-input" required />
      <input type="password" name="password" placeholder="Password" className="form-input" required />
      <button type="submit" className="form-button">Sign Up</button>
      <div className="form-link">
        Already have an account? <a href="/login">Login</a>
      </div>
    </form>
    </div>
  );
}

export default Signup;
