import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


import AuthContext from '../../../context/AuthContext'
import InputContext from '../../../context/InputContext'

import UserFinderList from '../../User/UserFinderList';
import { DOMAIN } from '../../../utils/domain';

import Loading from '../../Loading'

function Header() {

  const {logoutUser, authTokens} = useContext(AuthContext);
  const {inputNav, setInputNav} = useContext(InputContext);

  const [data, setData] = useState([])

  useEffect(() => {

    const fetchUsers = async() => {
      try{

        const response = await fetch(`${DOMAIN}/api/user/users/?username=&name=${inputNav}`,{
          method: 'GET',
          headers: {
              Accept: 'application/json',
              'Authorization' : `Bearer ${authTokens.access}`,
          },
        })
        if(!response.ok){
          console.log(response);
        }
        const JSONresponse = await response.json();
        setData(JSONresponse)

      }catch(error){
        console.log(error)
      }
    }

    fetchUsers();

  },[inputNav])
  

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
                  <Nav.Link href="/">Inicio</Nav.Link>
                  <Nav.Link href="/me/">Perfil</Nav.Link>
                  <Nav.Link onClick={logoutUser} href="/login/">Cerrar sesion</Nav.Link>
                  <NavDropdown
                    title="Ajustes"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Editar perfil</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Editar contraseña
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" >
                      Cambiar lenguaje
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex" style={{marginTop: 20}}>
                  <Form.Control
                    type="search"
                    placeholder="Buscar usuarios"
                    className="me-2"
                    aria-label="Search"
                    onChange={e => setInputNav(e.target.value)}
                  />
                  <Button 
                    variant="btn btn-outline-primary">Buscar</Button>
                  
                </Form>
                {(data.length > 0 && inputNav.length > 3) ? <UserFinderList users = {data}/>: <Loading/>}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;