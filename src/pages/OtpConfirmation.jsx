import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import axios from "axios";


const OtpConfirmation = () => {
  // Navigate
  const navigate = useNavigate();

  // Schema
  const registerSchema = object({
    otp: string().required().trim(),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });
  const onSubmit = async (data) => {
    await axios
      .post(process.env.REACT_APP_VERIFY_OTP_CODE, {
        token: JSON.parse(localStorage.getItem("token")),
        otp: data.otp,
      })
      .then((res) => {
        if (res.status === 200) {
      
          navigate("/reset-password")
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <form
            id="registration-form"
            data-aos="fade-up"
            data-aos-duration="900"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group">
              <label>OTP CONFIRMATION</label>
              <input
                type="text"
                name="otp"
                {...register("otp")}
              />
              {errors.otp && (
                <div className="error-message">{errors.otp.message}</div>
              )}
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

export default OtpConfirmation;
