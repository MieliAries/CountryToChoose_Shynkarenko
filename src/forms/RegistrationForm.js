import React, { useState } from 'react';

const RegistrationForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password
                })
            });
            if (response.ok) {
                // User registered successfully
                // Reset form fields
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                alert('User registered successfully');
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.error('Error registering user:', error);
            alert('An error occurred while registering user');
        }
    };

    const inputStyle = {
        backgroundColor: 'lightblue',
        color: 'black',
        border: '1px',
        padding: '5px',
        borderRadius: '4px',
        /* Другие стили */
    };

    return (
        <form onSubmit={handleRegistration}>
            <p>First name:</p>
            <input
                style={inputStyle}
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />

            <p>Last name:</p>
            <input
                style={inputStyle}
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />

            <p>Email:</p>
            <input
                style={inputStyle}
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <p>Password:</p>
            <input
                style={inputStyle}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <p></p>
            <button type="submit" style={{backgroundColor: 'lightblue',
                color: 'black',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '4px'}}>Register</button>
        </form>
    );
};

export default RegistrationForm;
