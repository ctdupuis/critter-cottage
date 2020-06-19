import React from 'react';
import './App.css';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Route path='/' component={Home} />
      </div>
    </Router>
  );
}

export default App;
