import React from 'react'
// import Loader from 'react-loader-spinner'

import { axiosWithAuth } from '../utils/axiosWithAuth'

import Friend from '../components/Friend'
import AddForm from '../components/AddForm'

class FriendsList extends React.Component {
  state = {
    friends: [],
    // isLoading: false
  }

  componentDidMount() {
    // this.setState({isLoading: true})
    // setTimeout(
    //   this.getData(),
    //   3000
    // )

    this.getData()
  }

  getData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        console.log(res.data)
        this.setState({
          friends: res.data
          // isLoading: false
        })
      })
  }

  // formatData = () => {
  //   const formattedData = []
  //   this.state.friends.forEach((friend, index, arr) => {
  //     // if()
  //   })
  //   return formattedData
  // }

  render() {
    // const friends = this.formatData()

    return (
      <div>
        <p>Welcome to your friends list</p>

        {/* {this.props.isLoading && (
          <div>
            <Loader type='Puff' color='black' height='60' width='60' />
            <p>Loading Data</p>
          </div>
        )} */}

        {this.state.friends.map((friend) => <Friend friend={friend} />)}
        <AddForm />
      </div>
    )
  }
}

export default FriendsList