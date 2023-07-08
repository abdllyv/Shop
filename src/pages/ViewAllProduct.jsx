// Icons
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { Context } from "../utils/CartContext";

const ViewAllProduct = () => {
  // Gloabl State
  const { cart, incrementProduct, decrementProduct, removeProduct, total } =
    useContext(Context);
  return (
    <section className="allCars">
      <div className="container">
        <div className="row">
          <h2 className="title">All Cars List</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Car Image</th>
                <th>Car Name</th>
                <th>Car Details</th>
                <th>Quantify</th>
                <th>Car Price</th>
                <th>Edit Car</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="carImg">
                    {item.productImage && (
                      <img
                        src={`${process.env.REACT_APP_CAR_IMG}${item.productImage}`}
                        alt={item.name}
                      />
                    )}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.details}</td>
                  <td>
                    <div className="btn">
                      <button onClick={() => incrementProduct(item)}>+</button>
                      <div className="quantify">{item.quantify}</div>

                      <button onClick={() => decrementProduct(item)}> -</button>
                    </div>
                  </td>
                  <td>${item.price}</td>
                  <td className="edit">
                    <FaTrash onClick={() => removeProduct(item.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total-sum">
            Total: <span>{total}$</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewAllProduct;
