
import React from 'react';
import {Card, Button} from 'react-bootstrap';

class CategoryCard extends React.Component {

    render() {
        return (
           <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.img_path} />
                    <Card.Body>
                        <Card.Title>{this.props.card_name}</Card.Title>
                        <Card.Text>
                        {this.props.card_text}
                        </Card.Text>
                        <Button variant="primary">{this.props.card_button_submit}</Button>
                    </Card.Body>
                </Card>
           </div>
        );
     }
}

export default CategoryCard;