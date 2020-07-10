import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';


const NavBar = ({ currentUser, endSession }) => {

    if (!currentUser) {
        return(<>
            <Navbar bg='primary' variant='dark' sticky='top'>
                <Navbar.Brand href='/'>Critter Cottage</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Link to='/'>
                        <Nav.Link as={'div'}>Home</Nav.Link>
                    </Link>
                    <Link to='/animals'>
                        <Nav.Link as={"div"}>See Animals</Nav.Link>
                    </Link>
                    <Link to='/signup'>
                        <Nav.Link as={"div"}>Create Account</Nav.Link>
                    </Link>
                    <Link to='/login'>
                        <Nav.Link as={"div"}>Log In</Nav.Link>
                    </Link>
                </Nav>
            </Navbar>
        </>)
    } else {
        return(<>
            <Navbar bg='primary' variant='dark' sticky="top">
                <Navbar.Brand>Critter Cottage</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Link to='/'>
                        <Nav.Link as={'div'}>Home</Nav.Link>
                    </Link>
                    <Link to='/animals'>
                        <Nav.Link as={"div"}>See Animals</Nav.Link>
                    </Link>
                    <Link to='/profile'>
                        <Nav.Link as={"div"}>My Profile</Nav.Link>
                    </Link>
                    <Nav.Link href="/" onClick={() => endSession()}>Log Out</Nav.Link>
                </Nav>
            </Navbar>
        </>)
    }
}

export default NavBar;