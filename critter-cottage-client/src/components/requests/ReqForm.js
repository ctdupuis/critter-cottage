import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default class ReqForm extends Component {
    state = {
        f_name: '',
        l_name: '',
        email: '',
        experience: '',
        comments: '',
        animalID: this.props.match.params.animalID
    }
    
    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.sendAdoptionForm(this.state, this.props.history)
    }

    render() {
        const animal = this.props.animals.find(an => an.id === parseInt(this.props.match.params.animalID) )
       
        return (
            <Container>
                <h3>Please fill out the form below for <strong>{animal.name}</strong></h3>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Row>
                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="text" onChange={this.handleOnChange} />
                        </Form.Group>
                    </Form.Row>
                    
                    <Form.Row>
                        <Form.Group controlId="formBasicFName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control name="f_name" type="text" onChange={this.handleOnChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicLName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control name="l_name" type="text" onChange={this.handleOnChange} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Label>Do you have any experience caring for animals?</Form.Label>
                            <Form.Check type="radio" name="experience" label="Yes" value={true} onChange={this.handleOnChange} />
                            <Form.Check type="radio" name="experience" label="No" value={false} onChange={this.handleOnChange} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group controlId="formBasicComments">
                            <Form.Label>Please add any additional comments below:</Form.Label>
                            <Form.Control name="comments" placeholder="Additional Comments..." onChange={this.handleOnChange} />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Submit Form
                    </Button>
                </Form>
            </Container>
        )
    }
}
