import React, { Fragment } from 'react';
import './App.css';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import AnimalsContainer from './containers/AnimalsContainer';
import { connect } from 'react-redux'
import SessionsContainer from './containers/SessionsContainer';
import NavBar from './components/NavBar'


function App() {

  return (
    <Router>
      <Fragment>
        <NavBar currentUser={this.props.currentUser} />
        <Route exact path='/' component={Home}  />
        <Route path='/animals' render={routerProps => <AnimalsContainer  {...routerProps} />} />
        <SessionsContainer />
      </Fragment>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.userReducer.currentUser
  }
}

export default connect(mapStateToProps)(App);
