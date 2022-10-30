import React from 'react'

import { Form, Col, Row , Button} from 'react-bootstrap'

export const SearchForm = () => {
  return (
    <div className='bg-dark py-5 rounded p-2 '>
    <Form>
      <Row className='g-2'>
        <Col md={3}></Col>
        <Col md={6}>
          <Form.Control placeholder="First name" />
        </Col>
        <Col md={3}>
         <Button variant = "primary">search</Button>
        </Col>
      </Row>
    </Form>
    </div>
  )
}
