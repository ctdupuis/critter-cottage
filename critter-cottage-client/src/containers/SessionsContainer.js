import React, { Component } from 'react'
import LoginForm from '../components/sessions/LoginForm';
import SignupForm from '../components/sessions/SignupForm';
import { Route } from 'react-router-dom';
// import { login, signup } from '../actions/sessions';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

class SessionsContainer extends Component {
    render() {
        return (
            <React.Fragment>
            <NavBar currentUser={this.props.user} />
              <Route exact path='/login'
               render={props => <LoginForm  {...props} />} />
              <Route exact path='/signup'
               render={props => <SignupForm  {...props} />} />
            </React.Fragment>
        )
    }
}

export default connect(state => ({ user: state.userReducer.currentUser }))(SessionsContainer);