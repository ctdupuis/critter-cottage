import React, { Component, Fragment } from 'react';
import './App.css';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AnimalsContainer from './containers/AnimalsContainer';
import { connect } from 'react-redux'
import SessionsContainer from './containers/SessionsContainer';
import NavBar from './components/NavBar'
import LoginForm from './components/sessions/LoginForm';
import SignupForm from './components/sessions/SignupForm'
import { loginStatus } from './actions/sessions'
import axios from 'axios'


class App extends Component {
  
  componentDidMount() {
    // axios.get('http://localhost:3001/logged_in', { withCredentials: true }).then(res => console.log(res.data))
    this.getStatus();
  }

  componentDidUpdate() {
    // axios.get('http://localhost:3001/logged_in', { withCredentials: true }).then(res => console.log(res.data))
    this.getStatus()
  }

  async getStatus() {
    const resp = await axios.get('http://localhost:3001/logged_in', { withCredentials: true })
    const data = resp.data
    console.log(data)
  }

  render() {
    return(
    <Router>
      <Fragment>
        <SessionsContainer />
        <Route exact path='/' component={Home}  />
        <Route path='/animals' render={routerProps => <AnimalsContainer  {...routerProps} />} />
      </Fragment>
    </Router>
    )
  }
}

const mapStateToProps = state => {
    return {
      currentUser: state.userReducer.currentUser
    }
}

export default connect(mapStateToProps)(App);
