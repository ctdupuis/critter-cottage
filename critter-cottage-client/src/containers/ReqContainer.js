import React, { Component } from 'react';
import ReqList from '../components/requests/ReqList';


export default class ReqContainer extends Component {
    render() {
        return (
            <div>
                <h4>Below are a list of your requests</h4>
                <ReqList requests={this.props.requests} />
            </div>
        )
    }
}
