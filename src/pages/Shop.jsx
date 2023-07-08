import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Shop = () => {
// Loacl State
  const [cars,setCars]=useState([])
  const [loading,setLoading]=useState(false)
  //  Navigate
  const navigate=useNavigate()
  useEffect(()=>{
    const getData=async()=>{
  try {
    setLoading(true)
     await axios.get(process.env.REACT_APP_ALL_PRODUCT).then(res=>{
      if(res.status===200){
        setCars(res.data)
        setLoading(false)
      }
     })
  } catch (error) {
    setLoading(false)
    navigate("/error")
    
  }
    }
    getData()
  },[navigate])
  return (
    <main>
      <section className="shop">
        {loading && <Loader/>}
        <div className="container">
          <div className="cart-box">
            <div className="row">
         {cars.map(item=>(
          
              <Cart  data={item} key={item.id}/>
         ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
