import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';

const AnimalCard = ({ animal }) => {

    const { id, name, species, breed, gender, image_url } = animal

    const genderSym = {
        'Male': '♂',
        'Female': '♀'
    }

    return(
            <Card style={{ width: '18rem'}} margin={25} border={75}>             
                    <Card.Img variant="top" width={300} height={300} src={`http://localhost:3001/${image_url}`} />               
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{breed}</Card.Subtitle><Card.Subtitle align={'right'}>{genderSym[gender]}</Card.Subtitle>
                    <NavLink to={`/animals/${id }`}>
                        <Card.Link as={'div'}>Details About {name}</Card.Link>
                    </NavLink>
                    <Button>Like!</Button>
                </Card.Body>
            </Card>
    )
}

export default AnimalCard;

// export default class AnimalCard extends Component {
//     state = {
//         animal: Object.assign({}, this.props.animal, {likes:0})
//     }

//     upvote = () => {
//         const pastlikes = this.state.animal.likes
//         // debugger
//         this.setState({
//             animal: {
//                 ...this.state.animal,
//                likes: pastlikes + 1}
//         })
//     }
    
//     render() {
//         const { id, name, species, breed, gender, image_url } = this.props.animal
//         const { likes } = this.state.animal
//         // debugger
    
//         const genderSym = {
//             'Male': '♂',
//             'Female': '♀'
//         }
//         return(
//             <Card style={{ width: '18rem'}} margin={25} border={75}>             
//                     <Card.Img variant="top" width={300} height={300} src={`http://localhost:3001/${image_url}`} />               
//                 <Card.Body>
//                     <Card.Title>{name}</Card.Title>
//                     <Card.Subtitle>{breed}</Card.Subtitle><Card.Subtitle align={'right'}>{genderSym[gender]}</Card.Subtitle>
//                     <NavLink to={`/animals/${id }`}>
//                         <Card.Link as={'div'}>Details About {name}</Card.Link>
//                     </NavLink>
//                     <Button onClick={this.upvote}>Like!{likes}</Button>
//                 </Card.Body>
//             </Card>
//     )
//     }
// }