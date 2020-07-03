import React, { Component, Fragment } from 'react';
import './App.css';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import AnimalsContainer from './containers/AnimalsContainer';
import AnimalInput from './components/animals/AnimalInput';
import AnimalShow from './components/animals/AnimalShow';
import AnimalsPage from './components/animals/AnimalsPage'
import { connect } from 'react-redux'
import SessionsContainer from './containers/SessionsContainer';
import { getLoginStatus } from './actions/sessions'
import NavBar from './components/NavBar';
import LoginForm from './components/sessions/LoginForm';
import SignupForm from './components/sessions/SignupForm';
import Profile from './components/sessions/Profile'


class App extends Component {

 
  render() {
    return(
    
      <Fragment>

        <NavBar currentUser={this.props.currentUser} />

        <SessionsContainer />
        <AnimalsContainer />
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/animals'} 
          render={routerProps => <AnimalsPage animals={this.props.animals} currentUser={this.props.currentUser} {...routerProps} />} />
        <Route exact path={'/animals/new'} component={AnimalInput} /> 
        <Route exact path={'/animals/:animalID'} 
          render={routerProps => <AnimalShow {...routerProps} animals={this.props.animals} />} />
        <Route exact path='/login'
          render={props => <LoginForm errors={this.props.errors} currentUser={this.props.currentUser} {...props} />} />
        <Route exact path='/signup'
          render={props => (!this.props.currentUser.email) ? <SignupForm user={this.props.currentUser} {...props} />  : <Redirect to={'/signup'} errors={this.props.errors} /> }
        />
        <Route exact path='/profile'
          render={props => (this.props.currentUser.email) ? <Profile user={this.props.currentUser} {...props} /> : <Redirect to={'/login'} errors={this.props.errors} /> }
        />

      </Fragment>
    
    )
  }
}

const mapStateToProps = state => {
    return {
      currentUser: state.userReducer.currentUser,
      animals: state.animalReducer.animals,
      errors: state.userReducer.errors
    }
}

export default connect(mapStateToProps)(App);
