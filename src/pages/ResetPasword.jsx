
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import axios from "axios";
import { useContext } from "react";
import { Auth } from "../utils/Auth";


const ResetPasword = () => {
  // Navigate
  const navigate = useNavigate();

  // Global State
  const {setToken}=useContext(Auth)

  // Schema
  const registerSchema = object({
    password: string().required().trim().min(8).max(18),
    repassword: string().required().trim().min(8).max(18),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });
  const onSubmit = async (data) => {
    if(data.password === data.repassword){
        await axios
          .post(process.env.REACT_APP_CHANGE_PASSWORD, {
            token: JSON.parse(localStorage.getItem("token")),
            password: data.password,
          })
          .then((res) => {
            if (res.status === 200) {
          
              navigate("/login")
              setToken(false)
              localStorage.setItem("token", JSON.stringify(""));
            }
          })
          .catch((err) => console.log(err));
    }
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
              <label>Password</label>
              <input
                type="password"
                name="password"
                {...register("password")}
              />
              {errors.password && (
                <div className="error-message">{errors.password.message}</div>
              )}
            </div>
            <div className="form-group">
              <label>Repassword</label>
              <input
                type="password"
                name="repassword"
                {...register("repassword")}
              />
              {errors.repassword && (
                <div className="error-message">{errors.repassword.message}</div>
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

export default ResetPasword;
