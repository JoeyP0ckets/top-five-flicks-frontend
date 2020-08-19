import React from 'react'
import {Card, CardImg} from 'react-bootstrap'
import {connect} from 'react-redux'


const MovieCard = (props) => {
  // console.log(props)

  const clickMovieDetails = (imdbID) => {
    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=`)
      .then(resp => resp.json())
      .then(movie => props.renderMovieDetails(movie))
    }
  
  return(
    <Card style={{ width: '16rem'}} className="box" bg={"Dark".toLowerCase()} text="light">
      <CardImg src={props.movie.Poster} alt={props.movie.title}/>
      <Card.Title>{props.movie.Title}</Card.Title>
      <Card.Body>{props.movie.Year}</Card.Body>
      <Card.Footer><button onClick={()=>clickMovieDetails(props.movie.imdbID)}>Details</button></Card.Footer>
    </Card>
  )
}

  const mdp = dispatch => {
    return{
      renderMovieDetails: (movie) => dispatch({ type: "SELECT_MOVIE", selectedMovie: movie })
    }
  }


export default connect(null,mdp)(MovieCard)