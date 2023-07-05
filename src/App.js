import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { MainContext } from "./utils/context";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";

const App = () => {
  return (
    <MainContext>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/singUp" element={<SingUp/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </MainContext>
  );
};

export default App;
