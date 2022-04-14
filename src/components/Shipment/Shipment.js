import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();
    const handleNameBlur = (e) => {
        setName(e.target.value)
    }

    const handleAddressBlur = (e) => {
        setAddress(e.target.value);
    }
    const handlePhoneBlur = (e) => {
        setPhone(e.target.value);
    }
    const handleCreateUser = (e) => {
        e.preventDefault();
        const shipping = { name, email, address, phone };
        console.log(shipping);

    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Shipping Information</h1>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input value={user?.email} readOnly type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="number" name="phone" required />
                    </div>
                    <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>

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

export default Shipment;