import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnimalInput from '../components/animals/AnimalInput'
import AnimalsPage from '../components/animals/AnimalsPage'
import AnimalShow from '../components/animals/AnimalShow';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { fetchAnimals, addAnimal } from '../actions/animals'


class AnimalsContainer extends Component {

    componentDidMount() {
        if (this.props.animals.length < 1) {
            this.props.fetchAnimals()
        }
        if (this.props.currentUser.admin) {
            console.log('admin')
        }
    }

    render() {
        return (
            // <AnimalInput />
            <React.Fragment>
            <Switch>
            //     {/* <Route exact path={'/animals'} render={routerProps => <AnimalsPage {...routerProps} animals={this.props.animals} />} /> */}

            //     {/* <Route exact path={'/animals/new'} render={routerProps => <AnimalInput {...routerProps} addAnimal={this.props.addAnimal}/> } />  */}


            //     {/* <Route exact path={'/animals/:animalID'} render={routerProps => <AnimalShow {...routerProps} animals={this.props.animals} />} /> */}

            //     {/* <Redirect to={'/animals'} /> */}
 
            </Switch>
            </React.Fragment>
        )
    }
}

export default connect(state => ({animals: state.animalReducer.animals, currentUser: state.userReducer.currentUser}), { fetchAnimals, addAnimal })(AnimalsContainer);