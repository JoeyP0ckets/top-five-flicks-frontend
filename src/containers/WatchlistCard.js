import React from "react"
import {Card, CardImg, Button} from 'react-bootstrap'
import { connect } from 'react-redux'



const WatchlistCard = (props) => {
  console.log(props)

  const deleteFromWatchlist = (id) => {
    fetch(`http://localhost:3000/api/v1/watchlist_movies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
         Accept: "application/json"
      }
    })
    props.delete(id)
  } 
  return(
    <Card style={{ width: '10rem'}} className="box" bg={"Dark".toLowerCase()} text="light">
      <CardImg src={props.movie.poster} alt={props.movie.title}/>
      <Card.Body>
        <Card.Title>
          <p className="review-text" text="fluid">{props.movie.title}</p>
          <p><Button variant="info" onClick={() => deleteFromWatchlist(props.movie.id)}>Remove</Button></p>
        </Card.Title>
      </Card.Body>
      
    </Card>
  )
}

const mdp = dispatch => {
  return {
    delete: (id) => dispatch({ type:"REMOVE_FROM_WATCHLIST", id: id})
  }
}

export default connect(null,mdp)(WatchlistCard)

