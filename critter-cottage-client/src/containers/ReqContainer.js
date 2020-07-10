import React, { Component } from 'react';
import ReqList from '../components/requests/ReqList';
import Card from 'react-bootstrap/Card';

export default class ReqContainer extends Component {

    conditionalRender() {
        if (JSON.stringify(this.props.requests) === '[]') {
            return(
            <h4>
                You don't have any requests yet.
            </h4>
            
            )
        } else {
            return(
                <>
                    <h4>Below are a list of your requests</h4>
                    <ReqList currentUser={this.props.currentUser} requests={this.props.requests} />
                </>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.conditionalRender()}
            </React.Fragment>
        )
    }
}
