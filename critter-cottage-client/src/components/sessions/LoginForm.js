import React, { Component } from 'react';

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
        setTimeout(() => this.props.history.replace('/profile'), 400)
    }

    renderError = clear => {
        if (this.props.errors) {
            return <div className='error'>{this.props.errors}</div>
        }
    }

    clearError = () => {
        document.querySelector('.error').remove()
       
    }

    render() {
        return (
            <div>
                {this.renderError(this.clearError)}
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

export default LoginForm;