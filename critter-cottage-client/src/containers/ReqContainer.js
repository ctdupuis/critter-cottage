import React, { Component } from 'react';
import ReqList from '../components/requests/ReqList';


export default class ReqContainer extends Component {
    render() {
        return (
            <div>
                {
                    (this.props.requests.first) ? 
                    <>
                        <h4>Below are a list of your requests</h4>
                        <ReqList requests={this.props.requests} />
                    </>
                    :
                    <h4>You have no Requests yet</h4>
                }
            </div>
        )
    }
}
