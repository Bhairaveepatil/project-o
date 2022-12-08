import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/usercard.css'

const Userinfo = () => {


  return (
   <>
   
   <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">User Module </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='add_btn'>
                  <button className='btn btn-primary'>Add data</button>
            </div>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <div className='conatiner'>      
    <table class="table mt-4 p-5">
  <thead>
    <tr className='table-dark'>
      <th scope="col">id</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Job </th>
      <th scope="col">Number</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Mark@gmail.com</td>
      <td>Web developer</td>
      <td>9876543210</td>
      <td className='d-flex justify-content-between'>
        <button className='btn btn-success'><i class="fa-solid fa-eye"></i></button>
        <button className='btn btn-primary'><i class="fa-solid fa-pen-to-square"></i></button>
        <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
   
  </tbody>
</table>    
    </div>
   </>
  )
}

export default Userinfo
