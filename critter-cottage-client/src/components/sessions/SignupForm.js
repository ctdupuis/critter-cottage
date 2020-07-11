import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

class SignupForm extends Component {
    state = {
        email: '',
        password: '',
        f_name: '',
        l_name: ''
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
            password: this.state.password,
            f_name: this.state.f_name,
            l_name: this.state.l_name
        }
        debugger
        this.props.signup(userdata, this.props.history)
        this.setState({
            email: '',
            password: '',
            f_name: '',
            l_name: ''
        })
        
    }

    renderErrors = () => {
        if (this.props.errors) {
            return this.props.errors.map((err, idx) => <Alert key={idx} variant="danger">{err}</Alert>)
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleOnSubmit}>
                <div>

            {this.renderErrors()}
                </div>
                <h2>Create an Account</h2>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleOnChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleOnChange} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Firsr Name</Form.Label>
                        <Form.Control type="text" name="f_name" placeholder="Enter First Name" onChange={this.handleOnChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="l_name" placeholder="Enter Last Name" onChange={this.handleOnChange} />
                    </Form.Group>
                </Form.Row>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Sign Up</Button>
                    </Col>
                </Form.Group>

                
            </Form>)
        //     <div>
        //         {this.renderError()}
        //         <form  onSubmit={this.handleOnSubmit}>
                    
        //             <label>First Name</label>
        //             <input 
        //                 type='text' 
        //                 name='f_name' 
        //                 onChange={this.handleOnChange}
        //             />

        //             <label>Last Name</label>
        //             <input 
        //                 type='text' 
        //                 name='l_name' 
        //                 onChange={this.handleOnChange}
        //             />

        //             <label>Email</label>
        //             <input 
        //                 type='text' 
        //                 name='email' 
        //                 onChange={this.handleOnChange}
        //              />

        //             <label>Password</label>
        //             <input 
        //                 type='password' 
        //                 name='password' 
        //                 onChange={this.handleOnChange}
        //              />

        //             <button type='submit'>Register</button>
        //         </form>
        //     </div>
        // )
    }
}

export default SignupForm;