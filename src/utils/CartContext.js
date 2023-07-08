import { useState, createContext, useEffect } from "react";

export const Context = createContext();

export const MainContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartSum, setCartSum] = useState(0);
  const [total, setTotal] = useState(0);

  //Start Local Storage

  useEffect(() => {
    const getSaveCart = () => {
      const saveData = JSON.parse(localStorage.getItem("cart"));
      if (saveData !== null) {
        setCart(saveData);
      }
    };
    getSaveCart();
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  //End Local Storage

  useEffect(() => {
    // Cart Quantity Total
    const calcQuantity = () => {
      let quantify = cart.map((item) => item.quantify);
      let totalQuatity = quantify.reduce((acc, curr) => acc + curr, 0);
      setCartSum(totalQuatity);
    };
    calcQuantity();
    // Calculate Tota price
    const totalSum = () => {
      let productPrice = cart.map(
        (item) => item.quantify * Number(item.price.replace(".", ""))
      );
      let sum = productPrice.reduce((acc, curr) => acc + curr, 0);
      setTotal(sum);
    };
    totalSum();
  }, [cart]);

  // Add to item for cart
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
  // Incriment Product
  const incrementProduct = (product) => {
    if (product) {
      let updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantify: item.quantify + 1 };
        } else {
          return item;
        }
      });
      setCart(updatedCart);
    }
  };
  // Decrement produect
  const decrementProduct = (product) => {
    if (product) {
      let updatedCart = cart.map((item) => {
        if (item.id === product.id && item.quantify > 1) {
          return { ...item, quantify: item.quantify - 1 };
        } else {
          return item;
        }
      });
      setCart(updatedCart);
    }
  };

  // Remove Car From Cart
  const removeProduct = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const globalStates = {
    // State
    cart,
    setCart,
    cartSum,
    setCartSum,
    total,
    setTotal,
    // Function
    addToItem,
    incrementProduct,
    decrementProduct,
    removeProduct,
  };
  return <Context.Provider value={globalStates}>{children}</Context.Provider>;
};
