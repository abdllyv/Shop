import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Auth } from "../utils/Auth";
const Home = () => {
  // Global State
  const { setUser,setToken } = useContext(Auth);
  useEffect(() => {
    const checkUser = async () => {
      await axios
        .post(process.env.REACT_APP_CHECK_LOGIN, {
          token: JSON.parse(localStorage.getItem("token")),
        })
        .then((res) => {
          if (res.status === 200) {
            setUser(res.data);
            setToken(true)
          }
        })
        .catch((err) => {
          console.log(err);
          setToken(false)
        });
    };
  checkUser();
}, [setUser,setToken]);
return (
    <main>
      <section className="home">
        <div className="row">
          <h1 className="title">
            Welcome My <span>WEbSite</span>
          </h1>
          <div className="btn">
            <Link to="/shop">Go To Shop Page</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
