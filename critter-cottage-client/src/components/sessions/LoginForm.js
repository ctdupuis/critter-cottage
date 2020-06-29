import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../actions/sessions'

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        redirect: false
    }

    shouldComponentUpdate() {
        return (this.state.error) ? true : false
    }

    componentDidUpdate() {
        this.setRedirect()
        this.setState({
            email: '',
            password: ''
        })
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
        console.log(this.state)
        // this.setState({
        //     email: '',
        //     password: ''
        // })
        // this.setRedirect();

        // fetch('http://localhost:3001/login', {
        //         method: "POST",
        //         headers: {
        //           "Content-Type": "application/json",
        //           "Accept": "application/json"
        //         },
        //         body: JSON.stringify(userdata)
        //     })
        // .then(r => r.json())
        // .then(user => {
        //     if (user.error) {
        //         this.setState({ error: user.error })
        //     } else {
        //         this.props.login(user)
        //         this.setState({
        //             email: '',
        //             password: '',
        //         })
        //         this.setRedirect()
        //     }
        // })
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
            return <Redirect to={'/'} />
        }
    }

    render() {
        return (
            <div>
                {this.renderError()}
                {this.renderRedirect()}
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
// export default LoginForm;