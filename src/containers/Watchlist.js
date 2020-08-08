import React from 'react'
import { connect } from 'react-redux'
import WatchlistCard from './WatchlistCard'
import { Container } from 'react-bootstrap'


const Watchlist = (props) => {
  console.log(props.user.watchlist.watchlist_movies)
  
  const renderWatchlistCards = () => {
    if (props.user.watchlist.watchlist_movies) {
      return props.user.watchlist.watchlist_movies.map((movie, index) =>
            <WatchlistCard 
             key={index}
             movie={movie}
            /> 
      )
    } else {
      return "No cards to show"
    }
}
  
  return(
    <div className="fixed-bottom">
      <h2>{props.user.username}'s Watchlist</h2>
    <Container>
       {renderWatchlistCards()}
    </Container>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Watchlist)