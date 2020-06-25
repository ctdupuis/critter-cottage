import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnimalInput from '../../components/animals/AnimalInput'
import Animals from '../../components/animals/Animals'

class AnimalsContainer extends Component {

    render() {
        return (
            <div>
                <AnimalInput addAnimal={this.props.addAnimal} />
                <Animals animals={this.props.animals} />
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
        addAnimal: animal => dispatch({type: 'ADD_ANIMAL', animal})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AnimalsContainer)