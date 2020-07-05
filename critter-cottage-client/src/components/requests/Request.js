import React from 'react';
import { Link } from 'react-router-dom';

const Request = ({ request, currentUser }) => {
    const { id, status, animal, user } = request
    const { admin } = currentUser

    const regularReqs = () => {
        return(
            <div>
                <span>Ref# {id} | For: {animal.name} | Status: {status} </span>
            </div>
        )
    }
    const adminReqs = () => {
        return(
            <div>
                <span>Ref: {id} | For: {animal.name}, submitted by {user.f_name} {user.l_name} | Status: {status} | <Link to={`/requests/${id}`}>Review</Link> </span>
            </div>
        )
    }
    
    if (admin) {
        return adminReqs()
    } else {
        return regularReqs()
    }
}

export default Request;