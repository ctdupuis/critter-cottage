import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const NavBar = () => {
    // console.log('hello')
    return(<div>
        {/* {props} */}
        <Link to='/'>Home</Link> || 
        <Link to='/animals'>See Animals</Link> || 
        <Link to='/login'>Log In</Link> || 
        <Link to='/signup'>Sign Up</Link>
    </div>)
}

export default NavBar;