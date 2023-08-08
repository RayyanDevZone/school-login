import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './Login.scss';

const Login = () => {
  return (
    <div className='background'>
      <div className='box'>
        <div className='logo'></div>
        <div className='details'>
        <h1 className="heading">Login as an Admin User</h1>
          <form>
            <div className="input-container">
              <input
                type='email'
                required
                id='name'
                name='name'
                placeholder='johndoe@xyz.com'
              />
              <span className="icon">
                <FaUser/>
              </span>
            </div>
            <div className="input-container">
              <input
                type='password'
                required
                id='password'
                name='password'
                placeholder='x x x x x x x'
              />
              <span className="icon">
                <FaLock />
              </span>
            </div>
            <button type='submit'>LOGIN</button>
            <p id='forgot'>Forgot your password?</p>
            <p id='signed'>Get help Signing in.</p>
            <p id='terms'>Terms of use. Privacy policy.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
