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
            <div class="form-group">
              <label for="name">Name</label>
              <input type="name" id="name" name="name" />
              <div id="name-error" class="error-message"></div>
            </div>
            <div class="form-group">
              <label for="surname">Surname</label>
              <input type="surname" id="surname" name="surname" />
              <div id="surname-error" class="error-message"></div>
            </div>
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

            <button type="submit" class="btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SingUp;
