import React from 'react';

const Registration = () => {
  return (
    <section className="ftco-section img js-fullheight" style={{ backgroundImage: 'url(./assets/bg.jpg)' }}>
      <div className="container2">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Registration</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-wrap p-0">
              <h3 className="mb-4 text-center">Create an Account</h3>
              <form action="#" className="signin-form">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Username" required />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <input id="password-field" type="password" className="form-control" placeholder="Password" required />
                  <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control btn btn-primary submit px-3">Register</button>
                </div>
                <div className="form-group d-md-flex">
                  <div className="w-50">
                  </div>

                </div>
              </form>
              <p className="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
              <div className="social d-flex text-center">
                <a href="#" className="px-2 py-2 mr-md-1 rounded"><span className="ion-logo-facebook mr-2"></span> Facebook</a>
                <a href="#" className="px-2 py-2 ml-md-1 rounded"><span className="ion-logo-twitter mr-2"></span> Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
