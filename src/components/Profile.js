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
    fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`)
      .then(resp => resp.json())
      .then(userData => this.props.loginUser(userData) )
   }
  
  
  render() {
    console.log(this.props.user)
    const {user} = this.props
  return(
    <div>
      <br></br>
      <Row>
       <Col xs={6} md={4}>
        <Image src="https://www.nme.com/wp-content/uploads/2018/07/Stanley-Kubrick-2001-A-Space-Odyssey-696x442.jpg" roundedCircle />
        <br></br>
        <h2 className="review-text">STARRING:   {user.username}</h2>
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
    loginUser: (user) => dispatch(action.loginUser(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)


