import React from 'react';
import { Link } from 'react-router-dom';

const AnimalCard = ({ animal }) => {

    const { id, name, species, breed, gender } = animal

    const genderSym = {
        'Male': '♂',
        'Female': '♀'
    }

    return(
        <div>
            <Link to={`animals/${id}`}>{name} | {species}: {breed} | {genderSym[gender]} </Link>
        </div>
    )
}

export default AnimalCard;