import React,{useState} from 'react'
import { connect } from 'react-redux'
import { Container, Button} from 'react-bootstrap'
import TopFive from '../components/TopFive'
import TopFiveForm from '../components/TopFiveForm'

const TopFiveContainer = (props) => {
  // console.log(props.user.top_fives)
  
  const [isToggled, setToggled] = useState(false)

  const toggleTopFiveReview = () => setToggled(!isToggled)
  
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
        <h1 className="review-text">Top Fives</h1>
      <Container className="topfive-profile-container">
        {renderTopFive()}
        {isToggled ? <TopFiveForm/> : null}
      </Container>
      <br></br>
      <br></br>
      <Button variant="info" onClick={() => toggleTopFiveReview()}>Create Top Five</Button>
    </div>
  )
}

 const msp = state => {
   return{
     user: state.user
   }
 }

 export default connect(msp)(TopFiveContainer)