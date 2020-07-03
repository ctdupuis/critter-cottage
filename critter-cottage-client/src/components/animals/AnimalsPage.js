import React from 'react'
import AnimalCard from './AnimalCard'
import { Link } from 'react-router-dom'


const AnimalsPage = ({ animals }) => {
    console.log('AnimalsPage rendered')
    const renderAnimals = animals.map(animal => {
        return (<AnimalCard key={animal.id} animal={animal} />)
    })
    // const renderAnimals = Object.keys(animals).map(animalID => {
    //     return(<Link key={animalID} to={`/animals/${animalID}`}>{animals[animalID].name}</Link>)
    // })
    return(
        <React.Fragment>
            {renderAnimals}
            <br />
            <Link to={'/animals/new'}>New Animal Form</Link>
        </React.Fragment>
    )
}

export default AnimalsPage;