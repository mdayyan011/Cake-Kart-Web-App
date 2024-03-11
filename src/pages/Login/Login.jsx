import React, { useState } from 'react';
import './Login.css';
const Login = () => {
  const [respStatus, setRespStatus] = useState(0);
  const [myForm, setMyForm] = useState({});

  const submitForm = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (
    <div className='signin-main-container'>
      <div className='left-container'>
        <h1 className='create-txt'>Welcome Back</h1>
        {respStatus === 1 && (
          <div className='alert alert-danger alertMssg' role='alert'>
            User email or password incorrect
          </div>
        )}
        <form onSubmit={submitForm}>
          <div>
            <label htmlFor='email'></label>
            <input
              type='text'
              id='email'
              placeholder='Enter Email* '
              value={myForm.email}
              onChange={(e) => setMyForm({ ...myForm, email: e.target.value })}
              required
            />
            {myForm.email && myForm.email.invalid && (
              <div className='error-mssg'>Email is required.</div>
            )}
          </div>

          <div>
            <label htmlFor='Password'></label>
            <input
              type='password'
              id='Password'
              placeholder='Enter Password* '
              value={myForm.password}
              onChange={(e) =>
                setMyForm({ ...myForm, password: e.target.value })
              }
              required
            />
            {myForm.password && myForm.password.invalid && (
              <div className='error-mssg'>Password is required.</div>
            )}
          </div>
          <button
            type='submit'
            className='submitBtn'
            style={{ marginTop: 0, fontWeight: 'bold' }}
          >
            SIGN IN
          </button>
          <p className='already-txt'>
            New To Cake Kart? Click
            <span>here to register </span>
          </p>
        </form>
      </div>
      <div className='right-container'>
        <i className='fas fa-home homeIcon'></i>

        <h1 className='welcom-bck-txt'>NEW USER?</h1>
        <button className='singInBtn'>SIGN UP</button>
      </div>
    </div>
  );
};

export default Login;
