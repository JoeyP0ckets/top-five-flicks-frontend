import React from "react"
import { connect } from "react-redux"
import { Container } from 'react-bootstrap'
 

const Review = (props) => {

  const deleteReview = (id) => {
    fetch(`http://localhost:3000/api/v1/reviews/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
         Accept: "application/json"
      }
    })
      props.delete(id)
  } 

  let {title, acting, art_direction, cinematography, directing, soundtrack, rating, id} = props.review
  return(
    <Container>
      <ul>
        <h5 style={{ color: 'white' }}>{title}</h5>
        <p style={{ color: 'white' }}><strong>Directing</strong>: {directing}</p>
        <p style={{ color: 'white' }}><strong>Acting</strong>: {acting}</p>
        <p style={{ color: 'white' }}><strong>Cinematography</strong>: {cinematography}</p>
        <p style={{ color: 'white' }}><strong>Art Direction</strong>: {art_direction}</p>
        <p style={{ color: 'white' }}><strong>Soundtrack/Score</strong>: {soundtrack}</p>
        <p style={{ color: 'white' }}><strong>Your Rating: {rating}/5</strong></p>
        <button onClick={() => deleteReview(id)}>Cut Review</button>
      </ul>
      
    </Container>
  )
}

const mdp = dispatch => {
  return{
    delete: (id) => dispatch({ type:"REMOVE_REVIEW", id: id})
  }
}


export default connect(null,mdp)(Review)