import React, { Component } from 'react'

export default class Animal extends Component {
    render() {
        const { animal } = this.props
        return (
            <div>
                {animal.name} | {animal.species}
            </div>
        )
    }
}
