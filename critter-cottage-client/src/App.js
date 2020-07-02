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
import axios from 'axios'


class App extends Component {
  
  // shouldComponentUpdate() {
  //   this.checkState()
  // }

  // checkState() {
  //   if (this.props.currentUser.email) { return true } else { return false }
  // }

  componentDidMount() {
    // axios.get('http://localhost:3001/logged_in', { withCredentials: true }).then(res => console.log(res.data))
    // this.getStatus();
    this.props.getLoginStatus();
  }

  // componentDidUpdate() {
  //   // axios.get('http://localhost:3001/logged_in', { withCredentials: true }).then(res => console.log(res.data))
  //   // this.getStatus()
  //   this.props.getLoginStatus();
  // }

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
