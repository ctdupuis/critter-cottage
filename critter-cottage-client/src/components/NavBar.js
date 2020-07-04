import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, endSession }) => {

    const renderLinks = () => {
        if (!currentUser) {
            return(<div>
                <Link to='/'>Home</Link> || 
                <Link to='/animals'>See Animals</Link> || 
                <Link to='/login'>Log In</Link> || 
                <Link to='/signup'>Sign Up</Link>
            </div>)
        } else {
            return(<div>
                <Link to='/'>Home</Link> || 
                <Link to={'/animals'}>See Animals</Link> ||
                <Link to={'/profile'}>My Profile</Link> ||
                <Link to='/' onClick={() => endSession()}>Log Out</Link>
            </div>)
        }
    }

   

    return(
        <div>
            {renderLinks()}
        </div>
    )
}

export default NavBar;