import React, { Component } from 'react'

export default class Animal extends Component {
    render() {
        const { animal } = this.props
        return (
            <div>
                <div>
                    {animal.name} | {animal.species} | {animal.gender}
                </div>
                <div>
                    Bio: {animal.bio}
                </div>
            </div>
        )
    }
}
