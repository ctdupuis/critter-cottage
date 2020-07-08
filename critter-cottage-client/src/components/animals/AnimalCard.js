import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const AnimalCard = ({ animal }) => {

    const { id, name, species, breed, gender, image_url } = animal

    const genderSym = {
        'Male': '♂',
        'Female': '♀'
    }

    return(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`http://localhost:3001/${image_url}`} />
                <Card.Body>
                    <Card.Title>{name} | {genderSym[gender]}</Card.Title>
                    <Card.Subtitle>{breed}</Card.Subtitle>
                    <Card.Link href={`/animals/${id}`}>See {name}'s Page</Card.Link>
                </Card.Body>
            </Card>
    )
}

export default AnimalCard;