import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../utils/context";
import axios from "axios";
const Home = () => {
  const { setData } = useContext(Context);
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main>
      <section className="home">
        <div className="row">
          <h1 className="title">
            Welcome My <span>WEbSite</span>
          </h1>
          <div className="btn">
            <Link to="/shop" onClick={getData}>
              Go To Shop Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
