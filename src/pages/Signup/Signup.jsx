import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [respStatus, setRespStatus] = useState(0);
  const [myForm, setMyForm] = useState({});
  let respMssg = '';
  const submitForm = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (
    <div className='signin-main-container'>
      <div className='left-container'>
        <i className='fas fa-home homeIcon'></i>
        <h1 className='welcom-bck-txt'>Welcome Back</h1>
        <button className='SignupInBtn'>SIGN IN</button>
      </div>
      <div className='right-container'>
        <h1 className='create-txt'>Create Account</h1>
        {respStatus === 1 && (
          <div className='alert alert-success alertMssg' role='alert'>
            {respMssg}
          </div>
        )}
        {respStatus === 2 && (
          <div className='alert alert-danger alertMssg' role='alert'>
            {respMssg}
          </div>
        )}
        <form onSubmit={submitForm}>
          <div>
            <label htmlFor='imageUrl'></label>
            <input
              type='text'
              id='imageUrl'
              placeholder='Profile Pic URL:*'
              formControlName='imageUrl'
            />
          </div>

          <div>
            <label htmlFor='firstName'></label>
            <input
              type='text'
              id='firstName'
              placeholder='First Name* '
              formControlName='firstName'
              required
            />
            {myForm.firstName && myForm.firstName.invalid && (
              <div className='error-mssg'>First name is required.</div>
            )}
          </div>

          <div>
            <label htmlFor='lastName'></label>
            <input
              type='text'
              id='lastName'
              placeholder='Last Name* '
              formControlName='lastName'
              required
            />
            {myForm.lastName && myForm.lastName.invalid && (
              <div className='error-mssg'>Last name is required.</div>
            )}
          </div>

          <div>
            <label htmlFor='email'></label>
            <input
              type='email'
              id='email'
              placeholder='Email Address*'
              formControlName='email'
              required
            />
            {myForm.email && myForm.email.invalid && (
              <div className='error-mssg'>
                {myForm.email.hasError('required')
                  ? 'Email address is required.'
                  : 'Invalid email address.'}
              </div>
            )}
          </div>

          <div>
            <label htmlFor='password'></label>
            <input
              type='password'
              id='password'
              placeholder='Password*'
              formControlName='password'
              required
            />
            {myForm.password && myForm.password.invalid && (
              <div className='error-mssg'>Password is required.</div>
            )}
          </div>

          <button
            type='submit'
            className='submitBtn'
            style={{ marginTop: '12%' }}
          >
            SIGN UP
          </button>
        </form>
        <p className='already-txt'>
          Already a User? Click
          <span>here to login </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
