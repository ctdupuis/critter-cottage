import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const Profile = ({ currentUser }) => {
    const { email, admin, f_name, l_name } = currentUser

    const renderProfile = () => {
        if (admin) {
            return(
                <Card>
                    <Card.Body>
                        <Card.Title>Welcome, {f_name} {l_name} <Badge pill variant="primary">Admin</Badge> </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>               
                    </Card.Body>
                </Card>
            )
        } else {
            return(
            <Card>
                <Card.Body>
                    <Card.Title>Welcome, {f_name} {l_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>               
                </Card.Body>
            </Card>
            )
        }
    }
    return(
        <div>
           {renderProfile()}
           <br />
           
        </div>
    )
}

export default Profile;