import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import ProfileDetails from './components/ProfileDetails';
import AccountDetails from './components/AccountDetails';
import UserProfile from './components/UserProfile'; 

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LoginForm}/>
        <Route path='/accounts/signup' component={AccountDetails} />
        <Route path='/profiles/update' component={ProfileDetails} />
        <Route path='/profile' component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;
