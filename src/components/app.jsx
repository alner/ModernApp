import React, { Component } from 'react';
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
    <div>
      <h1>Modern App</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="hello">Hello</Link></li>
      </ul>
      {this.props.children}
    </div>
    )
  }
}
