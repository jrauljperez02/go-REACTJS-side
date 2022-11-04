import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import logo from '../images/logo.png'
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
}
from 'mdb-react-ui-kit';


const LoginPage = () => {

  let {loginUser} = useContext(AuthContext)

  return (
    <MDBContainer className="my-5">
            
    <MDBCard style = {{marginTop: 160}}>
      <MDBRow className='g-0'>

        <MDBCol md='6'>
          <MDBCardImage src='https://images.pexels.com/photos/5605423/pexels-photo-5605423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="login form" className='rounded-start w-100'/>
        </MDBCol>

        <MDBCol md='6'>
          <MDBCardBody className='d-flex flex-column' style={{padding: 100}}>

            <div className='d-flex flex-row mt-2'>
              <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
              <img src={logo} style = {{maxWidth: '100%'}} alt='logo'/>
            </div>

            <form onSubmit={loginUser}>
              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Login to your account</h5>

              <div className='input-group mb-3 input-names'>
                <input 
                  type="text" 
                  className="form-control" 
                  name='email' 
                  placeholder='Email'
                  />
              </div>

              <div className='input-group mb-3 input-names'>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder='Password'
                  name = 'password' />
              </div>

              <button className="mb-4 px-5" type = 'submit' color='dark' size='lg'>Login</button>
            </form>

          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>

  </MDBContainer>
  )
}

export default LoginPage
