import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';

const Home = props => {

    return(
        <>
        <Jumbotron>
            <h2>Welcome to Critter Cottage!</h2>
            <p>Here at Critter Cottage, the animals are always our #1 Priority.</p>
        </Jumbotron>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--975f0cc20fda6bdaa0b8002df3521e802c460d13/Parker.jpg"
                    alt="First slide"
                />
            <Carousel.Caption>
                <h3>Puppies</h3>
                <p>They sure are cute aren't they</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="Second slide"
                />
            <Carousel.Caption>
                <h3>Puppies</h3>
                <p>They sure are cute aren't they</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default Home;