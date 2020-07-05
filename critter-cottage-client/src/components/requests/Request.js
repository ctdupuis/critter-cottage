import React from 'react';

const Request = ({ request }) => {
    const { id, status } = request
    return(
        <div>
            <span>Ref# {id} | Status: {status} </span>
        </div>
    )
}

export default Request;