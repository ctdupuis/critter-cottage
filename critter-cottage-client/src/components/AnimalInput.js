import React, { Component } from 'react'

export default class AnimalInput extends Component {
    state = {
        name: '',
        species: ''
    }
    
    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addAnimal(this.state)
        this.setState({
            name: '',
            species: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Add an Animal</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Name</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleOnChange} />
                    <label>Species</label>
                    <input type='text' name='species' value={this.state.species} onChange={this.handleOnChange} />
                    <input type='submit' value='Add Animal' />
                </form>
            </div>
        )
    }
}
