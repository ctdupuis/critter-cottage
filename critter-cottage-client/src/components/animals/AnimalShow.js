import React from 'react';
import Media from 'react-bootstrap/Media';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const AnimalShow = ({ animals, match, removeAnimal, history, currentUser }) => {
    const genderSym = {
        'Male': '♂',
        'Female': '♀'
    }
   
    const animal = animals.find(animal => animal.id === parseInt(match.params.animalID))
    
    const renderCard = animal => {
        return(
            <Media>
            <img
              width={200}
              height={200}
              className="mr-3"
              src={`http://localhost:3001/${animal.image_url}`}
              alt={`${animal.name}`}
            />
            <Media.Body>
              <h2>{animal.name} {genderSym[animal.gender]}</h2>
              <h3>{animal.breed}</h3>
              <p>
                {animal.bio}
              </p>
            <Button onClick={() => sendToAdopt(history)}>Fill Out Adoption Form</Button>
            </Media.Body>
          </Media>
        )
    }

    const sendToEdit = (history) => {
        return history.push(`/animals/${animal.id}/edit`)
    }

    const sendToAdopt = history => {
        return history.push(`/animals/${animal.id}/adopt`)
    }

    const renderAdminLinks = (animal) => {
        
        if (animal && currentUser && currentUser.admin) {
            return(
                <>
                    <Button onClick={() => sendToEdit(history)}> 
                        Edit 
                    </Button>
                    <Button variant="danger"
                        onClick={ () => {
                            removeAnimal(animal.id)
                            history.push('/animals')
                        }
                    }> Delete </Button>
                    
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