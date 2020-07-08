import React, { Component } from 'react';
import ReqList from '../components/requests/ReqList';
import Card from 'react-bootstrap/Card';

export default class ReqContainer extends Component {

    conditionalRender() {
        if (this.props.requests[0]) {
            return(
            <>
                <h2>Below are a list of your requests</h2>
                <ReqList currentUser={this.props.currentUser} requests={this.props.requests} />
            </>
            
            )
        } else {
            return(
                <h4>
                    You have no requests yet.
                </h4>
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
