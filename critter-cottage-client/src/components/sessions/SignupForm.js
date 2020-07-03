import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../../actions/sessions'

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

        this.props.signup(userdata)
        this.setState({
            email: '',
            password: '',
            f_name: '',
            l_name: ''
        })
        this.props.history.replace('/profile')
    }

    renderError = () => {
        if (this.props.errors) {
            return this.props.errors.map(err => <div>{err}</div>)
        }
    }

    render() {
        return (
            <div>
                {this.renderError()}
                <form method="POST" onSubmit={this.handleOnSubmit}>
                    
                    <label>First Name</label>
                    <input 
                        type='text' 
                        name='f_name' 
                        onChange={this.handleOnChange}
                    />

                    <label>Last Name</label>
                    <input 
                        type='text' 
                        name='l_name' 
                        onChange={this.handleOnChange}
                    />

                    <label>Email</label>
                    <input 
                        type='text' 
                        name='email' 
                        onChange={this.handleOnChange}
                     />

                    <label>Password</label>
                    <input 
                        type='password' 
                        name='password' 
                        onChange={this.handleOnChange}
                     />

                    <button type='submit'>Register</button>
                </form>
            </div>
        )
    }
}


export default connect(null, { signup })(SignupForm)