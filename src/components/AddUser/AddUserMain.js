import React, { Component } from 'react'
import AddUser from './AddUser'

class AddUserMain extends Component {
  state = {
    
  }

  handleSubmit = (values) => {
    alert('Submitted')
    this.props.formSubmitAction(values)
    this.props.resetForm()
  }

  render() {
    return (
      <div>
        <AddUser onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default AddUserMain
