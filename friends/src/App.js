import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Login from './components/Login'
import FriendsList from './components/FriendsList'

import { axiosWithAuth } from './utils/axiosWithAuth'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const logout = () => {
    axiosWithAuth()
      .post('/logout')
      .then(res => {
        localStorage.removeItem('token')
        window.location.href='/login'
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  return (
    <Router>
      <div className='App'>
        <Link to='/login'>Login</Link> | 
        <Link to='' onClick={logout}>Logout</Link> | 
        <Link to='/friends'>Friends</Link>
        <Switch>
          <PrivateRoute exact path='/friends' component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default App