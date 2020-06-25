import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    componentDidMount() {
        console.log('Fetch and store animals here IF NOT ALREADY DONE')
    }

    render() {
        return (
            <div>
                Welcome to Critter Cottage!
                <Link to={'/animals'}>See Animals</Link>
            </div>
        )
    }
}
