import React, { Component } from 'react';
import {BreadBottom, BreadTop, Seeds1, Seeds2, Meat, Cheese, Salad, Bacon} from './style';

class burgerIngredient extends Component {
    render() {
        const { type } = this.props;
        let ingredient = null;
      
        switch ( type ){
          case('bread-bottom'):
          ingredient = <BreadBottom />;
          break;
          case('bread-top'):
          ingredient = (
          <BreadTop>
           <Seeds1 />
           <Seeds2 />
           </BreadTop>
          );
          break;
          case('meat'):
          ingredient = <Meat />;
          break;
          case('cheese'):
          ingredient = <Cheese />;
          break;
          case('salad'):
          ingredient = <Salad />;
          break;
          case('bacon'):
          ingredient = <Bacon />;
          break;
          default:
              ingredient = null;
        }
      return ingredient;
    }
};

export default burgerIngredient;