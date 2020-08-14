import React from "react"
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'

const TopFive = (props) => {

  const handleDeleteClick = (id) => {
    fetch(`http://localhost:3000/api/v1/top_fives`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
         Accept: "application/json"
      }
    })
    props.delete(id)
  }

  const {category, titleOne, titleTwo, titleThree, titleFour, titleFive, id} = props.top_five
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
        <Card.Footer>
          <button onClick={() => handleDeleteClick(id)}>Remove</button>
        </Card.Footer>
      </Card>
    )
  }

const mdp = dispatch => {
  return {
    delete: (id) => dispatch({ type:"REMOVE_TOP_FIVE", id: id})
  }
}

export default connect(null,mdp)(TopFive) 

