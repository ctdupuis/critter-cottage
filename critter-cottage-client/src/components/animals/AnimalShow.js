import React from 'react';
import { Link } from 'react-router-dom';

const AnimalShow = ({ animals, match }) => {
    console.log('AnimalShow rendered')
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
        return(<div>
            <span>{animal.name} ({genderSym[animal.gender]})</span>
            <span>{animal.species}: {animal.breed}</span>
            <br />
            <span>About {animal.name}: {animal.bio}</span>
            <div className='img-container' style={container}>
                <img src={`http://localhost:3001/${animal.image_url}`} alt={animal.name} style={imgStyle} />
            </div>
            <Link to={`${animal.id}/edit`}>Link to Edit Page</Link>
        </div>)
    }

    return(
        <React.Fragment>
            {animal ? renderCard(animal) : <p>AnimalShow Component</p>}
        </React.Fragment>
    )
}

export default AnimalShow;