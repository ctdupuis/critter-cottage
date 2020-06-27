import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnimalInput from '../../components/animals/AnimalInput'
import AnimalsPage from '../../components/animals/AnimalsPage'
import { Route } from 'react-router-dom';
import { fetchAnimals } from '../../actions/animals'
import AnimalShow from '../../components/animals/AnimalShow';


class AnimalsContainer extends Component {

    componentDidMount() {
        if (this.props.animals.length < 1 ) {
            this.props.fetchAnimals()
        }
    }

    render() {
        return (
            <React.Fragment>
            <Route exact path={'/animals/new'} render={routerProps => <AnimalInput {...routerProps} addAnimal={this.props.addAnimal}/> } />
            <Route exat path={'/animals/:animalID'} render={routerProps => <AnimalShow {...routerProps} animals={this.props.animals} />} />
            <Route exact path={'/animals'} render={routerProps => <AnimalsPage {...routerProps} animals={this.props.animals} />} />
            </React.Fragment>
        )
    }
}

export default connect(state => ({animals: state.animalReducer.animals}), { fetchAnimals })(AnimalsContainer);