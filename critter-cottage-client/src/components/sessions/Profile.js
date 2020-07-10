import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';

const Profile = ({ currentUser }) => {
    const { email, admin, f_name, l_name } = currentUser

    const renderProfile = () => {
        if (admin) {
            return(
            <div>
                Welcome, {f_name} {l_name}. 👑
                <br />
                You are registered with this email: {email}
            </div>
            )
        } else {
            return(<div>
                Welcome, {f_name} {l_name}.
                <br />
                You are registered with this email: {email}
            </div>)
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