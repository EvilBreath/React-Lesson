import React from 'react'
import Items from './Components/Items';
import Btns from './Components/Btns';
import './style.css';


class App extends React.Component {
  constructor(props) { 
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'What about indoor plants?',
          desc: "Well, you decided to have your first flower. Let's determine the type of flowers. For... ",
          level: 'Very easy',
          img: 'flowers-item-1.png',
          time: '15'

        },
        {
          id: 2,
          title: 'Beginner Guide Pt.1',
          desc: "We figured out the cacti. Would you like something more subtle and more...",
          level: 'Easy',
          img: 'flowers-item-2.png',
          time: '30'
        },
        {
          id: 3,
          title: 'Beginner Guide Pt.2',
          desc: "Beginning plant growers need to know that plants require...",
          level: 'Normal',
          img: 'flowers-item-3.png',
          time: '45'
        },
        {
          id: 4,
          title: 'Пруф',
          desc: "Чистый пруф",
          level: 'АНРИЛ',
          img: 'Doom_new_cover_art.jpeg',
          time: '88'
        },
        
      ]
    }
  }
  render() {
    return (
        <div className="container">
          <Items items={this.state.items}/>
          <Btns name={this.state.name}/>
          </div>
      );
    }
}
export default App;
