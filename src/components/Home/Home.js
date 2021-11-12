import React, { Component } from 'react'

import './Home.css'

class Home extends Component {
  state = {
    
  }

  simpleAction = (event) => {
    this.props.simpleAction()
  }

  render() {
    return (
      <div className="Home">
        <h1>Home page section</h1>
        <button onClick={this.simpleAction}>Test redux action</button>
        <pre>
          Value is: {this.props.btnClickValue}
        </pre>
      </div>
    )
  }
}

export default Home
