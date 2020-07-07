import React, { Component, Fragment } from 'react';
import './App.css';
import Home from './components/Home'
import { Route } from 'react-router-dom';
import AnimalsContainer from './containers/AnimalsContainer';
import SessionsContainer from './containers/SessionsContainer';
// import AnimalInput from './components/animals/AnimalInput';
// import AnimalShow from './components/animals/AnimalShow';
// import AnimalsPage from './components/animals/AnimalsPage'
// import { connect } from 'react-redux'
// import { getLoginStatus } from './actions/sessions'
// import NavBar from './components/NavBar';
// import LoginForm from './components/sessions/LoginForm';
// import SignupForm from './components/sessions/SignupForm';
// import Profile from './components/sessions/Profile'


class App extends Component {


 
  render() {
    return(
    
      <Fragment>

        <SessionsContainer />
        <AnimalsContainer />
        <Route exact path={'/'} component={Home} />

      </Fragment>
    
    )
  }
}

// const mapStateToProps = state => {
//     return {
//       currentUser: state.userReducer.currentUser,
//       animals: state.animalReducer.animals,
//       errors: state.userReducer.errors
//     }
// }

// export default connect(mapStateToProps)(App);
export default App;
