import React, {useState} from 'react'
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
import { DOMAIN } from '../utils/domain'
import { Link } from 'react-router-dom'
 
const CreateUserPage = () => {

  const gender = ['Male', 'Female', 'Prefer not to say']

  const [input, setInput] = useState({
    first_name: '',
    last_name : '',
    email: '',
    password: '',
    birthday: null,
    gender: ''
  })
  const [password2, setPassword2] = useState('')


  const [isEmailCorrect, setIsEmailCorrect] = useState(true)
  const [isPasswordOK, setIsPasswordOK] = useState(true)


  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if(!input.email.includes('@')){
      setIsEmailCorrect(false)
    }
    if(input.password !== password2 || input.password.length < 8){
      setIsPasswordOK(false)
    }else{
      setIsEmailCorrect(true);
      setIsPasswordOK(true);
      
      const response = await fetch( DOMAIN + '/api/user/create/',{
        method: 'POST',
        headers: {
           "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(input)
      })
      if(response.status === 201){
        alert('User created ');
      }

    }
  }

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
                <input type="text" className="form-control" placeholder="First name" aria-describedby="basic-addon1" onChange = {e => setInput({...input, first_name: e.target.value})}/>
                <input type="text" className="form-control" placeholder="Second name" required aria-describedby="basic-addon1" onChange = {e => setInput({...input, last_name: e.target.value})}/>
              </div>


              <div className='input-group mb-3 input-names'>
                <input type="text" className="form-control" style = {isEmailCorrect ? null : {borderColor: 'red', backgroundColor: '#FFB5A6'}}  placeholder="Email" aria-describedby="basic-addon1" onChange = {e => setInput({...input, email: e.target.value})}/>
              </div>

              <div className='input-group mb-3 input-names'>
                <input type="password" className="form-control" style = {isPasswordOK ? null : {borderColor: 'red', backgroundColor: '#FFB5A6'}} placeholder="Password" aria-describedby="basic-addon1" onChange = {e => setInput({...input, password: e.target.value})}/>
                <input type="password" className="form-control" style = {isPasswordOK ? null : {borderColor: 'red', backgroundColor: '#FFB5A6'}} placeholder="Confirm password"  aria-describedby="basic-addon1" onChange = {e =>  setPassword2(e.target.value)}/>
              </div>

              <div className='input-group mb-3 input-names form-floating'>
                <input type="date" className="form-control" id="floatingInputValue" onChange = {e => setInput({...input, birthday: e.target.value})}/>
                <label htmlFor ="floatingInputValue">Birhday</label>
              </div>

              <div style={{paddingBottom: 20}}>
                <select className="form-select">
                  {gender.map(item => <option key = {item} onChange = {e => setInput({...input, gender: e.target.value})}>{item}</option>)}
                </select>
              </div>
              

              <button className="mb-4 px-5" color='dark' size='lg' onClick = {handleSubmit}>Create account</button>

              <Link to = '/login/' className="btn btn-primary">
                Sig in
              </Link>

            </MDBCardBody>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardImage src='https://images.pexels.com/photos/5605423/pexels-photo-5605423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  )
}

export default CreateUserPage