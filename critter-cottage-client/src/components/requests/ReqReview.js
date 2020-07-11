import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ReqReview = ({ requests, match, history, sendReview }) => {
    // console.log(requests, match)
    const request = requests.find(req => req.id === parseInt(match.params.requestID))

    const { id, user, animal } = request


    const handleClick = (status) => {
        const reviewdata = {
            id: id,
            status: status
        }
        sendReview(reviewdata, history)
    }

    const renderReq = () => {
        if (request) {
            return(
                <Card>
                    <Card.Body>
                        <Card.Title>Adoption Request for {animal.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Submitted by {user.f_name} {user.l_name} </Card.Subtitle>
                        <Card.Subtitle>User email: {user.email}</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="success" onClick={() => handleClick("approved")} value="approved">Approve</Button>
                        <Button variant="danger" onClick={() => handleClick("denied")} value='denied'>Deny</Button>
                    </Card.Body>
                    </Card>
            )

        } else {
            return(<p>Loading...</p>)
        }
    }
    return renderReq()
}

export default ReqReview;