import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

  let {loginUser} = useContext(AuthContext)

  const navigate = useNavigate()

  return (

<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '0.5rem'}}>
          <div className="card-body p-5 text-center">

            <form className="mb-md-5 mt-md-4 pb-5" onSubmit={loginUser}>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Por favor, introduce tu correo y contraseña!</p>

              <div className="form-outline form-white mb-4">
                <input
                  name = 'email' 
                  type="email" 
                  id="typeEmailX" 
                  className="form-control form-control-lg" />
                <label 
                  style={{marginTop: 7}}
                  className="form-label" 
                  htmlFor="typeEmailX">Email</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input 
                  name = 'password'
                  type="password" 
                  id="typePasswordX" 
                  className="form-control form-control-lg" />
                <label 
                  style={{marginTop: 7}}
                  className="form-label" 
                  htmlFor="typePasswordX">Password</label>
              </div>

              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

              <button className="btn btn-outline-light btn-lg px-5" type="submit">Iniciar sesion</button>

              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div>

            </form>

            <div onClick={() => navigate('/create-user/')}>
              <p className="mb-0">
                No tienes una cuenta?<a href="#!" style={{marginLeft: 10}} className="text-white-50 fw-bold">Registrate ahora!</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default LoginPage
