import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SingUp = () => {

// Navigate
const navigate=useNavigate()


  // Schema
  const registerSchema = object({
    name: string().required().trim(),
    surname: string().required().trim(),
    email: string().required().trim().email(),
    password: string().required().trim().min(8).max(18),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });
  const onSubmit = async (data) => {
    await axios
      .post(process.env.REACT_APP_REGISTER, data)
      .then((res) => {
        if(res.status===200){
          navigate("/login")
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="singUp">
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
              <label>Name</label>
              <input type="name" id="name" name="name" {...register("name")} />
              {errors.name && (
                <div className="error-message">{errors.name.message}</div>
              )}
            </div>
            <div className="form-group">
              <label>Surname</label>
              <input
                type="surname"
                id="surname"
                name="surname"
                {...register("surname")}
              />
              {errors.surname && (
                <div className="error-message">{errors.surname.message}</div>
              )}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email")}
              />
              {errors.email && (
                <div className="error-message">{errors.email.message}</div>
              )}
            </div>
            <div className="form-group">
              <label>Pasword</label>
              <input
                type="password"
                id="password"
                name="password"
                {...register("password")}
              />
              {errors.password && (
                <div className="error-message">{errors.password.message}</div>
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

export default SingUp;
