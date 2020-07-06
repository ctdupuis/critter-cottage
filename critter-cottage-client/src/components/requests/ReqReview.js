import React from 'react';

const ReqReview = ({ requests, match }) => {
    // console.log(requests, match)
    const request = requests.find(req => req.id === parseInt(match.params.requestID))
    const { id, user, animal } = request

    const renderReq = () => {
        return(
            <div>
                <h2>Adoption request for: {animal.name}</h2>
                <h3>Ref# {id}</h3>
                <div>
                    <h4>User Info:</h4>
                    <span>{user.f_name} {user.l_name}</span>
                    <span>{user.email}</span>
                </div>
            </div>
        )
    }
    return renderReq()
}

export default ReqReview;