import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SingUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const SingUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }
    if (user) {
        navigate('/shop')
    }
    const handleCreateUser = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Your passwords did not match!!');
            return;
        }
        else {
            setError('')
            console.log(email, password, confirmPassword);
        }
        if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }


    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" name="password" required />
                    </div>
                    <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
                    <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p
                    style={{ textAlign: 'center' }}>New to Ema-John? <Link
                        to='/login'>Login</Link>
                </p>
                <div className='underline-container'>
                    <div className='underline'></div>
                    <span className='underline-text'>or</span>
                    <div className='underline'></div>
                </div>
                <button className='google-button'>
                    <img style={{ width: '25px' }} src="google.png" alt="" />
                    <p>Continue with Google</p>
                </button>
            </div>
        </div>
    );
};

export default SingUp;