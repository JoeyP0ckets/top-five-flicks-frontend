import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {connect} from 'react-redux'


class ReviewForm extends React.Component {
  
  handleReviewSubmit = (event) => {
    event.preventDefault()
    const review = {
      imdb_id: this.props.selectedMovie.imdbID,
      title: this.props.selectedMovie.Title,
      year: this.props.selectedMovie.Year,
      directing: event.target.directing.value,
      acting: event.target.acting.value,
      cinematography: event.target.cinematography.value,
      art_direction: event.target.art_direction.value,
      soundtrack: event.target.soundtrack.value,
      rating: event.target.rating.value,
      user_id: 77
    }
    console.log(review)
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
      .then(resp => resp.json())
      .then(newReview => this.props.renderReview(newReview))
      event.target.reset()
      alert("Review Successfully Created!")
  }
  
  render() {
    const {Title, Year} = this.props.selectedMovie
    return(
      <Container>
        <Form onSubmit={event => this.handleReviewSubmit(event)} >
        <strong>{Title}</strong>
        <p><strong>{Year}</strong></p>
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
    selectedMovie: state.selectedMovie
  }
}

const mdp = dispatch => {
  return{
    renderReview: (newReview) => dispatch({ type: "ADD_REVIEW", newReview: newReview})
  }
}

export default connect(msp,mdp)(ReviewForm)
