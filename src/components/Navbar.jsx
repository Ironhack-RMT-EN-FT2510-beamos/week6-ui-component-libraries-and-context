import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { useContext } from 'react'
import { ThemeContext } from '../context/theme.context';

function MyNavbar() {

  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setIsDarkTheme((currentValue) => {
      return !currentValue
    })
  }

  return (
    <Navbar expand="lg" className='px-3' bg={isDarkTheme ? "dark" : "light"} data-bs-theme={isDarkTheme ? "dark" : "light"} >

      <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={Link} to="/contact">Contacts</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/book/list">Book List</Nav.Link>
          <Nav.Link as={Link} to="/book/add">Add a Book</Nav.Link>
          <button onClick={toggleTheme}>☀️/🌑</button>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  )
}

// comments that could be code added or changed from the project
// another comment

export default MyNavbar

// another comment