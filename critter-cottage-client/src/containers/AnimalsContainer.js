import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnimalInput from '../components/animals/AnimalInput'
import AnimalsPage from '../components/animals/AnimalsPage'
import { Route, Switch } from 'react-router-dom';
import { fetchAnimals } from '../actions/animals'
import AnimalShow from '../components/animals/AnimalShow';


class AnimalsContainer extends Component {

    componentDidMount() {
        if (this.props.animals.length < 1 ) {
            this.props.fetchAnimals()
        }
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path={'/animals'} render={routerProps => <AnimalsPage {...routerProps} animals={this.props.animals} />} />
            <Switch>
                {this.props.currentUser.admin ? 
                <Route exact path={'/animals/new'} render={routerProps => <AnimalInput {...routerProps} addAnimal={this.props.addAnimal}/> } /> :
                <Route exact path={'/'} render={() => <div>This is an admin only feature</div>} />
            }
            </Switch>
                <Route exact path={'/animals/:animalID'} render={routerProps => <AnimalShow {...routerProps} animals={this.props.animals} />} />
            </React.Fragment>
        )
    }
}

export default connect(state => ({animals: state.animalReducer.animals, currentUser: state.userReducer.currentUser}), { fetchAnimals })(AnimalsContainer);