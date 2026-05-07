import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import "./navebar.css";

function Navebar() {
  const favCount = useSelector((state) => state.fav.fav_count);
const dispatch =useDispatch();
  return (
    <Navbar expand="lg" variant="dark" className="movie-navbar" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-logo">
          <i className="fa-solid fa-clapperboard" style={{ color: '#e50914', marginRight: '8px' }}></i> 
          <span>Movies</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Movies</Nav.Link>
            <Nav.Link as={Link} to="/favorites"><i className="fa-solid fa-heart" style={{ color: '#e50914' }}></i> Favorites {favCount}</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
} 

export default Navebar;