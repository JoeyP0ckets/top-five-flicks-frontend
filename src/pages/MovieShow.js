import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import {connect} from "react-redux"

const MovieShow = (props) => {
  console.log(props.selectedMovie)

  const goBack = () => {
    console.log("I was clicked")
  }

  const addToWatchlist = (selectedMovie) => {
    console.log(selectedMovie)
  }

  return(
    <Container fluid>
    <h1>{props.selectedMovie.Title}</h1>
    <h5>Director: {props.selectedMovie.Director}</h5> 
    <Row>
      <Col><img src={props.selectedMovie.Poster} alt="No"/></Col>
      <Col>
        <h5 align="left">Plot: {props.selectedMovie.Plot}</h5>
        <h5 align="left">Cast: {props.selectedMovie.Actors}</h5>
        <h6 align="left">Rated: {props.selectedMovie.Rated}</h6>
        <h6>Ratings: IMDB {props.selectedMovie.Ratings[0].Value}</h6>
      </Col>
    </Row>
      <button onClick={goBack}>Back to Search</button>
      <button onClick={() => addToWatchlist(props.selectedMovie)}>Add To WatchList</button>
    </Container>
  )
}

const msp = state => {
  return {
    selectedMovie: state.selectedMovie
  }
}

export default connect(msp)(MovieShow)

