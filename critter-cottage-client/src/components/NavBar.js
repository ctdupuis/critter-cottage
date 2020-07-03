import React from 'react';
import { Link } from 'react-router-dom';
import { endSession } from '../actions/sessions'
import { connect } from 'react-redux'


const NavBar = props => {

    const renderLinks = () => {
        if (!props.currentUser) {
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
                <Link to='/' onClick={props.endSession}>Log Out</Link>
            </div>)
        }
    }

   

    return(
        <div>
            {renderLinks()}
        </div>
    )
}

export default connect(null, { endSession })(NavBar)