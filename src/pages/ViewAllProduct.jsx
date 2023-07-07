// Icons
import carImgage from "../assets/img/wolswagen.png";
import { FaTrash } from "react-icons/fa";

const ViewAllProduct = () => {
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
                <th>Car Price</th>
                <th>Edit Car</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="carImg">
                  <img src={carImgage} alt="" />
                </td>
                <td>Name</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  nihil aliquid nulla numquam id illo molestias consectetur
                  adipisci sequi iste voluptatibus optio ratione totam debitis
                  voluptatem, quisquam eveniet nam corrupti.
                </td>
                <td>$1900000</td>
                <td className="edit">
                   
                    <FaTrash  />
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ViewAllProduct;
