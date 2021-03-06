import React from "react"
import { connect } from "react-redux"
import MovieContainer from "../containers/MovieContainer"


class Search extends React.Component {
  
  
  searchByTitle = e => {
    e.preventDefault() 
    const title = e.target.title.value.replace(" ", "+")
    fetch(`http://www.omdbapi.com/?s=${title}&apikey=4d6b4f28`)
      .then(resp => resp.json())
      .then(searchedData => this.props.filteredSearch(searchedData))
      e.target.reset()
  }
  
  render () {
    console.log(this.props)
    return (
      <div className="search-container">
        <form onSubmit={e => this.searchByTitle(e)}>
          <input
            type="text"
            placeholder="Enter Title"
            maxLength="50"
            name="title"        
          />
          <button type="submit">Search Movies</button>
        </form>
        {this.props.searchedOmdb ? <MovieContainer /> : null }
      </div>
    )
  }
}

const msp = state => {
  return {
    searchedOmdb: state.searchedOmdb

  }
}


const mdp = dispatch => {
  return {
    //doing it like this allows action to be in only this dispatch and avoid action controllers

    filteredSearch: (searchedData) => dispatch({ type: "SEARCHED_OMDB", searchedOmdb: searchedData})
  }
}


export default connect(msp, mdp)(Search)