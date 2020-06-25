import React, { Component } from 'react'
import Animal from './Animal'
import { Link } from 'react-router-dom';

export default class Animals extends Component {
    render() {
        return (
            <div>
                <Link to={'/animals/new'}>New Animal Form</Link>
                {this.props.animals.map(animal => {
                    return(<Animal key={animal.id} animal={animal} />)
                })}
                <Link to={'/'}>Home</Link>
            </div>
        )
    }
}
