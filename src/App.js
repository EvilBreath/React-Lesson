import React from 'react';
import './style.css';
import { Route, Routes } from 'react-router-dom';
import { Lessons } from './screens/Lessons';
import Menu from './screens/Menu';
import { Api } from './screens/Api';
import Header from './components/Header/Header';
import Homepage from './screens/Home';
import { Category } from './screens/Drinks/Category/Category';
import { List } from './screens/Drinks/List/List';
import { Glasses } from './screens/Drinks/Glasses/Glasses';
import { Alcoholic } from './screens/Drinks/Alcoholic/Alcoholic';
import { Ingridient } from './screens/Drinks/Ingridients/Ingridients';
import NewLine from './screens/NewLine';
import Footer from './components/Footer/Footer'


class App extends React.Component {
 
  render() {
    return (
        <>
          <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Homepage />} />
                <Route path="menu" element={<Menu />} />
                <Route path="api" element={<Api />}/>
                <Route path="lessons" element={<Lessons />}/>
                <Route path="NewLine" element={<NewLine />}/>
                
                {/* Drinks */}

                {/*DRINKS HOMEPAGE */}
                <Route path="drinks" element={<List />}/>

                {/*DRINKS CATEGORIES */}
                <Route path="drinks/categories" element={<Category />}/>
                <Route path="drinks/categories/:slug" element={<Category />}/>

                {/*DRINKS GLASSES */}
                <Route path="drinks/glasses" element={<Glasses />}/>
                <Route path="drinks/glasses/:slug" element={<Glasses />}/>

                {/*DRINKS INGRIDIENTS */}
                <Route path="drinks/ingridients" element={<Ingridient />}/>
                <Route path="drinks/ingridietns/:slug" element={<Category />}/>

                {/*DRINKS ALCOHOL */}
                <Route path="drinks/alcohol" element={<Alcoholic />}/>
                <Route path="drinks/alcohol/:slug" element={<Category />}/>
            </Route>
            <Route path="/" element={<Footer />}></Route>
          </Routes>
        </>
      );
    }
  }

  export default App;
