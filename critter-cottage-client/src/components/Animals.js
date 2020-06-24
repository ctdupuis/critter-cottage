import React, { Component } from 'react'
import Animal from './Animal'

export default class Animals extends Component {
    render() {
        return (
            <div>
                {this.props.animals.map(animal => {
                    return(<Animal animal={animal} />)
                })}
            </div>
        )
    }
}
