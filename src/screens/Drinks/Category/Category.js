import React, { useEffect, useState } from 'react';
import Drink from '../../../components/DrinkArticle/Drink';
import { getCategoryList } from '../../../lib/api';


const Category = () => {
     
  const [dataList, setDataList] = useState([])
  useEffect(() => {
    (async function() {
      try {
        const {data } = await getCategoryList();
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
        <div className='drinkArticles'>
              {dataList.map(el => (
          <Drink key={el.id} item={el}></Drink>
              ))}
        </div>
    </div>
  )
}

export { Category };