import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class SignupForm extends Component {
    state = {
        email: '',
        password: '',
        f_name: '',
        l_name: '',
        redirect: false
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

        fetch('http://localhost:3001/signup', {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
                body: JSON.stringify(userdata)
            })
        .then(r => r.json())
        .then(user => {
            if (user.error) {
                this.setState(prevState => {
                    return {
                        ...prevState,
                        error: user.error
                    }
                })
            } else {
                this.props.login(user)
                this.setState({
                    email: '',
                    password: '',
                    f_name: '',
                    l_name: ''
                })
                this.setRedirect()
            }
        })
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderError = () => {
        if (this.state.error) {
            return <div>{this.state.error}</div>
        }
    }
    
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={'/animals'} />
        }
    }

    render() {
        return (
            <div>
                {this.renderError()}
                {this.renderRedirect()}
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

                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.email
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch({ type: 'LOGIN_USER', user })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)