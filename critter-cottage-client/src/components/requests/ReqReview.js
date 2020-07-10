import React from 'react';
import Button from 'react-bootstrap/Button';

const ReqReview = ({ requests, match, history, sendReview }) => {
    // console.log(requests, match)
    const request = requests.find(req => req.id === parseInt(match.params.requestID))
    console.log('before if statement', request)
    // debugger
    if (request) {
        // const { id, user, animal } = request
        console.log('after if statement', request)
    }

    const handleClick = (status) => {
        // const reviewdata = {
        //     id: id,
        //     status: status
        // }
        // sendReview(reviewdata)
        history.replace('/profile')
    }

    const renderReq = () => {
        if (request) {
            return(
                <div>
                    {/* <h2>Adoption request for: {animal.name}</h2> */}
                    {/* <h3>Ref# {id}</h3> */}
                    <div>
                        <h4>User Info:</h4>
                        {/* <span>Name: {user.f_name} {user.l_name}</span> */}
                        <br />
                        {/* <span>Email: {user.email}</span> */}
                        <button onClick={() => handleClick("approved")} value="approved">Approve</button><button onClick={() => handleClick("denied")} value='denied'>Deny</button>
                    </div>
                </div>
            )

        } else {
            return(<p>Loading...</p>)
        }
    }
    return renderReq()
}

export default ReqReview;