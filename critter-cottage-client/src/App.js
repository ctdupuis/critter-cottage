import React from 'react';
import './App.css';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import AnimalsContainer from './containers/animals/AnimalsContainer';
import { connect } from 'react-redux'


function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/animals' render={routerProps => <AnimalsContainer {...routerProps} />} />
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(App);
