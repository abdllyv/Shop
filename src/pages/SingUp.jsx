import React from "react";

const SingUp = () => {
  return (
    <section className="singUp">
      <div className="container">
        <div className="row">
          <form
            id="registration-form"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <div className="form-group">
              <label >Name</label>
              <input type="name" id="name" name="name" />
              <div id="name-error" className="error-message"></div>
            </div>
            <div className="form-group">
              <label >Surname</label>
              <input type="surname" id="surname" name="surname" />
              <div id="surname-error" className="error-message"></div>
            </div>
            <div className="form-group">
              <label >Email</label>
              <input type="email" id="email" name="email" />
              <div id="email-error" className="error-message"></div>
            </div>
            <div className="form-group">
              <label>Pasword</label>
              <input type="pasword" id="pasword" name="pasword" />
              <div id="pasword-error" className="error-message"></div>
            </div>

            <button type="submit" className="btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SingUp;
