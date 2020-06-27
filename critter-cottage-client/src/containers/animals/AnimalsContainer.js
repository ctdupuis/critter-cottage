import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnimalInput from '../../components/animals/AnimalInput'
import Animals from '../../components/animals/Animals'
import { Route } from 'react-router-dom';
import { fetchAnimals } from '../../actions/animals'


class AnimalsContainer extends Component {

    componentDidMount() {
        if (this.props.animals.length < 1 ) {
            this.props.fetchAnimals()
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

export default connect(state => ({animals: state.animalReducer.animals}), { fetchAnimals })(AnimalsContainer);