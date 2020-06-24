import React from 'react';
import './App.css';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import AnimalsContainer from './containers/AnimalsContainer';


function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/animals' component={AnimalsContainer} />
      </div>
    </Router>
  );
}

export default App;
