import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AnimalCard extends Component {
    render() {
        const { animal } = this.props
        const genderSym = {
            'Male': '♂',
            'Female': '♀'
        }
        return (
            <div>
                <div>
                    <Link to={`/animals/${animal.id}`}>{animal.name} | {animal.species}: {animal.breed} | {genderSym[animal.gender]} </Link>
                </div>
            </div>
        )
    }
}
