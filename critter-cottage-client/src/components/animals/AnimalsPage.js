import React from 'react';
import AnimalCard from './AnimalCard';
import { Link } from 'react-router-dom';


const AnimalsPage = ({ animals, currentUser }) => {
    const renderAnimals = animals.map(animal => {
        return (<AnimalCard key={animal.id} animal={animal} />)
    })

    const renderFormLink = () => {
        if (currentUser && currentUser.admin) {
            return <Link to={'/animals/new'}>Add a New Animal</Link>
        }
    }

    return(
        <React.Fragment>
            {renderAnimals}
            <br />
            {renderFormLink()}
        </React.Fragment>
    )
}

export default AnimalsPage;