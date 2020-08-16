import React from 'react'
import { Card, } from 'react-bootstrap'


const TopFiveCard = (props) => {
  
  const {category, titleOne, titleTwo, titleThree, titleFour, titleFive, username} = props.top_five
  return(
    <Card style={{ width: '18rem'}} className="box" bg={"Dark".toLowerCase()} text="light">
      <Card.Title>{category}</Card.Title>
      <Card.Body>
        <ol>
          <li value="1">{titleOne}</li>
          <li>{titleTwo}</li>
          <li>{titleThree}</li>
          <li>{titleFour}</li>
          <li>{titleFive}</li>
        </ol>  
        <h6>posted by: {username}</h6>
      </Card.Body>
    </Card>
  )
}



export default TopFiveCard