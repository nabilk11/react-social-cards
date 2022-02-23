import { useState, useEffect } from 'react';
import { SocialCard } from './components/SocialCard/SocialCard';
import './App.css';

function App() {
// state for users
  const [users, setUsers] = useState([]);

// state for ALL users
  const [allUsers, setAllUsers] = useState([]);

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
    setAllUsers(userData)
    setUsers(userData)
   

}, [])

//FILTERCARDS FUNCTION
const filterCards = (e) => {
  const value = e.target.value.toLowerCase();
  const filteredUsers = allUsers.filter(
    user => (`${user.name.first} ${user.name.last}`
    .toLowerCase()
    .includes(value)
    )
  )
  setUsers(filteredUsers)
}

  return (
    <div className="App">
      <h1>Social Cards</h1>
      <input className='search-box' type="text" placeholder='Search...' onInput={filterCards}/>
      <div className="cards-container">
      {users.map((user, index) => (
        <SocialCard userData={user} key={index}/>
      ))}
      </div>
    </div>
  );
}

export default App;
