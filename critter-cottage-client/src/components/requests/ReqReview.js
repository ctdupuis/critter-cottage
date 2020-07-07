import React from 'react';

const ReqReview = ({ requests, match, history, sendReview }) => {
    // console.log(requests, match)
    const request = requests.find(req => req.id === parseInt(match.params.requestID))
    const { id, user, animal } = request

    const handleClick = (status) => {
        const reviewdata = {
            id: id,
            status: status
        }
        debugger
        sendReview(reviewdata)
        history.replace('/profile')
    }

    const renderReq = () => {
        return(
            <div>
                <h2>Adoption request for: {animal.name}</h2>
                <h3>Ref# {id}</h3>
                <div>
                    <h4>User Info:</h4>
                    <span>Name: {user.f_name} {user.l_name}</span>
                    <br />
                    <span>Email: {user.email}</span>
                    <button onClick={() => handleClick("approved")} value="approved">Approve</button><button onClick={() => handleClick("denied")} value='denied'>Deny</button>
                </div>
            </div>
        )
    }
    return renderReq()
}

export default ReqReview;