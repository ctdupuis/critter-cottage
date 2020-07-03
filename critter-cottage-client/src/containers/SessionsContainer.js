import React, { Component } from 'react'
import LoginForm from '../components/sessions/LoginForm';
import SignupForm from '../components/sessions/SignupForm';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import Profile from '../components/sessions/Profile';
import { endSession } from '../actions/sessions';
import { getLoginStatus } from '../actions/sessions'

class SessionsContainer extends Component {
    componentDidMount() {
        this.props.getLoginStatus()
    }

    render() {
        return (
            <React.Fragment>
                <NavBar currentUser={this.props.currentUser} />
                <Route exact path='/login'
                    render={props => <LoginForm login={this.props.login} errors={this.props.errors} currentUser={this.props.currentUser} {...props} />} />
                <Route exact path='/signup'
                    render={props => (!this.props.currentUser) ? <SignupForm user={this.props.currentUser} {...props} />  : <SignupForm errors={this.props.errors} /> }
                />
                <Route exact path='/profile'
                    render={props => (this.props.currentUser) ? <Profile user={this.props.currentUser} {...props} /> : <Redirect to={'/login'} errors={this.props.errors} /> }
                />
            </React.Fragment>
        )
    }
}

export default connect(state => ({ currentUser: state.userReducer.currentUser }), { getLoginStatus })(SessionsContainer);