import React from 'react';
import './App.css';
function App() {
  return (
    <div className='container'>
    <div className='card'>
      <img className='react_image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' />
      <br />
      <br />
      <div className='heading1'>SOME RANDOM TEXT,SOME RANDOM </div>
      <div className='heading2'>TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT</div>
      <br />
      <br />
      <div className='tag'>
        <div className='login'>
          Login
        </div>
        <div className='signup'>
          Signup
        </div>
      </div>
      <br />
      <br />
      <input className='email' type='text' placeholder='   Email Address' />
      <br />
      <input className='password' type='text' placeholder='   Password' />
      <br />
      <br />
      <button className='loginbutton'>LOGIN</button>
      <br />
      <div className='forgot'> Forgot Password? </div>
      <br />
      <br />
      <div className='text1'>
        or login with
      </div>
      <br />
      <div className='alllogo'>
        <div >
          <img className='google' src='https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1' />
        </div>
        <div >
          <img className='facebook' src='https://toppng.com/uploads/preview/facebook-logo-png-transparent-facebook-f-logo-sv-11563088711q5rgq6hd0v.png' />
        </div>
        <div >
          <img className='twitter' src='https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png'/>
        </div>
      </div>
      <div>
        Don't have an account? <span className='create'>Create new now!</span>
      </div>
      <br/>
      <div>
        By signing up,you are agree with our <span className='terms'>Terms & Conditions</span>
      </div>
      <br/>
    <br/>
    </div>
    
    </div>
  )
}

export default App;
