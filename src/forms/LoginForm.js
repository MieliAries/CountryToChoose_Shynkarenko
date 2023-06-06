import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [first_name] = useState('');
    const [second_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // Предотвращение отправки формы по умолчанию

        try {
            const response = await axios.post('/login', {
                first_name,
                second_name,
                email,
                password,
            });

            const data = response.data;

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const inputStyle = {
        backgroundColor: 'lightblue',
        color: 'black',
        border: '2px',
        borderColor: 'blue',
        padding: '5px',
        borderRadius: '4px',
        /* Другие стили */
    };
    return (
        <form onSubmit={handleLogin}>
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
                borderRadius: '4px'}}>Login</button>
        </form>
    );
};

export default LoginForm;