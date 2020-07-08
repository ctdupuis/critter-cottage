import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

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
                    <Card.Link href={`/animals/${id}`}>Details About {name}</Card.Link>
                </Card.Body>
            </Card>
    )
}

export default AnimalCard;