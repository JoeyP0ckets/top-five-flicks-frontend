import React from "react"
import {Card, CardImg} from 'react-bootstrap'


const WatchlistCard = (props) => {
  // console.log(props)

  const deleteFromWatchlist = () => {
    console.log("clicked")
  } 
  return(
    <Card style={{ width: '10rem'}} className="box">
      <CardImg src={props.movie.poster} alt={props.movie.title}/>
      <Card.Title>{props.movie.title}</Card.Title>
      <Card.Body>
        {props.movie.year}
        <p><button onClick={deleteFromWatchlist}>Delete</button></p>
      </Card.Body>

    </Card>
  )
}

export default WatchlistCard

