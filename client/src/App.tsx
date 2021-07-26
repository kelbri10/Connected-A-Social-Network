import React from 'react';
import './App.css';
import CreateAccount from './components/CreateAccount';
import LoginForm from './components/LoginForm';
import DisplayProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <CreateAccount />
    </div>
  );
}

export default App;
