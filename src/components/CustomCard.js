import React from 'react'
import {   Card, Button} from 'react-bootstrap'

export const CustomCard = ({movie, func}) => {
  return (
    <Card style={{ width: '18rem', color:"black" }}>
      <Card.Img variant="top" src={movie?.Poster} />
      <Card.Body>
        <Card.Title>{movie?.Title}</Card.Title>
        <Card.Text>
         Rating: {movie?.imdbRating} <br>
         </br>
         Year: {movie?.Year}
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <Button  onClick={() => func({ ...movie, type:"happy"})} variant="danger">happy</Button>
        <Button  onClick={() => func({ ...movie, type:"lazy"})} variant="info">lazy</Button>
        </div>
      </Card.Body>
    </Card>
  )
}
