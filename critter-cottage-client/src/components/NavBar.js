import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(<div>
        <Link to='/'>Home</Link> || 
        <Link to='/animals'>See Animals</Link> || 
        <Link to='/login'>Log In</Link> || 
        <Link to='/signup'>Sign Up</Link>
    </div>)
}

export default NavBar;