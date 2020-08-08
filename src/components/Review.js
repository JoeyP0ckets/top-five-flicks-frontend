import React from "react"

const Review = (props) => {
  return(
    <ul>
      <li>
        {props.review.title}
      </li>
    </ul>
  )
}

export default Review