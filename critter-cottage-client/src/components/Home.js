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
                    src="carousel/sleepyseb.jpg"
                    alt="Sebi"
                />
            <Carousel.Caption>
                <h3>Sebastian</h3>
                <p>Little Sebi having a little man snooze</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="carousel/menmilo.jpg"
                    alt="Second slide"
                />
            <Carousel.Caption>
                <h3>Milo</h3>
                <p>He loves being held like this</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default Home;