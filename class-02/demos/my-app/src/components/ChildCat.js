import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class ChildCat extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            numberOfPets : 0
        }
    }

    incrementNumberOfPets = () => {
        this.setState({
            numberOfPets : this.state.numberOfPets + 1  
        })
    }
    
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imgUrl} onClick={this.incrementNumberOfPets}/>
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            Number of Pets 😸: {this.state.numberOfPets}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default ChildCat;