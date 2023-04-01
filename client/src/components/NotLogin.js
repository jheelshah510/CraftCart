import React from "react";
import logo from "../CraftCart.png";

const NotLogin = () => {
  return (
    <div className="container-fluid  mt-100 ">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body cart">
              <div className="col-sm-12 empty-cart-cls text-center">
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: "100px" }}
                  className="img-fluid mb-4 mr-3"
                />
                <h3>
                  <strong>Please Login to Add or View Products in cart</strong>
                </h3>

                <a
                  href="http://localhost:3000/signin
                  "
                  className="btn btn-primary cart-btn-transform m-3"
                  data-abc="true"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotLogin;
