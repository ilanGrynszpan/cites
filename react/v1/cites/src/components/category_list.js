
import React from 'react';
import {ListGroup} from 'react-bootstrap';
import CategoryCard from './category_card.js';

class CategoryList extends React.Component {

    constructor() {
        super();
        this.profs = [
            "Faxina",
            "Pedreiro",
            "Cozinheiro",
            "motorista"
        ];
    }

    render() {
        

        return (
           <div>
                <ListGroup horizontal>
                    {
                        this.profs.map((items) => {
                            return(
                                <ListGroup.Item><CategoryCard card_name={items}/></ListGroup.Item>
                            )
                        })
                    }
                    
                </ListGroup>
           </div>
        );
     }
}

export default CategoryList;