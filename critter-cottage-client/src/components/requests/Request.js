import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';


const Request = ({ request, currentUser }) => {
    const { id, status, animal, user } = request
    const { admin } = currentUser

    const regularReqs = () => {
        return(
        <ListGroup horizontal>
            <ListGroup.Item>Ref # {id}</ListGroup.Item>
            <ListGroup.Item>For: {animal.name}</ListGroup.Item>
            <ListGroup.Item>Status: {status}</ListGroup.Item>  
        </ListGroup>
        )
    }
    const adminReqs = () => {
        return(
            <ListGroup horizontal>
                <ListGroup.Item>Ref # {id}</ListGroup.Item>
                <ListGroup.Item>For: {animal.name}</ListGroup.Item>
                <ListGroup.Item>Status: {status}</ListGroup.Item>  
            </ListGroup>
        )
    }
    
    if (admin) {
        return adminReqs()
    } else {
        return regularReqs()
    }
}

export default Request;