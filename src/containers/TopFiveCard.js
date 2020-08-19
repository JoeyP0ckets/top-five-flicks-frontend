import React from 'react'
import { Card, } from 'react-bootstrap'


const TopFiveCard = (props) => {
  
  const {category, titleOne, titleTwo, titleThree, titleFour, titleFive, username} = props.top_five
  return(
    <Card style={{ width: '18rem'}} className="box" bg={"Dark".toLowerCase()} text="light">
      <Card.Title className="review-text">{category}</Card.Title>
      <Card.Body>
        <ol>
          <li value="1" className="review-text">{titleOne}</li>
          <li className="review-text">{titleTwo}</li>
          <li className="review-text">{titleThree}</li>
          <li className="review-text">{titleFour}</li>
          <li className="review-text">{titleFive}</li>
        </ol>  
        <h6 className="review-text">posted by: {username}</h6>
      </Card.Body>
    </Card>
  )
}



export default TopFiveCard