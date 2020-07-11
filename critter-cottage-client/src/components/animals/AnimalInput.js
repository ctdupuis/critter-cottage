import React, { Component } from 'react';
import { DirectUpload } from 'activestorage';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default class AnimalInput extends Component {
    state = {
        name: '',
        species: '',
        gender: '',
        breed: '',
        bio: '',
        image: undefined
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
        this.props.addAnimal(this.state)
        this.setState({
            name: '',
            gender: '',
            species: '',
            breed: '',
            bio: '',
            image: undefined
        })

        this.props.history.push('/animals')
    }

    bootStrapForm() {
        return(
            <Form onSubmit={this.handleOnSubmit}>
                <h3>Add a Friend!</h3>
                <br />
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" onChange={this.handleOnChange} type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group controlId="formBasicSpecies">
                    <Form.Label>Species</Form.Label>
                    <Form.Control name="species" type="text" placeholder="Animal Species" onChange={this.handleOnChange} />
                </Form.Group>

                <Form.Group controlId="formBasicBreed">
                    <Form.Label>Breed</Form.Label>
                    <Form.Control name="breed" type="text" placeholder="Animal Breed" onChange={this.handleOnChange} />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="radio" name="gender" label="Male" value="Male" checked={this.state.gender === "Male"} onChange={this.handleOnChange} />
                    <Form.Check type="radio" name="gender" label="Female" value="Female" checked={this.state.gender === "Female"} onChange={this.handleOnChange} />
                </Form.Group>

                <Form.Group controlId="formBasicBio">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control name="bio" as="textarea" placeholder="Write a description" onChange={this.handleOnChange} />
                </Form.Group>

                <Form.Group>
                    <Form.File name="image" onChange={this.handleOnChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        )
    }

    render() {
        return(
            <Container>
                <Form onSubmit={this.handleOnSubmit}>
                    <h3>Add a Friend!</h3>
                    <br />
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" onChange={this.handleOnChange} type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicSpecies">
                        <Form.Label>Species</Form.Label>
                        <Form.Control name="species" type="text" placeholder="Animal Species" onChange={this.handleOnChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicBreed">
                        <Form.Label>Breed</Form.Label>
                        <Form.Control name="breed" type="text" placeholder="Animal Breed" onChange={this.handleOnChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label>Select Gender:</Form.Label>
                        <Form.Check type="radio" name="gender" label="Male" value="Male" checked={this.state.gender === "Male"} onChange={this.handleOnChange} />
                        <Form.Check type="radio" name="gender" label="Female" value="Female" checked={this.state.gender === "Female"} onChange={this.handleOnChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicBio">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control name="bio" as="textarea" placeholder="Write a description" onChange={this.handleOnChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Upload a picture</Form.Label>
                        <Form.File name="image" onChange={this.handleOnChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
            </Container>
        )
    }
}
