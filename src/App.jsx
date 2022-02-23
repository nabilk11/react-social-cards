import { useState, useEffect } from 'react';
import { SocialCard } from './components/SocialCard/SocialCard';
import './App.css';

function App() {
// state for users
  const [users, setUsers] = useState([]);

// API fetch call within useEffect hook
useEffect(async() => {
  let userData
    
    try {
      const response = await fetch('https://randomuser.me/api/?results=10')
      userData = (await response.json()).results;
    } catch (error) {
      console.log(`Error is API Call: ${error}`)
      userData = [];
    }
    setUsers(userData)
   console.log(users)

}, [])

  return (
    <div className="App">
      <h1>Social Cards</h1>
      <div className="cards-container">
      {users.map((user, index) => (
        <SocialCard userData={user} key={index}/>
      ))}
      </div>
    </div>
  );
}

export default App;
