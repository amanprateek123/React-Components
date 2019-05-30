import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar,NavbarBrand,Button} from 'reactstrap';
import Menu from "./Components/MenuComponents";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       <Navbar dark color ='primary'>
         <div className='container'>
           <NavbarBrand href='/'>Coursera</NavbarBrand>
         </div>
       </Navbar>
       <Menu />
      </div>
    );
  }
}

export default App;
