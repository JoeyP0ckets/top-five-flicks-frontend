import React from "react"
import { connect } from "react-redux"
 

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
    <>
      <ul>
        <h5>{title}</h5>
        <p><strong>Directing</strong>: {directing}</p>
        <p><strong>Acting</strong>: {acting}</p>
        <p><strong>Cinematography</strong>: {cinematography}</p>
        <p><strong>Art Direction</strong>: {art_direction}</p>
        <p><strong>Soundtrack/Score</strong>: {soundtrack}</p>
        <p><strong>Flicks Rating: {rating}/5</strong></p>
      </ul>
      <button onClick={() => deleteReview(id)}>Cut Review</button>
    </>
  )
}

const mdp = dispatch => {
  return{
    delete: (id) => dispatch({ type:"REMOVE_REVIEW", id: id})
  }
}


export default connect(null,mdp)(Review)