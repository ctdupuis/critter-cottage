import React, { Component } from 'react'

export default class ReqForm extends Component {
    state = {
        f_name: '',
        l_name: '',
        email: '',
        experience: '',
        animalID: this.props.match.params.animalID
    }
    
    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.sendAdoptionForm(this.state)
    }

    render() {
        const animal = this.props.animals.find(an => an.id === parseInt(this.props.match.params.animalID) )
       
        return (
            <div>
                <h3>Please fill out the form below for <strong>{animal.name}</strong></h3>
                <form onSubmit={this.handleOnSubmit}>

                    <label>First Name</label>
                    <input 
                        type='text'
                        name='f_name'
                        value={this.state.f_name}
                        onChange={this.handleOnChange}
                    />
                    <br />

                    <label>Last Name</label>
                    <input 
                        type='text'
                        name='l_name'
                        value={this.state.l_name}
                        onChange={this.handleOnChange}
                    />
                    <br />

                    <label>Email</label>
                    <input
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                    <br />

                    <label>Have you had any experience owning or caring for an animal?</label>
                    <br />
                    <input 
                        type='radio'
                        value={true}
                        name='experience'
                        onChange={this.handleOnChange}
                        checked={this.state.experience === 'true'}
                    /> Yes
                    <input
                        type='radio'
                        value={false}
                        name='experience'
                        onChange={this.handleOnChange}
                        checked={this.state.experience === 'false'}
                    />  No
                    <br />

                    <input type="submit" />
                </form>
            </div>
        )
    }
}
