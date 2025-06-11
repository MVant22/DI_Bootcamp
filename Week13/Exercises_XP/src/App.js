import logo from './logo.svg';
import React from 'react';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import './App.css';

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <div>
      <h3>First Name: {user.firstName}</h3>
      <h3>First Name: {user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals}/>
    </div>
    
  );
}

export default App;
