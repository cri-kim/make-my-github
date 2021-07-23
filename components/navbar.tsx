import {Navbar ,Container,  Nav} from 'react-bootstrap';

export default function NavBar() {
  return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Make My Github</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dev-icon">DevIcon</Nav.Link>
              <Nav.Link href="/icon">Icon</Nav.Link>
              <Nav.Link href="/template">Template</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}