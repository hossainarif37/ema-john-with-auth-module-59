import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }
    const handleUserSignIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)

    }
    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {loading && <p>loading...</p>}
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p style={{ textAlign: 'center' }}>New to Ema-John? <Link to='/signup'>Create new account</Link></p>
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

export default Login;