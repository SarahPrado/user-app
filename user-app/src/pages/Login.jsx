// import React from 'react';

import Footer from "../components/Footer";
import Navegator from "../components/Navegator";
import Container from 'react-bootstrap/Container';


export const Login = () => {
  return (
    <>
      <Navegator />
      <Container>
      <main className="form-signin w-100 m-auto" style = {{ maxWidth: '35%'}}>
        <form>
          <img className="mb-4" src="	https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
        
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        </form>
      </main>
      <Footer />
      </Container>
    </>
  )
}

export default Login;
