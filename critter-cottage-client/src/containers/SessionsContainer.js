import React, { Component } from 'react'
import LoginForm from '../components/sessions/LoginForm';
import SignupForm from '../components/sessions/SignupForm';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import Profile from '../components/sessions/Profile';
import { getLoginStatus, login, signup, endSession } from '../actions/sessions';
import ReqContainer from '../containers/ReqContainer';

class SessionsContainer extends Component {

    componentDidMount() {
        this.props.getLoginStatus()
    }

    render() {
        return (
            <React.Fragment>

                <NavBar 
                    currentUser={this.props.currentUser}
                    endSession={this.props.endSession} 
                />

                <Route exact path='/login'
                    render={props => 
                        (!this.props.currentUser) ?
                            <LoginForm 
                                login={this.props.login} 
                                errors={this.props.errors} 
                                {...props} 
                            /> 
                            :
                            <Redirect to={'/profile'} />
                    } 
                />
                
                <Route exact path='/signup'
                    render={props => 
                        (!this.props.currentUser) ? 
                            <SignupForm 
                                signup={this.props.signup} 
                                {...props} 
                            />  
                            : 
                            <SignupForm 
                                signup={this.props.signup} 
                                errors={this.props.errors} 
                            /> 
                    }
                />

                <Route exact path='/profile'
                    render={props => 
                        (this.props.currentUser) ? 
                        <>
                            <Profile 
                                user={this.props.currentUser} 
                                {...props} 
                            /> 
                            <ReqContainer 
                                currentUser={this.props.currentUser} 
                                requests={this.props.requests} 
                                {...props} 
                            />
                        </>
                        : 
                        <Redirect to={'/login'} 
                            errors={this.props.errors} 
                        /> 
                    }
                />

            </React.Fragment>
        )
    }
}

export default connect(
    state => ({ 
        currentUser: state.userReducer.currentUser,
        requests: state.reqReducer.requests
    }),
    { 
        getLoginStatus,
        login,
        signup,
        endSession
    }
    )(SessionsContainer);

