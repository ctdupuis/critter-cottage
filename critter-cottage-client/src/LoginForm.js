import React, { Component } from 'react'

export default class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        redirect: false
    }
    
    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        // let configObj = {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //       "Accept": "application/json"
        //     },
        //     body: JSON.stringify({email: 'user@place.com', password: 'pass'})
        // };
        let userdata = {
            email: this.state.email,
            password: this.state.password
        }

        fetch('http://localhost:3001/login', {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
                body: JSON.stringify(userdata)
            })
        .then(r => r.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div>
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
