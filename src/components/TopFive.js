import React from "react"
import { Card } from 'react-bootstrap'

const TopFive = (props) => {

  const {category, titleOne, titleTwo, titleThree, titleFour, titleFive} = props.top_five
    return(
      <Card>
        <Card.Title><strong>{category}</strong></Card.Title>
        <Card.Body>
        <ol>
          <li value="1">{titleOne}</li>
          <li>{titleTwo}</li>
          <li>{titleThree}</li>
          <li>{titleFour}</li>
          <li>{titleFive}</li>
      </ol>
        </Card.Body>
      </Card>
    )
  }

export default TopFive 

      // <ol>
      //   <p><strong>{category}</strong></p>
      //     <li value="1">{titleOne}</li>
      //     <li>{titleTwo}</li>
      //     <li>{titleThree}</li>
      //     <li>{titleFour}</li>
      //     <li>{titleFive}</li>
      // </ol>