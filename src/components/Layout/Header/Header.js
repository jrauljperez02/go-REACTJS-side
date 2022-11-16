import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


import AuthContext from '../../../context/AuthContext'

function Header() {

  const {logoutUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      {[false,].map((expand) => (
        <Navbar key={expand} bg="dark" fixed='top'  style={
            {
                paddingTop: 10, 
                paddingBottom: 10,
            }
        } expand={expand} className="mb-3 " >
          <Container fluid className='container'>
            <Navbar.Brand style = {{color: 'white'}} href="/"><h1>Go</h1></Navbar.Brand>
            <Navbar.Toggle 
                aria-controls={`offcanvasNavbar-expand-${expand}`} 
                className = 'bg-light'
                />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/me/">Profile</Nav.Link>
                  <Nav.Link onClick={logoutUser} href="/login/">Logout</Nav.Link>
                  <NavDropdown
                    title="Account settings"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Edit profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Edit password
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" >
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex" style={{marginTop: 20}}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="btn btn-outline-primary">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;