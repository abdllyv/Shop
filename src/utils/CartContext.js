import { useState, createContext } from "react";

export const Context = createContext();

export const MainContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  // add to item for cart
  const addToItem = (car) => {
    let excitingProduct = cart.find((item) => item.id === car.id);
    if (excitingProduct) {
      let upgradedCart = cart.map((item) => {
        if (excitingProduct.id === item.id) {
          return { ...item, quantify: item.quantify + 1 };
        } else {
          return item;
        }
      });
      setCart(upgradedCart);
    } else {
      setCart([...cart, { ...car, quantify: 1 }]);
    }
  };
  const globalStates = {
    // State
    cart,
    setCart,
    // Function
    addToItem,
  };
  return <Context.Provider value={globalStates}>{children}</Context.Provider>;
};
