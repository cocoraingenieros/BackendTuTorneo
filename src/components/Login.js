import React from 'react';

export default function Login({handleLogin, handleEmail, handlePassword}) {

  return (
    <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div
            className="card shadow-2-strong"
            style={{ borderRadius: "1rem" }}
          >
            <div className="card-body p-5 text-center">
              <h3 className="mb-5">Iniciar Sesion</h3>
              <div className="form-outline mb-4">
                <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    onChange={handleEmail}
                />
                <label className="form-label" htmlFor="typeEmailX-2">
                  Email
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="typePasswordX-2"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  onChange={handlePassword}
                />
                <label className="form-label" htmlFor="typePasswordX-2">
                  Contraseña
                </label>
              </div>
            
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
                onClick={handleLogin}
              >
                Ingresar
              </button>
              <hr className="my-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

