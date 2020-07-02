import React from 'react';

const Profile = ({ user }) => {
    const { email, admin, f_name, l_name } = user

    const renderProfile = () => {
        if (admin) {
            return(<div>
                Welcome, {f_name} {l_name}. You are an administrator.
            </div>)
        } else {
            return(<div>
                Welcome, {f_name} {l_name}.
            </div>)
        }
    }
    return(
        <div>
           {renderProfile()}
        </div>
    )
}

export default Profile;