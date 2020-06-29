import React, { Component } from 'react'
import LoginForm from '../components/sessions/LoginForm';
import SignupForm from '../components/sessions/SignupForm';
import { Route } from 'react-router-dom';
import { signup } from '../actions/sessions';
import { connect } from 'react-redux';

class SessionsContainer extends Component {
    render() {
        return (
            <React.Fragment>
              <Route exact path='/login'
               render={props => <LoginForm  {...props} />} />
              <Route exact path='/signup'
               render={props => <SignupForm signup={this.props.signup} {...props} />} />
            </React.Fragment>
        )
    }
}

export default connect(state => ({help: state.userReducer}), { signup })(SessionsContainer);