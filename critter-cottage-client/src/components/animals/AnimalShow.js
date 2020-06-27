import React from 'react';

const AnimalShow = ({ animals, match }) => {
    const genderSym = {
        'Male': '♂',
        'Female': '♀'
    }
    const animal = animals.find(animal => animal.id === parseInt(match.params.animalID))
    const renderCard = animal => {
        return(<div>
            <span>{animal.name} ({genderSym[animal.gender]})</span>
            <span>{animal.species}: {animal.breed}</span>
        </div>)
    }
    return(
        <React.Fragment>
            {animal ? renderCard(animal) : <p>Loading...</p>}
        </React.Fragment>
    )
}

export default AnimalShow;