import React, { Component } from 'react';
import { DirectUpload } from 'activestorage';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

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
        console.log(2)
        event.preventDefault()
        this.props.updateAnimal(this.state, parseInt(this.props.match.params.animalID))
        console.log(3)
        this.setState({
            name: '',
            gender: '',
            species: '',
            breed: '',
            bio: '',
            image: undefined
        })
        console.log(4)
        this.props.history.push('/animals')
    }

    render() {
        const animal = this.props.animals.find(an => {
            return an.id === parseInt(this.props.match.params.animalID)
        })

        const { name, breed, species, gender, bio, image_url } = animal

        return (
            <Container>
                <Form onSubmit={this.handleOnSubmit}>
                    <h3>Edit Info for {name}</h3>
                    <br />
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" placeholder={name} onChange={this.handleOnChange} type="text"  />
                    </Form.Group>

                    <Form.Group controlId="formBasicSpecies">
                        <Form.Label>Species</Form.Label>
                        <Form.Control name="species" placeholder={species} type="text" onChange={this.handleOnChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicBreed">
                        <Form.Label>Breed</Form.Label>
                        <Form.Control name="breed" placeholder={breed} type="text" onChange={this.handleOnChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="radio" name="gender" label="Male" value="Male" checked={this.state.gender === "Male"} onChange={this.handleOnChange} />
                        <Form.Check type="radio" name="gender" label="Female" value="Female" checked={this.state.gender === "Female"} onChange={this.handleOnChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicBio">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control name="bio" placeholder={bio} as="textarea" onChange={this.handleOnChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.File name="image" onChange={this.handleOnChange} />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Save Changes
                    </Button>
                </Form>
            </Container>
        )
    }
}
