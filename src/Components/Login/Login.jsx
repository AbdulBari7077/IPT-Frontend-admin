import React from 'react';
import './login.css';
import { Link } from 'react-router-dom'

const Login = () => {
    const HandleLogin =async (event)=>{
        event.preventDefault();
        const {userEmail , password} = document.forms[0];
        console.log(userEmail.value,password.value);
        // const response = await LoginApi(userEmail.value,password.value);
        // if(response)
        // {
        //     console.log("Login successful");
        //     const userData={ 
        //         "uid": response.data.uid,
        //         "token":response.data.token
        //     }
        //     localStorage.setItem('userData', JSON.stringify(userData));
        //     // console.log("USERDATA: " ,localStorage.getItem('userData'))
        //     return navigate('/home');
        // }
        // return console.log("Login Failed");
    }
    return (
        <div className='main-div'>
            <div className='login-form'>
                <h2 className='login-header'>Admin Login </h2>
                <form onSubmit={HandleLogin}>
                    <div className='form-field'>
                        <input className='login-form-input' placeholder='Email Address'  type="text" name="userEmail" required />
                    </div>
                    <div className='form-field'>
                        <input className='login-form-input' placeholder='Password' type="password" name="password" required />
                    </div>
                    <button className="signin-button" type="submit" >Sign In</button>
                </form>
                <div className='login-footer'>
                    <p>Forget Password ? <Link to="/register">Reset Password </Link>Now.</p>
                </div>
            </div>
        </div>

    );
}

export default Login;