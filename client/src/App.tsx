import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import ProfileDetails from './components/ProfileDetails';
import UserProfile from './components/UserProfile'; 
import HomeFeed from './components/HomeFeed';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path= '/' component={LoginForm}/>
          
        <Route path='/accounts/signup' component={SignUp} />
        <Route path='/profiles/update' component={ProfileDetails} />
        <Route path='/profile' component={UserProfile} />
        <Route path='/home' component={HomeFeed} /> 
      </Switch>
    </div>
  );
}

export default App;
