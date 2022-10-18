import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Login/Login.css";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;

    if (
      !username.match(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/)
    ) {
      formIsValid = false;
      setUsernameError("Username Not Valid");
      return false;
    } else {
      setUsernameError("");
      formIsValid = true;
    }

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  return (
    // <div className="App">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4">
          <form id="loginform" onSubmit={loginSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroupUsername"
                placeholder="Enter username"
                onChange={(event) => setUsername(event.target.value)}
              />
              <small id="emailHelp" className="text-danger form-text">
                {usernameError}
              </small>
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="EmailInput"
                name="EmailInput"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <small id="emailHelp" className="text-danger form-text">
                {emailError}
              </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <small id="passworderror" className="text-danger form-text">
                {passwordError}
              </small>
            </div>
            {/* TODO: handle comfirm password */}
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Confirm password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <small id="passworderror" className="text-danger form-text">
                {passwordError}
              </small>
            </div>
            {/* TODO: handle submit */}
            <div class="col text-center">
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Sign up
              </button>
            </div>
          </form>
          <div style={{ textAlign: "right" }}>
            <a href="login">Already have an account?</a>
          </div>{" "}
        </div>
        {/* Source: <a href="https://askavy.com/react-form/">React Form</a> */}
      </div>
    </div>
    // </div>
  );
}
// export default Login;

// export Login;
