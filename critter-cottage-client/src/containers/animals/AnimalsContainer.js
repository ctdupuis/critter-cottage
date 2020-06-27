import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnimalInput from '../../components/animals/AnimalInput'
import Animals from '../../components/animals/Animals'
import { Route } from 'react-router-dom';

class AnimalsContainer extends Component {

    componentDidMount() {
        if (this.props.animals.length < 1) {
            fetch('http://localhost:3001/animals')
            .then(r => r.json())
            .then(animals => this.props.storeAnimals(animals))
        }
    }

    render() {
        return (
            <div>
            <Route exact path={'/animals/new'} render={(routerProps) => <AnimalInput {...routerProps} addAnimal={this.props.addAnimal}/> } />
            <Route exact path={'/animals'} render={() => <Animals animals={this.props.animals} />} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        animals: state.animals
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addAnimal: animal => dispatch({type: 'ADD_ANIMAL', animal}),
        storeAnimals: animals => dispatch({type: 'STORE_ANIMALS', animals})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AnimalsContainer)