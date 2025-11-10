import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function MyNavbar() {
  return (
    <Navbar expand="lg" className='px-3'>

      <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={Link} to="/contact">Contacts</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/book/list">Book List</Nav.Link>
          <Nav.Link as={Link} to="/book/add">Add a Book</Nav.Link>
          <button>☀️/🌑</button>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  )
}

export default MyNavbar