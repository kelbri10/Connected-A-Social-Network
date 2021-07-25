import React from 'react';
import './App.css';
import CreateAccount from './components/CreateAccount';
import LoginForm from './components/LoginForm';
import DisplayProfile from './components/Profile';

function App() {
  return (
    <div className="App">
      <DisplayProfile />
    </div>
  );
}

export default App;
