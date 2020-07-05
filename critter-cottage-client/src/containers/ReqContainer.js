import React, { Component } from 'react';
import ReqList from '../components/requests/ReqList';
import ReqReview from '../components/requests/ReqReview';
import { Route, Switch } from 'react-router-dom';


export default class ReqContainer extends Component {

    conditionalRender() {
        if (this.props.requests[0]) {
            return(
            <>
                <h3>Below are a list of your requests</h3>
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
                <Switch>
                    <Route exact path={'/requests/:reqID'} 
                        render={props => 
                            <ReqReview
                                requests={this.props.requests}
                                {...props}
                            />
                        }
                    />

                    {this.conditionalRender()}
                </Switch>
            </React.Fragment>
        )
    }
}
