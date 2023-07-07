import { Link } from "react-router-dom";

const Cart = ({data}) => {
  return (
    <div className="cart" data-aos="fade-up" data-aos-duration="900">
    <div className="top">
      { data.productImage &&   (<img src={`http://localhost:5000/${data.productImage }`}alt={data.name} />)}
    </div>
    <h2 className="title">{data.name}</h2>
    <p className="detail">
   {data.details}
    </p>
    <span className="number">{data.price}$</span>
    <div className="btn">
      <Link to={`/car-detail/${data.id}`}>See More</Link>
    </div>
  </div>
  )
}

export default Cart