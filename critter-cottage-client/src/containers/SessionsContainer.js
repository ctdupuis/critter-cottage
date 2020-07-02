import React, { Component } from 'react'
import LoginForm from '../components/sessions/LoginForm';
import SignupForm from '../components/sessions/SignupForm';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import Profile from '../components/sessions/Profile';
import { endSession } from '../actions/sessions';

class SessionsContainer extends Component {
    render() {
        return (
            <React.Fragment>
            <NavBar endSession={endSession} currentUser={this.props.user} />
              <Route exact path='/login'
               render={props => <LoginForm  {...props} />} />
              <Route exact path='/signup'
               render={props => <SignupForm  {...props} />} />
               <Route exact path='/profile'
               render={props => <Profile user={this.props.user} {...props} /> } />
            </React.Fragment>
        )
    }
}

export default connect(state => ({ user: state.userReducer.currentUser }), { endSession })(SessionsContainer);