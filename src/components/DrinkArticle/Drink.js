import React, { Component } from 'react';
import './Drink.css';

export default class Drink extends Component {
  render() {
    return (
        <div className='drinks-list-items'>
              <div className='drinks-product'>
                <div className='drink-image'>
                <img src={this.props.item.strDrinkThumb}></img>
                </div>
                <div className='drink-info-articles'>
                  
                </div>
                <div className='drink-name'>
                  <h3>{this.props.item.strDrink}</h3>	
                </div>
              </div>
            </div>
    )
  }
}
