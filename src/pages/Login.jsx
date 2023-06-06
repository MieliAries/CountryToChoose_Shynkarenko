import RegistrationForm from "../forms/RegistrationForm";
import LoginForm from "../forms/LoginForm";
import React from 'react';
import worldmap from "../images/worldmap.png";

const Login = () => {
    return (
            <div className="LoginStyle" style={{
                backgroundImage: `url(${worldmap})`,
                backgroundPosition: 'center',
                backgroundSize: '50%',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center'
            }}>
                <div style ={{width: '50%', textAlign: 'center'}}>
                    <h1>Registration Page</h1>
                    <RegistrationForm />
                </div>
                <div style ={{width: '50%', textAlign: 'center'}}>
                    <h1>Login Page</h1>
                    <LoginForm />
                </div>
            </div>
    );
};

export default Login;