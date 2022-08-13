import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { getFilterList } from '../lib/api';
import { List } from './Drinks/List/List';


const Api = () => {
     
  return (
    <div className='drinkContainer'>
        <div className='drinkArticles'>
              <Link to="/drinks/glasses"><button className='btnDrinks'>Glasses</button> </Link>
              <Link to="/drinks/categories"><button className='btnDrinks'>Categories</button></Link>
              <Link to="/drinks/alcohol"><button className='btnDrinks'>Alcoholic</button></Link>
              <Link to="/drinks/ingridients"><button className='btnDrinks'>Ingridient</button></Link>
        </div>
      </div>

  )
}

export {Api};
