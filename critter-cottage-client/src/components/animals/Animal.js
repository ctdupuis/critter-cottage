import React, { Component } from 'react'

export default class Animal extends Component {
    render() {
        const { animal } = this.props
        const genderSym = {
            'Male': '♂',
            'Female': '♀'
        }
        return (
            <div>
                <div>
                    {animal.name} | {genderSym[animal.gender]}
                </div>
            </div>
        )
    }
}
