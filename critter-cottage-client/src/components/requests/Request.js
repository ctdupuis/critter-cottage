import React from 'react';

export default Request = ({ request }) => {
    const { id, status } = request
    return(
        <div>
            <span>Ref# {id} | Status: {status} </span>
        </div>
    )
}