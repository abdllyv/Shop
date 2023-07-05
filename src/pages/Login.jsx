import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <form
            id="registration-form"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" />
              <div id="email-error" class="error-message"></div>
            </div>
            <div class="form-group">
              <label for="pasword">Pasword</label>
              <input type="pasword" id="pasword" name="pasword" />
              <div id="pasword-error" class="error-message"></div>
            </div>
            <p className="text">
              Don't have an account? <Link to="/singUp">Sign up</Link>
            </p>
            <Link className="text">Forgot Pasword?</Link>
            <button type="submit" class="btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
