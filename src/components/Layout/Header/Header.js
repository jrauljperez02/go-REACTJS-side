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
import UserContext from '../../../context/UserContext'

import UserFinderList from '../../User/UserFinderList';
import { DOMAIN } from '../../../utils/domain';

import { useNavigate } from 'react-router-dom';

import default_profile_picture from '../../../images/default_profile_picture.jpg'

import scrollToTop from '../../../utils/scrollToTop';

function Header() {

  const {logoutUser, authTokens} = useContext(AuthContext);
  const {inputNav, setInputNav} = useContext(InputContext);
  const {me} = useContext(UserContext);

  const [data, setData] = useState([])

  const navigate = useNavigate();

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



  const enableOnline = async(e) => {
    e.preventDefault();
    try{
      const response = await fetch(`${DOMAIN}/api/user/users/${me.id}/`,{
        method: 'PATCH',
        body: JSON.stringify({"is_online": true}),
        headers: {
            'Content-Type':'application/json',
            'Authorization' : `Bearer ${authTokens.access}`,
        },
      })
      if(!response.ok){
        console.log(response);
      }
      window.location.reload();
    }catch(error){
      console.log(error)
    }
  }

  const disableOnline = async(e) => {
    e.preventDefault();
    try{
      const response = await fetch(`${DOMAIN}/api/user/users/${me.id}/`,{
        method: 'PATCH',
        body: JSON.stringify({"is_online": false}),
        headers: {
            'Content-Type':'application/json',
            'Authorization' : `Bearer ${authTokens.access}`,
        },
      })
      if(!response.ok){
        console.log(response);
      }
      window.location.reload();
    }catch(error){
      console.log(error)
    }
  }
  

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
            <Navbar.Brand 
              style = {{color: 'white'}} 
              onClick={() => {
                  navigate('/')
                  scrollToTop();
                }}><h1>Go</h1></Navbar.Brand>
            <Navbar.Toggle 
                aria-controls={`offcanvasNavbar-expand-${expand}`} 
                className="navbar-dark bg-dark"
                />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title 
                id={`offcanvasNavbarLabel-expand-${expand}`} 
                onClick = {() => {
                    navigate(`/`);
                    scrollToTop();
                  }}>
                  Inicio
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link  onClick = {() => 
                  {
                    navigate(`/me/`);
                    scrollToTop();
                  }}
                      style={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                    <img 
                      style={{
                        maxWidth: '6%',
                        borderRadius: 10,
                        marginRight: 6
                      }}
                      alt = '' 
                      src = {me.profile_picture === null ? default_profile_picture: me.profile_picture}/>Perfil</Nav.Link>
                  <Nav.Link onClick={() => {
                    logoutUser();
                    navigate('/login/');
                  }}>Cerrar sesion</Nav.Link>


                  <NavDropdown
                    title="Editar estado"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item 
                      onClick={enableOnline} 
                      style={{display: 'flex', alignItems: 'center'}}><span style={{fontSize: 8, marginRight: 5}}>🟢</span> Disponible</NavDropdown.Item>
                    <NavDropdown.Item 
                      onClick={disableOnline} 
                      style={{display: 'flex', alignItems: 'center'}}><span style={{fontSize: 8, marginRight: 5}}>🔴</span> Invisible</NavDropdown.Item>
                  </NavDropdown>


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
                <Form 
                  className="d-flex" 
                  style={{marginTop: 20}}>
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
                { inputNav.length > 3 ? <UserFinderList users = {data}/>: null}

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;