import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';


const Request = ({ request, currentUser }) => {
    const { id, status, animal, user } = request
    const { admin } = currentUser

    const badgeColor = {
        "pending": "secondary",
        "approved": "success",
        "denied": "danger"
    }

    const regularReqs = () => {
        return(
            <tbody>
                <tr>
                    <td>{id}</td>
                    <td>{animal.name}</td>
                    <td><Badge pill variant={badgeColor[status]}>{status}</Badge></td>
                </tr>
            </tbody>
        )
    }
    const adminReqs = () => {
        return(
            <tbody>
                <tr>
                    <td>{id}</td>
                    <td>{animal.name}</td>
                    <td><Badge pill variant={badgeColor[status]}>{status}</Badge></td>
                    <td><Link to={`requests/${id}`}>Review</Link></td>
                </tr>
            </tbody>
        )
    }
    
    if (admin) {
        return adminReqs()
    } else {
        return regularReqs()
    }
}

export default Request;