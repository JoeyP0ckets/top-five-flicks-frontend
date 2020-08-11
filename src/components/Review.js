import React from "react"
 

const Review = (props) => {
  let {title, acting, art_direction, cinematography, directing, soundtrack, rating} = props.review
  return(
    <ul>
        <h5>{title}</h5>
        <p><strong>Directing</strong>: {directing}</p>
        <p><strong>Acting</strong>: {acting}</p>
        <p><strong>Cinematography</strong>: {cinematography}</p>
        <p><strong>Art Direction</strong>: {art_direction}</p>
        <p><strong>Soundtrack/Score</strong>: {soundtrack}</p>
        <p><strong>Flicks Rating: {rating}/5</strong></p>
      
    </ul>
  )
}

export default Review