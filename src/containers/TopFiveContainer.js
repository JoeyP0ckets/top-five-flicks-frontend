import React from 'react'
import { connect } from 'react-redux'
import { Container} from 'react-bootstrap'
import TopFive from '../components/TopFive'

const TopFiveContainer = (props) => {
  // console.log(props.user.top_fives)
  
  const renderTopFive = () => {
    if (props.user.top_fives) {
     return props.user.top_fives.map((top_five, index) => 
        <TopFive
          key={index}
          top_five={top_five}
        />
      )
    } else {
      return "No Top Fives"
    } 
  }   
  
  return(
    <div>
        <h1>Top Fives</h1>
      <Container>
        {renderTopFive()}
      </Container>
    </div>
  )
}

 const msp = state => {
   return{
     user: state.user
   }
 }

 export default connect(msp)(TopFiveContainer)