import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class AnimalInput extends Component {
    state = {
        name: '',
        species: '',
        redirect: false
    }
    
    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={'/animals'} />
        }
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addAnimal(this.state)
        this.setState({
            name: '',
            gender: '',
            species: '',
            bio: ''
        })
        this.setRedirect()
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <h3>Add an Animal</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Name</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleOnChange} />

                    <input type='radio' name='gender' value='♂' onChange={this.handleOnChange} checked={this.state.gender === '♂'}/> Male
                    <input type='radio' name='gender' value='♀' onChange={this.handleOnChange} checked={this.state.gender === '♀'}/> Female

                    <label>Species</label>
                    <input type='text' name='species' value={this.state.species} onChange={this.handleOnChange} />

                    <label>Bio</label>
                    <textarea name='bio' value={this.state.bio} onChange={this.handleOnChange} />
                    <input type='submit' value='Add Animal' />
                </form>
            </div>
        )
    }
}
