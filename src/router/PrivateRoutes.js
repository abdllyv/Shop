import { useContext } from "react";
import { Navigate,Outlet } from "react-router-dom";
import { Auth } from "../utils/Auth";

const PrivateRoutes =()=>{
   const {token}=useContext(Auth)

   return token ? <Outlet/> : <Navigate to={"/login"} />
}
export default PrivateRoutes