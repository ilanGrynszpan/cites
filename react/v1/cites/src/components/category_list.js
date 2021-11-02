
import React from 'react';
import {ListGroup} from 'react-bootstrap';
import CategoryCard from './category_card.js';

class CategoryList extends React.Component {

    constructor() {
        super();
        this.profs = [
            {
                "img_path":"./occupations/wrench.png",
                "job":"Mecânica",
                "description":"3 profissionais encontrados"
            },
            {
                "img_path":"./occupations/fireman.png",
                "job":"Bombeiro",
                "description":"2 profissionais encontrados"
            },
            {
                "img_path":"./occupations/household.png",
                "job":"Cozinheiro",
                "description":"desculpe, não encontramos profissionais"
            }
        ];
        this.submit_button_text = "PROCURAR"
    }

    render() {
        

        return (
           <div>
                <ListGroup horizontal>
                    {
                        this.profs.map((items) => {
                            return(
                                <ListGroup.Item>
                                    <CategoryCard 
                                        img_path={items.img_path}
                                        card_name={items.job} 
                                        card_text={items.description}
                                        card_button_submit={this.submit_button_text}
                                    />
                                </ListGroup.Item>
                            )
                        })
                    }
                    
                </ListGroup>
           </div>
        );
     }
}

export default CategoryList;