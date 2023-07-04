import React,{useState} from 'react';
import axios from 'axios';

const Login = ({onLogin})=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');    
    const handleSubit=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post('http://localhost:3001/api/autenticate',{username,password});
             onLogin(response.data.token);
        }catch(error){
            console.error('Errore durante Login ',error);
        }
    };
    return(
             <form onSubmit={handleSubit}>
                  <input
                             type='text'
                             placeholder='Uesrname'
                             value={username}
                             onChange={(e)=>setUsername(e.target.value)}
                  />
                  <input
                             type='password'
                             placeholder='Password'
                             value={password}
                             onChange={(e)=>setPassword(e.target.value)}
                  />
                  <button type='submit'>Login</button>
             </form>
        );
}
export default Login;