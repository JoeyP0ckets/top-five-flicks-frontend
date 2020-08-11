import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {connect} from 'react-redux'
import * as action from "../actionCreators/actionCreator"

class ReviewForm extends React.Component {
  
  handleReviewSubmit = (event, user) => {
    event.preventDefault()
    const review = {
      imdb_id: "tt0110006",
      title: event.target.title.value,
      year: event.target.year.value,
      directing: event.target.directing.value,
      acting: event.target.acting.value,
      cinematography: event.target.cinematography.value,
      art_direction: event.target.art_direction.value,
      soundtrack: event.target.soundtrack.value,
      rating: event.target.rating.value,
      user_id: 58
    }
    fetch(`http://localhost:3000/api/v1/reviews`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
         Accept: "application/json"
      },
      body: JSON.stringify({
        review
      })
    })
     this.props.renderUser(user)
  }
  
  render() {
    return(
      <Container>
      <Form onSubmit={event => this.handleReviewSubmit(event, this.props.user)} >
        <h1>Review Flick</h1>
        <Form.Group>
          <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" name="title"/>
        </Form.Group>
        <Form.Group>
          <Form.Label >Year</Form.Label>
            <Form.Control type="text" placeholder="Rating" name="year"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label >Directing</Form.Label>
            <Form.Control type="text" as="textarea" placeholder="Directing" name="directing"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label >Acting</Form.Label>
            <Form.Control type="text" as="textarea" placeholder="Acting" name="acting"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label >Cinematography</Form.Label>
            <Form.Control type="text" as="textarea" placeholder="Cinematography" name="cinematography"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label >Art Direction</Form.Label>
            <Form.Control type="text" as="textarea" placeholder="Art Direction" name="art_direction"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label >Soundtrack</Form.Label>
            <Form.Control type="text" as="textarea" placeholder="Soundtrack" name="soundtrack"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label >Rating</Form.Label>
            <Form.Control type="text" placeholder="Rating" name="rating"></Form.Control>
        </Form.Group>
        <Button type="Submit">Submit</Button>
        </Form>
      </Container>
    )
  }
}

const msp = state => {
  return{
    user: state.user
  }
}

const mdp = dispatch => {
  return{
    renderUser: (user) => dispatch(action.renderUser(user))
  }
}


export default connect(msp,mdp)(ReviewForm)
