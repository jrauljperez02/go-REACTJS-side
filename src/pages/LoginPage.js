import React from 'react'
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit';
import logo from '../images/logo.png'

const LoginPage = () => {
  return (
    <MDBContainer className="my-5">
            
      <MDBCard style = {{marginTop: 160}}>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://images.pexels.com/photos/3881034/pexels-photo-3881034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column' style={{padding: 100}}>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <img src={logo} style = {{maxWidth: '100%'}} alt='logo'/>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Password'  type='password' size="lg"/>

              <button className="mb-4 px-5" color='dark' size='lg'>Login</button>

              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  )
}

export default LoginPage

