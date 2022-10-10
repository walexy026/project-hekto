import React from 'react'
import './MyAccount.css'

const MyAccount = () => {
  return (
    <div className='accountLogin'>
      <div className='login'>
        <h3>Login</h3> 
      <p>Please login using account detail bellow.</p>
      <form className='loginForm' action="">
        <input  type="text" name="" id="loginEmail" placeholder='Email Address' />
        <input type="password" name="" id="passwordLogin" placeholder='Password' />
        <a>Forgot your password?</a>
        <input type="button" id='submitLogin' value="Sign In" />
        <a href="#">Don’t have an Account?Create account</a>
      </form>
      </div>
    </div>
  )
}

export default MyAccount