import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../actions/sessions'

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

        this.props.login(userdata)
        this.setState({
            email: '',
            password: ''
        })
        // debugger
        this.props.history.push('/profile')
    }

    renderError = () => {
        if (this.props.errors) {
            return <div>{this.props.errors}</div>
        }
    }
    
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={'/'} />
        }
    }

    render() {
        return (
            <div>
                {this.renderError()}
                <form method="POST" onSubmit={this.handleOnSubmit}>
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

                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}


export default connect(null, { login })(LoginForm)