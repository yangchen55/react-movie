import React from 'react'
import { Form, Col, Row , ButtonGroup, Button} from 'react-bootstrap'
import { CustomCard } from './CustomCard'

export const MovieList = () => {
  return (

    <div className='bg-dark py-5 rounded p-4 mt-3'>
   <Row>
    <Col>
    <ButtonGroup aria-label="Basic example">
      <Button variant="primary">All</Button>
      <Button variant="danger">Happy</Button>
      <Button variant="info">Sad</Button>
    </ButtonGroup>


{/* how many movies are found  */}

<p className='m-3'> 5 movies found</p>

    </Col>
   </Row>
   <Row>
    <Col className="d-flex flex-wrap justify-content-around gap-3"> 
    <CustomCard/>

    
    </Col>
   </Row>
   </div>
  )
}
