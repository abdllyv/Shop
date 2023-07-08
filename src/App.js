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
import ViewAllProduct from "./pages/ViewAllProduct";
import { Validation } from "./utils/Auth";
import ChangeProfilImg from "./pages/ChangeProfilImg";
import ForgotPassword from "./pages/ForgotPassword";
import OtpConfirmation from "./pages/OtpConfirmation";
import ResetPasword from "./pages/ResetPasword";
import PrivateRoutes from "./router/PrivateRoutes";

const App = () => {
  return (
    <Validation>
      <MainContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singUp" element={<SingUp />} />
          <Route element={<PrivateRoutes/>}>
          <Route path="/all-product" element={<ViewAllProduct />} />
          <Route path="/car-detail/:carId" element={<CarDetails />} />

          <Route path="/forget-password" element={<ForgotPassword/>}/>
          <Route path="/otp-confirmation" element={<OtpConfirmation/>} />
          <Route path="/reset-password" element={<ResetPasword/>}/>
          <Route path="/change-profilImg" element={<ChangeProfilImg/>}/>
          <Route path="/profile" element={<Prfile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainContext>
    </Validation>
  );
};

export default App;
