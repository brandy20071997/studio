import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CommonNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-transparent custom-font">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">COMMUNITY</Nav.Link>
            <Nav.Link href="#pricing">LOCATION</Nav.Link>
            <Nav.Link href="#pricing">OUR MENU</Nav.Link>
            <Nav.Link href="#pricing">Recipe</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">CONTACT </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              LOGIN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CommonNavbar;