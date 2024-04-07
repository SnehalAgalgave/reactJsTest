import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import '../style.css';

const Home = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  const handleSignupClick = () => {
    setShowSignupForm(true);
    setShowLoginForm(false);
  };

  const handleCloseForms = () => {
    setShowLoginForm(false);
    setShowSignupForm(false);
  };

  return (
    <div className='wrapper'>
      <div className='wrapperInner bg-gradient'>
        <div className='flex align-item-center header justify-content-between'>
          <div className='logo'><span>Home</span> Page</div>
          <div>
            <button className="login" onClick={handleLoginClick}>Log in</button>
            <button className="signup" onClick={handleSignupClick}>Sign Up</button>
          </div>
        </div>
      </div>
      {showLoginForm && <LoginForm handleCloseForms={handleCloseForms} />}
      {showSignupForm && <SignupForm handleCloseForms={handleCloseForms} />}
    </div>
  );
};

export default Home;
