import React from 'react';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const AnimalCard = ({ animal }) => {

    const { id, name, species, breed, gender, image_url } = animal

    const genderSym = {
        'Male': '♂',
        'Female': '♀'
    }

    return(
            <Card style={{ width: '18rem'}} margin={25} border={75}>             
                    <Card.Img variant="top" width={300} height={300} src={`http://localhost:3001/${image_url}`} />               
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{breed}</Card.Subtitle><Card.Subtitle align={'right'}>{genderSym[gender]}</Card.Subtitle>
                    <NavLink to={`/animals/${id }`}>
                        <Card.Link as={'div'}>Details About {name}</Card.Link>
                    </NavLink>
                </Card.Body>
            </Card>
    )
}

export default AnimalCard;