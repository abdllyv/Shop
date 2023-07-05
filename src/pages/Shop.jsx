import { Link } from "react-router-dom";
import car from "../assets/img/wolswagen.png";

const Shop = () => {
  return (
    <main>
      <section className="shop">
        <div className="container">
          <div className="cart-box">
            <div className="row">
              <div className="cart" data-aos="fade-up" data-aos-duration="900">
                <div className="top">
                  <img src={car} alt="" />
                </div>
                <h2 className="title">Mercedes Benz</h2>
                <p className="detail">
                  Hyundai is an automotive brand known for its economical and
                  durable cars. It is preferred for its user-friendly features
                  and affordable prices.
                </p>
                <span className="number">190.000$</span>
                <div className="btn">
                  <Link>See More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
