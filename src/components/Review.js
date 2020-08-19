import React from "react"
import { connect } from "react-redux"
import { Button } from 'react-bootstrap'
 

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
    <div>
      <br></br>
      <ul>
        <h5 className="review-title" >{title}</h5>
        <p className="review-title"><strong>Directing</strong>: {directing}</p>
        <p className="review-title"><strong>Acting</strong>: {acting}</p>
        <p className="review-title"><strong>Cinematography</strong>: {cinematography}</p>
        <p className="review-title"><strong>Art Direction</strong>: {art_direction}</p>
        <p className="review-title"><strong>Soundtrack/Score</strong>: {soundtrack}</p>
        <p className="review-title"><strong>Your Rating: {rating}/5</strong></p>
        <Button variant="info" onClick={() => deleteReview(id)}>Cut Review</Button>
      </ul>
      
    </div>
  )
}

const mdp = dispatch => {
  return{
    delete: (id) => dispatch({ type:"REMOVE_REVIEW", id: id})
  }
}


export default connect(null,mdp)(Review)