import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ForgetPassword.css'

const ForgetPassword = () => {
    const [formSubmitted, setformSubmitted] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setformSubmitted(true)
        const { userEmail } = document.forms[0];
        console.log(userEmail.value);
        toast.success(!formSubmitted?'Email Sent ,Check Your MailBox !':"Email Re-Sent ,Check Your MailBox !", {
            position: toast.POSITION.TOP_RIGHT,
            classNames:'toster'
        })

    }
    return (
        <div className="login-body">
            <ToastContainer />
            <div className='login-form'>
                <h2 className='login-header'>Reset Password </h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-field'>
                        <input  className='login-form-input' placeholder='Confirm Email Address' type="text" name="userEmail"  required />
                    </div>
                    <div className='form-field'>
                        <button className="signin-button" type="submit" > {formSubmitted? `Re-Send Verification Code`:'Send Verification Code'}  </button>
                    </div>
                </form>
                
                <div className='login-footer'>
                    <p>Back to Netflix ? <Link to="/admin/login">Sign In </Link>Now.</p>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;