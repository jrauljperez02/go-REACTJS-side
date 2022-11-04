import React from 'react'
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
import logo from '../images/logo.png'
import '../styles/CreateUserPage.scss'

const CreateUserPage = () => {

  const gender = ['Male', 'Female', 'Prefer not to say']

  return (
    <MDBContainer className="my-5">
            
      <MDBCard style = {{marginTop: 160}}>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column' style={{padding: 100}}>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <img src={logo} style = {{maxWidth: '100%'}} alt='logo'/>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Create account</h5>

              <div className='input-group mb-3 input-names'>
                <input type="text" className="form-control" placeholder="First name" aria-describedby="basic-addon1"/>
                <input type="text" className="form-control" placeholder="Second name"  aria-describedby="basic-addon1"/>
              </div>


              <div className='input-group mb-3 input-names'>
                <input type="text" className="form-control" placeholder="Email" aria-describedby="basic-addon1"/>
              </div>

              <div className='input-group mb-3 input-names'>
                <input type="password" className="form-control" placeholder="Password" aria-describedby="basic-addon1"/>
                <input type="password" className="form-control" placeholder="Confirm password"  aria-describedby="basic-addon1"/>
              </div>

              <div className='input-group mb-3 input-names form-floating'>
                <input type="date" className="form-control" id="floatingInputValue"/>
                <label htmlFor ="floatingInputValue">Birhday</label>
              </div>

              <div style={{paddingBottom: 20}}>
                <select className="form-select">
                  {gender.map(item => <option key = {item}>{item}</option>)}
                </select>
              </div>
              

              <button className="mb-4 px-5" color='dark' size='lg'>Create account</button>

            </MDBCardBody>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardImage src='https://images.pexels.com/photos/5821029/pexels-photo-5821029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  )
}

export default CreateUserPage