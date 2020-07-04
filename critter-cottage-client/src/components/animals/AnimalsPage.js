import React from 'react'
import AnimalCard from './AnimalCard'
import { Link } from 'react-router-dom'


const AnimalsPage = ({ animals} ) => {
    const renderAnimals = animals.map(animal => {
        return (<AnimalCard key={animal.id} animal={animal} />)
    })

    return(
        <React.Fragment>
            {renderAnimals}
            <br />
            <Link to={'/animals/new'}>New Animal Form</Link>
        </React.Fragment>
    )
}

export default AnimalsPage;