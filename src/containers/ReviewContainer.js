import React from 'react'
import { connect } from 'react-redux'
import {Container} from 'react-bootstrap'
import Review from '../components/Review'

const ReviewContainer = (props) => {
  // console.log(props)
  
  const renderReviews = () => {
    if (props.user.reviews) {
      return props.user.reviews.map((review, index) => 
        <Review 
          key={index}
          review={review}
        />
      )
    }
  }
  return(
    <div style={{ borderColor: "white"}}>
      <h2 style={{ color: 'white' }}>Reviews</h2>
      <Container>
        {renderReviews()}
      </Container>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    user: state.user
  }
}

export default connect(mapStateToProps)(ReviewContainer)