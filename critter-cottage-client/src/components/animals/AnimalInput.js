import React, { Component } from 'react'

export default class AnimalInput extends Component {
    state = {
        name: '',
        species: '',
        gender: '',
        breed: '',
        image: {}
    }
    
    handleOnChange = event => {
        if (event.target.name === 'image') {
            this.setState({
                [event.target.name]: event.target.files[0]
            })
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
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
    }

    render() {
        return (
            <div>
                <h3>Add an Animal</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Name</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleOnChange} />
                    <br />

                    <label>Select a Gender:</label>
                    <input type='radio' name='gender' value='Male' onChange={this.handleOnChange} checked={this.state.gender === 'Male'}/> Male
                    <input type='radio' name='gender' value='Female' onChange={this.handleOnChange} checked={this.state.gender === 'Female'}/> Female
                    <br />

                    <label>Species</label>
                    <input type='text' name='species' value={this.state.species} onChange={this.handleOnChange} />
                    <br />

                    <label>Breed</label>
                    <input type='text' name='breed' value={this.state.breed} onChange={this.handleOnChange} />
                    <br />

                    <label>Bio</label>
                    <textarea name='bio' value={this.state.bio} onChange={this.handleOnChange} />
                    <br />

                    <label>Add a Picture!</label>
                    <input type='file' name='image' onChange={this.handleOnChange} />
                    <br />

                    <input type='submit' value='Add Animal' />
                </form>
            </div>
        )
    }
}
