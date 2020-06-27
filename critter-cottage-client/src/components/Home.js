import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    componentDidMount() {
        console.log('hellow')
    }

    render() {
        return (
            <div>
                Welcome to Critter Cottage!
                <Link to={'/animals'}>See Animals</Link>
                |
                <Link to={'/login'}>Log In</Link>
                |
                <Link to={'/signup'}>Sign Up</Link>
            </div>
        )
    }
}
