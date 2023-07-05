import './App.css';
import Biography from './componentss/biography';
import Contact from './componentss/contacts';
import Header from './componentss/header';
import Projects from './componentss/project';
import Skill from './componentss/skill';
import Login from './componentss/login';
import jwt_decode from 'jwt-decode';
import {useState,useEffect} from 'react'
function App() {
     
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [UserData, setUserData] = useState(()=>{
    const token=localStorage.getItem('token');
    return token ? jwt_decode(token) :null;
  });
   

  useEffect(()=>{
    const token=localStorage.getItem('token');
    if(token){
      setUserData(jwt_decode(token));
      setIsAuthenticated(true);
      debugger;  
    };
  },[]);
    const handleLogin = (token) => {
      const decoded=jwt_decode(token);
      setUserData(decoded);
        setIsAuthenticated(true);
        localStorage.setItem('token',token);
        debugger;
    };

    const handleLogOut =()=>{
      setIsAuthenticated(false);
      setUserData(null);
      localStorage.removeItem('token');
      debugger;
    }
  return (
    <div className='App'>
    <Header />
    {isAuthenticated ?(
      <> 
       <button varient="contained" onClick={handleLogOut}>Logout</button>
            <Contact />
            <Biography />
            <Projects/>
            <Skill/>
      </>      
    ):(
      <Login onLogin={handleLogin}/>
    )}
    
    </div>
      );
}
export default App;
