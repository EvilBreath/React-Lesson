import React, { Component } from 'react'

export default class NewLine extends Component {
    constructor(props) {
      super(props)
      this.state = {
            input: "",
            items: []
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            input: this.state.input,
            items: [...this.state.items, this.state.input]
        });
    }

   
    // to make consrutctor snippet rcons
  render() {
    const styles = {
        color: "yellow",
        backgroundColor: "green",
        width: "1440px",
        height: "50px",
        fontSize: "2em"

    }
    return (
     <div>
     <h1 style={styles}>Hello World</h1>
        <form onSubmit={this.handleSubmit}>
            <input value={this.state.input} onChange={this.handleChange} />
            <button type="submit">Submit!</button>
        </form>

        <ul>
            {this.state.items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
                
        </ul>
     </div>
    );
  }
 }

//class component snippet is rcc