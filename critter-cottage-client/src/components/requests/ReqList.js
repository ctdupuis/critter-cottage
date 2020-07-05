import React, { Fragment } from 'react';
import Request from '../requests/Request';

const ReqList = ({ requests }) => {
    const renderReqs = requests.map(req => <Request key={req.id} request={req} />)
    
    
    return(
        <Fragment>
            {renderReqs}
        </Fragment>
    )
}

export default ReqList;