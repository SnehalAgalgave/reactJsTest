import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fieldsData from './fields.json';
import '../style.css';

const LoginForm = ({ handleCloseForms }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    navigate('/dashboard');
  };


  
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value); 
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  
  const loginFields = fieldsData.loginFields.map(field => (
    <div className='' key={field.label}>
      <div>
        <label className=''>{field.label}</label>
      </div>
      <div>
        <input required
          className=''
          type={field.type}
          placeholder={field.placeholder}
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
        />
      </div>
    </div>
  ));

  if (isLoggedIn) {
    return null; 
  }

  return (
    <div className='height100vh flex align-item-center justify-content-center'>
      <div className='formWrapper popup'>
        <div className='w-100'>
          <h2 className='text-center'>Log In</h2>
          <div className='closeBtn text-center bg-gradient' onClick={handleCloseForms}>x</div>
          <div className='flex align-item-center justify-content-center'>
            <div className='w-100'>
              <form className='w-100' onSubmit={handleSubmit}>
                {loginFields}
                <div className='text-center header'>
                  <button type="submit" className='btn bg-gradient'>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
