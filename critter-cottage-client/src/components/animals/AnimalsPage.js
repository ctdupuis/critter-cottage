import React from 'react'
import AnimalCard from './AnimalCard'


const AnimalsPage = ({ animals }) => {
    const renderAnimals = animals.map(animal => {
        return (<AnimalCard key={animal.id} animal={animal} />)
    })
    // const renderAnimals = Object.keys(animals).map(animalID => {
    //     return(<Link key={animalID} to={`/animals/${animalID}`}>{animals[animalID].name}</Link>)
    // })
    return(
        <React.Fragment>
            {renderAnimals}
        </React.Fragment>
    )
}

export default AnimalsPage;