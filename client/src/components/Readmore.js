import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

const Readmore = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <NavLink to="/userinfo">Go Back</NavLink>      
    </div>
  </nav>
  <div>


  
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Welcome</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          <div className='left_view'>

          </div>
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  </div>
  </>
  )
}

export default Readmore