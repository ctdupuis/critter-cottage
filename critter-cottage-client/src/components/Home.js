import React from 'react';
import axios from 'axios'

const Home = props => {
    const logout = () => {
        axios.get('http://localhost:3001/logout', { withCredentials: true }).then(res => console.log(res.data))
    }

    return(
    <div>
        <h3>Welcome to Critter Cottage</h3>

        <button onClick={props.endSession}>Logout that Doesn't Work</button>
        <button onClick={logout}>Logout that Works</button>
    </div>
    )
}

export default Home;