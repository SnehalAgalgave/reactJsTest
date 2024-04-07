import React from 'react';
import fieldsData from './fields.json';
import '../style.css';

const SignupForm = ({ handleCloseForms }) => { 
  const signupFields = fieldsData.signupFields.map(field => (
    <div key={field.label}>
      <div>
          <label>{field.label}</label>
      </div>
      <div>
        <input required type={field.type} placeholder={field.placeholder} />
      </div>
    </div>
  ));

  return (
    <div className='height100vh flex align-item-center justify-content-center'>
      <div className='formWrapper'>
          <h2 className='text-center'>Sign Up</h2>
          <div className='closeBtn text-center bg-gradient' onClick={handleCloseForms}>x</div> {/* Call handleCloseForms when the close button is clicked */}
          <div className='flex align-item-center justify-content-center'>
            <div className='w-100'>
            <form className='w-100'>
              {signupFields}
              <div className='text-center header'>
                  <button type="submit" className='btn bg-gradient'>Sign Up</button>
              </div>
            </form>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SignupForm;
