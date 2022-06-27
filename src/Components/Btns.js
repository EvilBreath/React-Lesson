import React, { Component } from 'react'
import Btn from './Btn'
import BtnActive from './BtnActive'

export class Btns extends Component {
  render() {
    return (
      <div>
        <Btn />
        <BtnActive />
      </div>
    )
  }
}

export default Btns