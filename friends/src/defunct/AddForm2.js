import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

class AddForm extends React.Component {
  state = {
    friends: [],
    newFriend: {
      id: Date.now(),
      name: '',
      age: '',
      email: ''
    },
    errorMsg: ''
  }

  handleChange = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    })
  }

  addFriend = e => {
    e.preventDefault()
    if (this.state.newFriend.name === '' || this.state.newFriend.age === '' || this.state.newFriend.email === '' ) {
      this.setState({
        errorMsg: 'Name, age, and email are required.'
      })
    } else {
      axiosWithAuth()
        .post('http://localhost:5000/api/friends', this.state.newFriend)
        .then(res => {
          console.log('posted')
          console.log('this.state: ', this.state)
        })
        .catch(err => {
          console.error(err.message)
        })
    }
  }

  render() {
    console.log(this.state.newFriend)
    return (
      <div>
        <form onSubmit={this.addFriend}>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={this.state.newFriend.name}
            onChange={this.handleChange}
          />
          <label>Age</label>
          <input
            type='text'
            name='age'
            value={this.state.newFriend.age}
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            type='text'
            name='email'
            value={this.state.newFriend.email}
            onChange={this.handleChange}
          />
          <button>Add Friend</button>
          {
            this.state.errorMsg && <div>Error: {this.state.errorMsg}</div>
          }
        </form>
      </div>
    )
  }
}

export default AddForm