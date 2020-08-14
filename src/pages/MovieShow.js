import React,{useState} from "react"
import {Container, Row, Col} from "react-bootstrap"
import {connect} from "react-redux"
import ReviewForm from '../components/ReviewForm'


const MovieShow = (props) => {
  console.log(props.selectedMovie)

  const [isToggled, setToggled] = useState(false)

  const toggleReview = () => setToggled(!isToggled)
  
  const goBack = () => {
    props.unselectMovie()
  }

  const addToWatchlist = (selectedMovie) => {
    console.log(selectedMovie)
    const watchlist_movie = {
      imdb_id: selectedMovie.imdbID,
      poster: selectedMovie.Poster,
      title: selectedMovie.Title,
      year: selectedMovie.Year,
      watchlist_id: 75
    }
    alert("Movie Added to Watchlist!")
    fetch(`http://localhost:3000/api/v1/watchlist_movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         Accept: "application/json"
      },
      body: JSON.stringify({
        watchlist_movie
      }) 
    })
    .then(resp => resp.json())
    .then(newWatchlistMovie => props.renderWatchlistMovie(newWatchlistMovie))

  }
    const {Director, Title, Poster, Plot, Actors, Rated, Genre, Released, Runtime, Writer} = props.selectedMovie
  return(
    <Container fluid>
    <h1>{Title}</h1>
     <Row>
      <Col><img src={Poster} alt="None"/></Col>
      <Col>
        <h5 align="left"><strong>Director:</strong> {Director}</h5>
        <h5 align="left"><strong>Writer:</strong> {Writer}</h5>
        <h5 align="left"><strong>Genre:</strong> {Genre}</h5>
        <h5 align="left"><strong>Plot:</strong> {Plot}</h5>
        <h5 align="left"><strong>Cast:</strong> {Actors}</h5>
        <h5 align="left"><strong>Release Date:</strong> {Released}</h5>
        <h5 align="left"><strong>Runtime:</strong> {Runtime}</h5> 
        <h5 align="left"><strong>Rated:</strong> {Rated}</h5>
      </Col>
    </Row>
      <button onClick={goBack}>Back to Search</button>
      <button onClick={() => addToWatchlist(props.selectedMovie)}>Add To WatchList</button>
      <button onClick={() => toggleReview()}>Write a Review</button>
    <>
    {isToggled ? <ReviewForm/> : null}
    </>
    </Container>
  )
}

const msp = state => {
  return {
    selectedMovie: state.selectedMovie
  }
}

const mdp = dispatch => {
  return {
    renderWatchlistMovie: (newWatchlistMovie) => dispatch({ type:"ADD_TO_WATCHLIST", newWatchlistMovie: newWatchlistMovie}),
    unselectMovie: () => dispatch({ type:"DESELECT_MOVIE"})
  }
}

export default connect(msp,mdp)(MovieShow)

