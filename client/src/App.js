import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Home from './containers/Home';
import NavBar from './components/NavBar';
import React, { useState, useEffect } from 'react';
import Signup from './components/Signup'
import Login from './components/Login'
import Beaches from './containers/Beaches'
import Beach from './containers/Beach'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [errors, setErrors] = useState("")
  const history = useHistory()

  useEffect(() => {
    fetch('/me')
    .then( res => {
      if (res.ok) {
        res.json()
        .then(u => {
          setLoggedIn(true)
          setUser(u) 
        })
      }
    }
      
    )
    
  }, [])

  const signUpUser = (user) => {
    if (!user.errors) { 
    setLoggedIn(true)
      setUser(user)
      history.push('/')
    }
    else {
      setErrors(user.errors)
      history.push('/signup')
    }
  }

  const logOutUser = () => {
    fetch('/logout', {
      method: "DELETE"
    })
    .then(() => {
      console.log("logged out")
      setLoggedIn(false)
      setUser({})
    })
    history.push('/')
  }

  return (
    <div className="App">
        <NavBar user={user} loggedIn={loggedIn} logOutUser={logOutUser}/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' render={routerProps => <Signup {...routerProps} errors={errors} onSignup={signUpUser}  />  } />
          <Route exact path='/login' render={routerProps => <Login {...routerProps} onLogin={signUpUser}  />  } />
          <Route exact path='/beaches' render={routerProps => <Beaches {...routerProps} user={user} loggedIn={loggedIn}/>}/>
          <Route path='/beaches/:id' component={Beach}/>
        </Switch>
    </div>
  );
}

export default App;
