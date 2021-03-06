import React from "react"
import { connect } from "react-redux"
import MovieCard from './MovieCard'
import {Container} from 'react-bootstrap'


const MovieContainer = (props) => {
  // console.log(props.searchedOmdb)
  
  
  const renderMovieCards = () => {
    return props.searchedOmdb.Search.map((movie, index) =>
      <MovieCard 
        key={index}
        movie={movie}
      />
    )
  }
  return(
    <div className="movie-container">
      <Container >
        {renderMovieCards()}
      </Container>
    </div>
  )
}
const msp = state => {
  return {
    searchedOmdb: state.searchedOmdb
  }
}

export default connect(msp)(MovieContainer) 