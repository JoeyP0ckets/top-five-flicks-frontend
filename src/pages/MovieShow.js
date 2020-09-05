import React,{useState} from "react"
import {Row, Col, Button} from "react-bootstrap"
import {connect} from "react-redux"
import ReviewForm from '../components/ReviewForm'


const MovieShow = (props) => {

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
      watchlist_id: props.user.watchlist.id
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
    <div className="movie-container">
      <br></br>
    <h1 className="review-text">{Title}</h1>
    <br></br>
     <Row>
      <Col><img className="poster-image" src={Poster} alt="None"/></Col>
      <Col className="poster-show">
      <br></br>
        <h5 className="review-text" align="left" ><strong>Director:</strong> {Director}</h5>
        <h5 align="left" className="review-text" ><strong>Writer:</strong> {Writer}</h5>
        <h5 align="left" className="review-text" ><strong>Genre:</strong> {Genre}</h5>
        <h5 align="left" className="review-text" ><strong>Plot:</strong> {Plot}</h5>
        <h5 align="left" className="review-text" ><strong>Cast:</strong> {Actors}</h5>
        <h5 align="left" className="review-text" ><strong>Release Date:</strong> {Released}</h5>
        <h5 align="left" className="review-text" ><strong>Runtime:</strong> {Runtime}</h5> 
        <h5 align="left" className="review-text" ><strong>Rated:</strong> {Rated}</h5>
      </Col>
    </Row>
    <br></br>
    <br></br>
      <Button variant="dark" onClick={goBack}>Back to Search</Button>&nbsp;&nbsp;&nbsp;
      <Button variant="dark" onClick={() => addToWatchlist(props.selectedMovie)}>Add To WatchList</Button>&nbsp;&nbsp;&nbsp;
      <Button variant="dark" onClick={() => toggleReview()}>Write a Review</Button>&nbsp;&nbsp;&nbsp;
    <>
    {isToggled ? <ReviewForm/> : null}
    </>
   </div> 
  )
}

const msp = state => {
  return {
    selectedMovie: state.selectedMovie,
    user: state.user
  }
}

const mdp = dispatch => {
  return {
    renderWatchlistMovie: (newWatchlistMovie) => dispatch({ type:"ADD_TO_WATCHLIST", newWatchlistMovie: newWatchlistMovie}),
    unselectMovie: () => dispatch({ type:"DESELECT_MOVIE"})
  }
}

export default connect(msp,mdp)(MovieShow)

