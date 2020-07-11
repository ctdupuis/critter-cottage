import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        let userdata = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.login(userdata, this.props.history)
        this.setState({
            email: '',
            password: ''
        })
    }

    renderError = () => {
        if (this.props.errors) {
            return <Alert variant="danger">{this.props.errors}</Alert>
        }
    }

    clearError = () => {
        document.querySelector('.error').remove()
       
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleOnSubmit}>
                    {this.renderError()}
                    <h2>Login to Your Account</h2>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleOnChange} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleOnChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Log In
                    </Button>

                </Form>
                
                <br />
                <h5>Don't have an account? <Link to='/signup'>Click here to Sign Up</Link></h5>
            </Container>
        )
    }
}

export default LoginForm;