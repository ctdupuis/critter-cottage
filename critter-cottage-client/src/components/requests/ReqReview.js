import React from 'react';

const ReqReview = ({ requests, match }) => {

    const request = requests.find(req => req.id === parseInt(match.params.reqID))
    const { id, user, animal } = request

    const renderReq = () => {
        return(
            <div>
                <h3>Ref #{id} </h3>
            </div>
        )
    }
    return renderReq()
}

export default ReqReview;