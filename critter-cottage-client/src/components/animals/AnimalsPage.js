import React from 'react';
import AnimalCard from './AnimalCard';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs'

const AnimalsPage = ({ animals, currentUser, history }) => {
    const allAnimals = animals.map(animal => {
        return (<AnimalCard key={animal.id} animal={animal} />)
    })

    const onlyUnique = (value, index, self) => { 
        return self.indexOf(value) === index;
    }

    const speciesArray = animals.map(animal => animal.species).filter( onlyUnique )

    const filterTabs = (animals, list) => {
        const tabs = list.map((spec, idx) => {
            const filtered = animals.filter(animal => animal.species === spec)
            const render = filtered.map(animal => <AnimalCard key={animal.id} animal={animal} />)
            const title = spec.concat('s')
            return(
                <Tabs.Tab key={idx} eventKey={spec} title={title}>
                    <Container fluid>
                        <Row className="justify-content-md-center">
                            {render}
                        </Row>
                    </Container>
                </Tabs.Tab>
            )
        })
        return tabs
    }

    const renderFormLink = () => {
        if (currentUser && currentUser.admin) {
            return (
                <Button onClick={() => history.push('/animals/new') }>Add a New Friend</Button>
            )
        }
    }

    return(
        <Container fluid>
            <Tabs defaultActiveKey="all">
                <Tabs.Tab eventKey="all" title="All">
                    <Container fluid>
                        <Row className="justify-content-md-center">
                            {allAnimals}
                        </Row>
                    </Container>
                </Tabs.Tab>
                {filterTabs(animals, speciesArray)}

            </Tabs>
            <br />
            {renderFormLink()}
        </Container>
    )
}

export default AnimalsPage;