import React from "react"
import { connect } from 'react-redux'
import TopFiveCard from '../containers/TopFiveCard'
import {Container} from 'react-bootstrap'

class TopFive extends React.Component {

  componentDidMount() {
    this.fetchTopFives()
  }
  
  fetchTopFives = () => {
    fetch(`http://localhost:3000/api/v1/top_fives`)
    .then(resp => resp.json())
    .then(allFives => this.props.renderTopFives(allFives))
  }
  
  renderTopFiveCards = () => {
    return this.props.topFives.map((top_five, index) =>
      <TopFiveCard
        key={index}
        top_five={top_five}
      />
    )
  }
  
  render() {
    return(
      <Container>
        {this.props.topFives ? this.renderTopFiveCards() : "No Top Fives"}
      </Container>
    )
  }
}

 const msp = state => {
  return {
    topFives: state.topFives
  }
}

 const mdp = dispatch => {
  return{
    renderTopFives: (allFives) => dispatch({ type: "RENDER_TOP_FIVES", allFives: allFives})
    
  }
}

export default connect(msp,mdp)(TopFive)