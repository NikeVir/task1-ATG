import React from 'react'
import './logincss.css'

export default function Login({changeStateToFalse}) {
  return (
    <div className='LoginDiv'>
        
        <div className="loginContainer">
          <button className="closebtn" onClick={changeStateToFalse}>
            <img src='/images/Group 1.png'/>
          </button>
          <div className='mainLogin'>
            <div className="Loginhead">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼.</div>
            

            <div className='loginSection'>
              <div className='loginForm'>
                <h4 style={{fontWeight:"700"}}>Create Account</h4>
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
                <input type ="email" placeholder='Email'/>
                <input type ="password" placeholder='Password '/>
                <input type ="password" placeholder='Condirm Password'/>
                <button className='createAccountbtn'>Create Account</button>
                <button className='Signupbtn'>Sign up with Facebook</button>
                <button className='Signupbtn'> Sign up with Google</button>
              </div>
              <div className='loginImg'>
                <p style={{marginLeft:"30px"}}>Already have an account?<span style={{color:"#2F6CE5"}}>Sign In</span></p>
                <img src="/images/Group 2.png"/>
                <p style={{fontSize:"11px"}}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
