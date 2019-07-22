import React, { Component } from 'react';
import {Navbar,NavbarBrand,Button} from 'reactstrap';
import Menu from "./MenuComponents";

import {DISHES} from './shared/dishes';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state={
      dishes: DISHES,
      selectedDish:null
    }
}
onDishSelect(dishID) {
    this.setState({ selectedDish: dishID});
}
  render() {
    return (
      <div>
       <Navbar dark color ='primary'>
         <div className='container'>
           <NavbarBrand href='/'>Dishes</NavbarBrand>
         </div>
       </Navbar>
       <Menu 
        onclick={(dishID) => {this.onDishSelect(dishID)}}
        dish = {this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)}/>
      </div>
    );
  }
}

export default Main;