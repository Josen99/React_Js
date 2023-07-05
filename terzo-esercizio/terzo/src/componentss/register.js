import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ onRegisterSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/api/register', { username, password, name });
            onRegisterSuccess();
        } catch (error) {
            console.error('Errore durante Regitration ', error);
        }
    };
    return (
        <form onSubmit={handleSubit}>

            <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type='text' placeholder='Uesrname' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type='password' placeholder='Password'  value={password}  onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Registrati</button>
        </form>
    );
}
export default Register;