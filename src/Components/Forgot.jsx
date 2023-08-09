import React from 'react';
import './Forgot.scss'; 
import { Link } from 'react-router-dom';
const Forgot = () => {
  return (
    <div className='background'>
      <div className='box'>
        <div className='forgot-content'>
          <h2>Forgot Password</h2>
          <p id='verify'>Verify Yourself   !!</p>
          <button className='btn'>Send OTP via email</button>
          <button className='btn'>Send OTP via Phone Number</button>
          <Link to='/'id='back'>⬅</Link>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
