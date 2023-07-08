import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../utils/CartContext";
import Loader from "../components/Loader";
const CarDetails = () => {
  // Params
  const { carId } = useParams();
  // Local State
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(false);

  // Global State
  const { addToItem } = useContext(Context);

  // Navigate
  const navigate = useNavigate();

  useEffect(() => {
    const singleData = async () => {
      try {
        setLoading(true);
        await axios
          .get(`${process.env.REACT_APP_ALL_PRODUCT}/${carId}`)
          .then((res) => {
            if (res.status === 200) {
              setCar(res.data);
              setLoading(false);
            }
          });
      } catch (error) {
        setLoading(false);
        navigate("/error");
      }
    };
    singleData();
  }, [carId, navigate]);

  return (
    <section className="car-details">
      {loading && <Loader />}
      <div className="container">
        <div className="row">
          <div className="car-info">
            <div
              className="left-side"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              {car.productImage && (
                <img
                  src={`${process.env.REACT_APP_CAR_IMG}${car.productImage}`}
                  alt={car.name}
                />
              )}
            </div>
            <div
              className="right-side"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="title">{car.name}</div>
              <div className="details">{car.details}</div>
              <div className="price">{car.price}$</div>
              <button className="btn" onClick={() => addToItem(car)}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
