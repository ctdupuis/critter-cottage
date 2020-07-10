import React, { Fragment } from 'react';
import Request from '../requests/Request';
import Table from 'react-bootstrap/Table';

const ReqList = ({ requests, currentUser }) => {
    const renderReqs = requests.map(req => <Request key={req.id} currentUser={currentUser} request={req} />)
    
    return(       
        <Table hover size="sm">
            <thead>
                <tr>
                    <th>Ref #</th>
                    <th>Animal Name</th>
                    <th>Status</th>
                </tr>
            </thead>
                {renderReqs} 
        </Table>
    )
}

export default ReqList;