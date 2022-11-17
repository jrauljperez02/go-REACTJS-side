import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer 
        className="text-center text-white" 
        style={
          { backgroundColor: '#ade0db',
            marginTop: 30,
          }}>

         <div className="container pt-4">

          <section className="mb-4">
          
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1 "
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i className="fab fa-facebook-f"></i></a>

          
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i className="fab fa-twitter"></i></a>

          
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i className="fab fa-google"></i></a>

          
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"><i className="fab fa-instagram"></i></a>

            
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i className="fab fa-linkedin"></i></a>
          
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i className="fab fa-github"></i></a>
          </section>
    
        </div>
 
        <div className="text-center text-dark p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          © 2022 Copyright:
          <a className="text-dark" style={{marginLeft: 10}} href="/">GO</a>
        </div>
  
      </footer>
    </div>
  )
};

export default Footer