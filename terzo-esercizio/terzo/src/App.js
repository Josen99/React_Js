import './App.css';
import Biography from './componentss/biography';
import Contact from './componentss/contacts';
import Header from './componentss/header';
import Projects from './componentss/project';
import Skill from './componentss/skill';
import Login from './componentss/login';
import jwt_decode from 'jwt-decode';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Register from './componentss/register';
import Profile from './componentss/profile';
import styles from './style1.css';
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const[isRegistrated,setIsRegistrated] =useState(false);
  const [UserData, setUserData] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? jwt_decode(token) : null;
  });


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      setUserData(jwt_decode(token));
    };
  }, []);
  const handleLogin = (token) => {
    const decoded = jwt_decode(token);
    setUserData(decoded);
    setIsAuthenticated(true);
    localStorage.setItem('token', token);
  };
  const handleLogOut = () => {
    setIsAuthenticated(false);
    setUserData(null);
    localStorage.removeItem('token');
    debugger;
  }

  const handleRegistration=()=>{
        setIsRegistrated(false)
  }

  return (
    <div className='App'>
      <Header />
      {isAuthenticated ? (
        <>   
          <button  varient="contained" onClick={handleLogOut}>Logout</button>
          <Profile />
          <Contact />
          <Biography />
          <Projects />
          <Skill />
        </>

      ) : isRegistrated ? (
        <Register onRegisterSuccess={handleRegistration} />
         ):(
           <div>

          <Login  onLogin={handleLogin} />
          <button className={styles.button} onClick={()=>setIsRegistrated(true)}>Registrati</button>
           </div>
      )}

    </div>
  );
}
export default App; 

