import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';

const AnimalShow = ({ animals, match, removeAnimal, history, currentUser }) => {
    const genderSym = {
        'Male': '♂',
        'Female': '♀'
    }
    const container = {
        height: "auto",
        width: "30%",
        padding: 20,
        border: 20,
        margin: "0 auto"
    }
    const imgStyle = {
        height: "auto",
        width: "100%",
        border: 5
    }
   
    const animal = animals.find(animal => animal.id === parseInt(match.params.animalID))
    
    const renderCard = animal => {
        return(
        // <div>
        //     <span>{animal.name} ({genderSym[animal.gender]})</span>
        //     <span>{animal.species}: {animal.breed}</span>
        //     <br />
        //     <span>About {animal.name}: {animal.bio}</span>
        //     <div className='img-container' style={container}>
        //         <img src={`http://localhost:3001/${animal.image_url}`} alt={animal.name} style={imgStyle} />
        //     </div>
        //     <br/>
        //     <Link to={`/animals/${animal.id}/adopt`}>Request to Adopt</Link>
        // </div>
        <Card style={{ width: '35rem'}}>
            <Card.Img width={300} height={300} src={`http://localhost:3001/${animal.image_url}`} />
            <Card.Body>
                <Card.Title>{animal.name}</Card.Title>
                <Card.Subtitle>{animal.breed}</Card.Subtitle>
                <Card.Subtitle align={'right'}>{genderSym[animal.gender]}</Card.Subtitle>
                <Card.Text>{animal.bio}</Card.Text>
            </Card.Body>
            <Link to={`/animals/${animal.id}/adopt`}>Request to Adopt</Link>
        </Card>
        )
    }

    const sendtoEdit = () => {
        return <Redirect to={`/animals/${animal.id}/edit`} animal={animal} />
    }
    const renderAdminLinks = (animal) => {
        
        if (animal && currentUser && currentUser.admin) {
            return(
                <>
                    <Button onClick={sendtoEdit}> 
                        Edit 
                    </Button>
                    <Button variant="danger"
                        onClick={ () => {
                            removeAnimal(animal.id)
                            history.push('/animals')
                        }}> Delete </Button>
                    
                </>
            )
        }
    }

    return(
        <Container className="justify-content-md-center">
            {animal ? renderCard(animal) : <p>AnimalShow Component</p>}
            <br />
            {renderAdminLinks(animal)}
        </Container>
    )
}

export default AnimalShow;