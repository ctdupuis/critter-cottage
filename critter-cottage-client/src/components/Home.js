import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = props => {

    return(
        <>
            <Jumbotron>
                <h2>Welcome to Critter Cottage!</h2>
                <p>Here at Critter Cottage, the animals are always our top priority.</p>
                <p>Our mission is to provide these animals with everything they need and do our very best to find them a loving home.</p>
            </Jumbotron>
        <Container>
            <Row>
                <Col>
                <Carousel style={{width: '25rem', align: 'left'}}>
                        <Carousel.Item>
                            <img     
                                height="600" width="700"         
                                className="d-block w-100"
                                src="carousel/sleepyseb.jpg"
                                alt="Sebi"
                            />
                        <Carousel.Caption>
                            <h4>Sebastian</h4>
                            <p>Sebi loves to be cradled</p>
                        </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                height="600" width="700" 
                                className="d-block w-100"
                                src="carousel/menmilo.jpg"
                                alt="Milo"
                            />
                        <Carousel.Caption>
                            <h4>Milo</h4>
                            <p>One of our volunteers is very particular towards Milo</p>
                        </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                height="600" width="700" 
                                className="d-block w-100"
                                src="carousel/bunny.jpg"
                                alt="Bunnies"
                            />
                        <Carousel.Caption>
                            <h4>Honey, Berry, & Tom</h4>
                            <p>3 sweet buns found outside the shelter</p>
                        </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                height="600" width="700" 
                                className="d-block w-100"
                                src="carousel/mouse.jpg"
                                alt="Mouse the Cat"
                            />
                        <Carousel.Caption>
                            <h4>Mouse</h4>
                            <p>Mouse takes a cat nap</p>
                        </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </Col>
          
                <Col>
                    <Card align={'center'}>
                        <Card.Body>
                            <Card.Img src="home/volunteer.jpeg" />
                            <Card.Title>Volunteers Needed!</Card.Title>
                            <Card.Text>We are always in need of some extra paws to help take care of the animals. Volunteer tasks include cleaning, handling, and exercising the animals. Volunteers must be at least 18 years of age, or 16 with parent supervision. If you are interested in volunteering, please contact <strong>crittercottage@gmail.com</strong> with your information or come stop by at 1 Long Walk Ln, Lafayette, LA and fill out a form.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Home;