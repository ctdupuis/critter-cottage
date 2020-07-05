import React, { Fragment } from 'react';
import Request from '../requests/Request';

const ReqList = ({ requests, currentUser }) => {
    const renderReqs = requests.map(req => <Request key={req.id} currentUser={currentUser} request={req} />)
    
    
    return(
        <Fragment>
            {renderReqs}
        </Fragment>
    )
}

export default ReqList;