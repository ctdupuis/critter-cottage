import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


const NavBar = ({ currentUser, endSession }) => {

    if (!currentUser) {
        return(<>
            <Navbar bg='primary' variant='dark'>
                <Navbar.Brand href='/'>Critter Cottage</Navbar.Brand>
                <Nav className="mr-auto" className="justify-content-end">
                    <Nav.Link href="/animals">See Animals</Nav.Link>
                    <Nav.Link href="/signup">Create Account</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Navbar>
        </>)
    } else {
        return(<>
            <Navbar bg='primary' variant='dark'>
                <Navbar.Brand href='/'>Critter Cottage</Navbar.Brand>
                <Nav className="mr-auto" className="justify-content-end">
                        <Nav.Link href="/animals">See Animals</Nav.Link>
                        <Nav.Link href="/profile">My Profile</Nav.Link>
                        <Nav.Link href="/" onClick={() => endSession()}>Log Out</Nav.Link>
                </Nav>
            </Navbar>
        </>)
    }
}

export default NavBar;