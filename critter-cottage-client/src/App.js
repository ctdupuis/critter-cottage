import React, { Component, Fragment } from 'react';
import './App.css';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import AnimalsContainer from './containers/AnimalsContainer';
import { connect } from 'react-redux'
import SessionsContainer from './containers/SessionsContainer';
import { getLoginStatus, endSession } from './actions/sessions'


class App extends Component {

  componentDidMount() {
    this.props.getLoginStatus();
  }

  render() {
    return(
    <Router>
      <Fragment>
        <SessionsContainer />
        <Route exact path='/' component={Home} endSession={endSession} />
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

export default connect(mapStateToProps, { getLoginStatus, endSession })(App);
