import React from "react"
import {Card, CardImg} from 'react-bootstrap'


const WatchlistCard = (props) => {
  console.log(props)
  return(
    <Card style={{ width: '10rem'}} className="box">
      <CardImg src={props.movie.poster} alt={props.movie.title}/>
      <Card.Title>{props.movie.title}</Card.Title>
      <Card.Body>{props.movie.year}</Card.Body>
    </Card>
  )
}

export default WatchlistCard

