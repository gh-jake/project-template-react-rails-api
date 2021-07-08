import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Home from './containers/Home';
import NavBar from './components/NavBar';
import React, { useState, useEffect } from 'react';
import Signup from './components/Signup'

function App() {
  const [loggedIn, setLoggedIn] = setState(false)
  const [user, setUser] = useState({})
  const history = useHistory()
  
  const signUpUser = (user) => {
    setLoggedIn(true)
    setUser(user)
    history.push('/')
  }

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='signup' render={routerProps => <Signup {...routerProps} onSignup={signUpUser}  />  } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
