import React from 'react';
import axios from 'axios'

const Home = () => {
    const logout = () => {
        axios.get('http://localhost:3001/logout', { withCredentials: true }).then(res => console.log(res.data))
    }

    return(
    <div>
        <h3>Welcome to Critter Cottage</h3>

        <button onClick={logout}>Logout</button>
    </div>
    )
}

export default Home;