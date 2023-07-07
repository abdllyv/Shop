import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { MainContext } from "./utils/CartContext";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import CarDetails from "./pages/CarDetails";
import Prfile from "./pages/Prfile";
import Loader from "./components/Loader";

const App = () => {
  return (
    <MainContext>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/car-detail/:carId" element={<CarDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singUp" element={<SingUp />} />
        <Route path="/profile" element={<Prfile/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainContext>
  );
};

export default App;
