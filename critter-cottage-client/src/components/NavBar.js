import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'


const NavBar = props => {

    const dispatch = useDispatch()

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
                <Link to='/profile'>My Profile</Link> ||
                <Link to='/' onClick={props.endSession()}>Log Out</Link>
                {/* <button onClick={props.endSession}>Log Out</button> */}
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