import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'> Login </h2>
            <form>
                <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='input your email' />
                </div>
                <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='input your password' />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;