import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = props => {
    const renderLinks = () => {
        if (JSON.stringify(props.currentUser) === '{}') {
            return(<div>
                <Link to='/'>Home</Link> || 
                <Link to='/animals'>See Animals</Link> || 
                <Link to='/login'>Log In</Link> || 
                <Link to='/signup'>Sign Up</Link>
            </div>)
        } else {
            return(<div>
                <Link to='/'>Home</Link> || 
                <Link to='/animals'>See Animals</Link> ||
                <h4>Welcome, {props.currentUser.f_name} {props.currentUser.l_name}</h4>
                <Link to='/logout'>Log Out</Link>
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