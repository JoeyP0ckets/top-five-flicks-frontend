import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import ReactStars from "react-rating-stars-component"


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
    rating: this.props.starRating,
    user_id: this.props.user.id
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
  setRating = (newValue) => {
   this.props.rateStar(newValue)
  }

  
  render() {
    const {Title, Year} = this.props.selectedMovie
    
    return(
      <div style={{backgroundColor: "black"}}>
        <br></br>
        <Form onSubmit={event => this.handleReviewSubmit(event)} >
        <h2><strong className="review-title">{Title}</strong></h2>
        <p className="review-title"><strong>{Year}</strong></p>
        <Form.Group>
          <Form.Label className="review-title">Directing</Form.Label>
            <Form.Control type="text" as="textarea" placeholder="Directing" name="directing"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="review-title">Acting</Form.Label>
            <Form.Control type="text" as="textarea" placeholder="Acting" name="acting"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="review-title">Cinematography</Form.Label>
            <Form.Control type="text" as="textarea" placeholder="Cinematography" name="cinematography"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="review-title">Art Direction</Form.Label>
            <Form.Control type="text" as="textarea" placeholder="Art Direction" name="art_direction"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="review-title">Soundtrack</Form.Label>
            <Form.Control type="text" as="textarea" placeholder="Soundtrack" name="soundtrack"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="review-title">Rating</Form.Label>
          <ReactStars 
            className="stars-rater"
            count={5}
            onChange={this.setRating}
            size={24}
            activeColor="#ffd700"
          />
        </Form.Group>
        <Button variant="success" type="Submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

const msp = state => {
  return{
    selectedMovie: state.selectedMovie,
    user: state.user,
    starRating: state.starRating
  }
}

const mdp = dispatch => {
  return{
    renderReview: (newReview) => dispatch({ type: "ADD_REVIEW", newReview: newReview}),
    rateStar: (newValue) => dispatch({ type: "RENDER_STAR_RATING", newValue: newValue})
  }
}

export default connect(msp,mdp)(ReviewForm)
