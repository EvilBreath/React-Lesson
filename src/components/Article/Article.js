import React, { Component } from 'react';
import './Article.css';

export default class Article extends Component {
  render() {
    return (
        <div className='articles-list-items'>
        <div className='article-active'>
              <div className='aritcles-product'>
                <div className='product-image'>
                <img src={"./img/" + this.props.item.img}></img>
                </div>
                <div className='article-info-articles'>
                  <div className='article-status'>
                    <strong>{this.props.item.time} min read</strong>  |   <span class="level-color">{this.props.item.level}</span>
                  </div>
                  <div className='article-rating article-rating-articles'>
                    <ul className="rating">
                      <li className='rating-star-artciels active-star-articles'></li>
                      <li className='rating-star-artciels active-star-articles'></li>
                      <li className='rating-star-articles'></li>
                      <li className='rating-star-articles'></li>
                      <li className='rating-star-articles'></li>
                    </ul>
                  </div>
                </div>
                <div className='item-name'>
                  <h3>{this.props.item.title}</h3>	
                </div>
                <div className='item-about'>
                  <p>{this.props.item.desc}</p>
                </div>
              </div>
            </div>
          </div>
    )
  }
}
