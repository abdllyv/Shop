import { Link } from "react-router-dom";
import { Context } from "../utils/context";
import { useContext } from "react";

const Shop = () => {
  const { data } = useContext(Context);
  return (
    <main>
      {data.length === 0 ? (
        <section className="home">
          <div className="row">
            <h1 className="title">
              <span style={{ fontSize: 80 }}>404</span> Page Not Found
            </h1>
            <div className="btn">
              <Link to="/">Go To Home Page</Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="shop">
          <div className="container">
            <div className="cart-box">
              <div className="row">
                {data.map((item) => (
                  <div className="cart" key={item.id}>
                    <span className="number">{item.id}</span>
                    <h2 className="title">{item.title}</h2>
                    <div className="btn">
                      <Link>See More</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Shop;
