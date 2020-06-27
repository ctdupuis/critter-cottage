import React, { Component } from 'react'
import Animal from './Animal'
import { Link } from 'react-router-dom';

export default class Animals extends Component {
    render() {
        const animals = this.props.animals.map((animal, index) => {
            return(<Animal key={animal[index].id} animal={animal[index]} />)
        })
        return (
            <div>
                {animals}
                <Link to={'/animals/new'}>New Animal Form</Link>
                <Link to={'/'}>Home</Link>
            </div>
        )
    }
}
