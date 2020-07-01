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


class App extends Component {
  
  componentDidMount() {
    loginStatus();
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
