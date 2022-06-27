import React, { Component } from 'react'
import ActiveArticle from './ActiveArticle'

export class  Items extends Component {
  render() {
    return (
      <div>
        <div className='list-items-box'>{this.props.items.map(el => (
          <ActiveArticle key={el.id} item={el} ></ActiveArticle>
      ))}</div>
      </div>
      
    )
  }
}

export default Items