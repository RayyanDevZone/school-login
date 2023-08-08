import React from 'react';
import './Forgot.scss'; // Import your styling

const Forgot = () => {
  return (
    <div className='background'>
      <div className='box'>
        <div className='forgot-content'>
          <h2>Forgot Password</h2>
          <p id='verify'>Verify Yourself   !!</p>
          <button className='btn'>Send OTP via email</button>
          <button className='btn'>Send OTP via Phone Number</button>
         
        </div>
      </div>
    </div>
  );
};

export default Forgot;
