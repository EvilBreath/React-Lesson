import React, { useEffect, useState } from 'react';
import {  getListCocktail } from '../../../lib/api';


const List = () => {
     
  const [dataList, setDataList] = useState([])
  useEffect(() => {
    (async function() {
      try {
        const { data } = await getListCocktail();
        if (data && data.drinks) {
          setDataList(data.drinks);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [])

  return (
    <div className='drinkContainer'>
        <ul>
            {dataList.map(item => (<li key={item.id}>{item.strCategory}</li>))}
        </ul>
    </div>
  )
}

export { List };