import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnimalInput from '../components/animals/AnimalInput';
import AnimalsPage from '../components/animals/AnimalsPage';
import AnimalShow from '../components/animals/AnimalShow';
import AnimalEdit from '../components/animals/AnimalEdit';
import { Route, Switch } from 'react-router-dom';
import { fetchAnimals, addAnimal, updateAnimal, removeAnimal } from '../actions/animals';


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

                    <Route exact path={'/animals/new'} 
                        render={routerProps => 
                        <AnimalInput {...routerProps} 
                            addAnimal={this.props.addAnimal}  />} 
                    /> 

                    <Route exact path={'/animals/:animalID'} 
                        render={routerProps => 
                        <AnimalShow {...routerProps} 
                            animals={this.props.animals}
                            removeAnimal={this.props.removeAnimal} />} 
                    />

                    <Route exact path={'/animals/:animalID/edit'}
                        render={routerProps => 
                        <AnimalEdit {...routerProps} 
                            animals={this.props.animals} 
                            updateAnimal={this.props.updateAnimal} />} 
                    />

                    <Route exact path={'/animals'} 
                        render={routerProps => 
                        <AnimalsPage {...routerProps} 
                            animals={this.props.animals} 
                            currentUser={this.props.currentUser} 
                            removeAnimal={this.props.removeAnimal} />} 
                    />

                </Switch>
            </React.Fragment>
        )
    }
}

export default connect(
    state => ({
        animals: state.animalReducer.animals,
        currentUser: state.userReducer.currentUser
    }),
    { 
        fetchAnimals, 
        addAnimal, 
        updateAnimal, 
        removeAnimal 
    }
)(AnimalsContainer);