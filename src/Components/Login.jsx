import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='background'>
      <div className='box'>
        {/* <div className='logo'></div> */}
        <img id='img' src={require("../Images/logo.png")} alt=''/>
        <div className='details'>
        <h1 className="heading"> <span className='header_top'></span> Login as an Admin User</h1>
          <form >
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
            <Link to='/forgotPassword' id='forgot'>
            Forgot your password?
          </Link>
            <p id='signed'>Get help Signing in.</p>
            <p id='terms'>Terms of use. Privacy policy.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
