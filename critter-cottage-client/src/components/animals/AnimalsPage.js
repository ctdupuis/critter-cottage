import React from 'react';
import AnimalCard from './AnimalCard';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';


const AnimalsPage = ({ animals, currentUser, history }) => {
    const renderAnimals = animals.map(animal => {
        return (<AnimalCard key={animal.id} animal={animal} />)
    })

    const renderFormLink = () => {
        if (currentUser && currentUser.admin) {
            return (
                <Button onClick={() => history.push('/animals/new') }>Add a New Friend</Button>
            )
        }
    }

    return(
        <Container>
            <Row className="justify-content-md-center">
                {renderAnimals}
                <br />
            </Row>
                {renderFormLink()}
        </Container>
    )
}

export default AnimalsPage;