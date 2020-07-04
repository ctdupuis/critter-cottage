import React, { Component } from 'react';
import { DirectUpload } from 'activestorage';

export default class AnimalEdit extends Component {
    state = {
        name: '',
        species: '',
        gender: '',
        breed: '',
        bio: ''
    }
    
    handleOnChange = event => {
        if (event.target.name === 'image') {
            const upload = new DirectUpload(event.target.files[0], 'http://localhost:3001/rails/active_storage/direct_uploads')
            upload.create((error, blob) => {
                this.setState({
                    image: blob.signed_id
                })

            })
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.updateAnimal(this.state, parseInt(this.props.match.params.animalID))
        // this.setState({
        //     name: '',
        //     gender: '',
        //     species: '',
        //     breed: '',
        //     bio: '',
        //     image: undefined
        // })

        this.props.history.push('/animals')
    }

    setImageUrl(url) {
        this.setState({ image: url })
    }

    render() {
        const animal = this.props.animals.find(an => {
            return an.id === parseInt(this.props.match.params.animalID)
        })
        const { name, breed, species, gender, bio, image_url } = animal
        // {this.setImageUrl(image_url)}
        return (
            <div>
                <h3>Edit an Animal</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Name</label>
                    <input type='text' name='name' value={name} onChange={this.handleOnChange} />
                    <br />

                    <label>Select a Gender:</label>
                    <input type='radio' name='gender' value='Male' onChange={this.handleOnChange} checked={gender === 'Male'}/> Male
                    <input type='radio' name='gender' value='Female' onChange={this.handleOnChange} checked={gender === 'Female'}/> Female
                    <br />

                    <label>Species</label>
                    <input type='text' name='species' value={species} onChange={this.handleOnChange} />
                    <br />

                    <label>Breed</label>
                    <input type='text' name='breed' value={breed} onChange={this.handleOnChange} />
                    <br />

                    <label>Bio</label>
                    <textarea name='bio' value={bio} onChange={this.handleOnChange} />
                    <br />

                    {/* <label>Add a Picture!</label>
                    <input type='file' name='image' onChange={this.handleOnChange} /> */}
                    <br />

                    <input type='submit' value='Save Changes' />
                </form>
            </div>
        )
    }
}
