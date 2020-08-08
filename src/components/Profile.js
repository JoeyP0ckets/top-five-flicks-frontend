import React from 'react'
import Watchlist from '../containers/Watchlist'
import ReviewContainer from '../containers/ReviewContainer'
import * as action from '../actionCreators/actionCreator'
import { connect } from 'react-redux'


class Profile extends React.Component{
  
  componentDidMount() {
    this.fetchUser()
  }
  
   fetchUser = () => {
    fetch(`http://localhost:3000/api/v1/users/46`)
      .then(resp => resp.json())
      .then(userData => this.props.renderUser(userData) )
   }
  
  
  render() {
    console.log(this.props.user)
    const {user} = this.props
  return(
    <div>
      I'm the Profile Page
      <h2>Welcome {user.username}</h2>
      {user.reviews ? <ReviewContainer /> : null}
      {user.watchlist ? <Watchlist /> : null}
    </div>
  )
 }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return{
    renderUser: (user) => dispatch(action.renderUser(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)