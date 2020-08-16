import React from 'react'
import Watchlist from '../containers/Watchlist'
import ReviewContainer from '../containers/ReviewContainer'
import TopFiveContainer from '../containers/TopFiveContainer'
import * as action from '../actionCreators/actionCreator'
import { connect } from 'react-redux'
import { Image, Row, Col} from 'react-bootstrap'


class Profile extends React.Component{
  
  componentDidMount() {
    this.fetchUser()
  }
  
   fetchUser = () => {
    fetch(`http://localhost:3000/api/v1/users/77`)
      .then(resp => resp.json())
      .then(userData => this.props.renderUser(userData) )
   }
  
  
  render() {
    // console.log(this.props.user)
    const {user} = this.props
  return(
    <div>
      <h2 style={{ color: 'white' }}>Welcome {user.username}</h2>
      <Row>
       <Col xs={6} md={4}>
        <Image src="https://www.nme.com/wp-content/uploads/2018/07/Stanley-Kubrick-2001-A-Space-Odyssey-696x442.jpg" roundedCircle />
       </Col>
       <Col>
        {user.top_fives ? <TopFiveContainer /> : null}
       </Col>
      </Row>
      {user.reviews ? <ReviewContainer /> : null}
      {user.watchlist ? <Watchlist /> : null}
    </div>
  )
 }
}

const mapStateToProps = (state) => {
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


