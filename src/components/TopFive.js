import React from "react"
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'

const TopFive = (props) => {

  const handleDeleteClick = (id) => {
    fetch(`http://localhost:3000/api/v1/top_fives/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
         Accept: "application/json"
      }
    })
    props.delete(id)
    props.deleteFromMain(id)
  }

  const {category, titleOne, titleTwo, titleThree, titleFour, titleFive, id} = props.top_five
    return(
      <Card style={{ width: '18rem'}} className="box" bg={"Dark".toLowerCase()} text="light">
        <Card.Header><strong>{category}</strong></Card.Header>
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
    delete: (id) => dispatch({ type:"REMOVE_TOP_FIVE", id: id}),
    deleteFromMain: (id) => dispatch({ type:"REMOVE_MAIN_TOP", id: id})
  }
}

export default connect(null,mdp)(TopFive) 

