
import { useState, useEffect } from 'react';
import './App.css';

function App() {
// state for users
  const [users, setUsers] = useState([]);

// API fetch call within useEffect hook
useEffect(() => {
  (async () => {
    let userData;
    try {
      const response = await fetch('https://randomuser.me/api/?results=10')
      const userData = await response.json().results;
    } catch (error) {
      console.log(`Error is API Call: ${error}`)
      userData = [];
    }
    setUsers(userData)
  } )

}, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
