import React, { Component } from 'react'
import LoginForm from '../components/sessions/LoginForm';
import SignupForm from '../components/sessions/SignupForm';
import { Route } from 'react-router-dom';

export default class SessionsContainer extends Component {
    render() {
        return (
            <React.Fragment>
              <Route exact path='/login' render={props => <LoginForm {...props} />} />
              <Route exact path='/signup' render={props => <SignupForm {...props} />} />
            </React.Fragment>
        )
    }
}
