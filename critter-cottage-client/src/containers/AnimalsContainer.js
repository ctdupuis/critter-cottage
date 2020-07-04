import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnimalInput from '../components/animals/AnimalInput'
import AnimalsPage from '../components/animals/AnimalsPage'
import AnimalShow from '../components/animals/AnimalShow';
import { Route, Switch } from 'react-router-dom';
import { fetchAnimals, addAnimal } from '../actions/animals'


class AnimalsContainer extends Component {

    componentDidMount() {
        if (this.props.animals.length < 1) {
            this.props.fetchAnimals()
        }
    }

    render() {
        return (
            <React.Fragment>
                <Switch>

                    <Route exact path={'/animals'} 
                        render={routerProps => <AnimalsPage animals={this.props.animals} currentUser={this.props.currentUser} {...routerProps} />} />
                    <Route exact path={'/animals/new'} 
                        render={routerProps => <AnimalInput addAnimal={this.props.addAnimal} {...routerProps} />} /> 
                    <Route exact path={'/animals/:animalID'} 
                        render={routerProps => <AnimalShow {...routerProps} animals={this.props.animals} />} />

                </Switch>
            </React.Fragment>
        )
    }
}

export default connect(state => ({animals: state.animalReducer.animals, currentUser: state.userReducer.currentUser}), { fetchAnimals, addAnimal })(AnimalsContainer);