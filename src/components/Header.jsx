import { Link } from "react-router-dom";
import userImg from "../assets/img/profile-img.png";
import { FaShoppingCart, FaUserCircle, FaWindowClose } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BiSolidUser } from "react-icons/bi";
import { useContext, useState } from "react";
import { Context } from "../utils/CartContext";
import { Auth } from "../utils/Auth";

const Header = () => {
  // Local State
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartIsProfile, setCartIsProfile] = useState(false);
  // Global State
  const { cart, cartSum } = useContext(Context);
  const { user, token, setToken } = useContext(Auth);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to="/">
              SH<span>oP</span>
            </Link>
          </div>
          <nav className="nav-bar">
            <ul className="nav-list">
              <li className="nav-items">
                <Link to="/">home</Link>
              </li>
              <li className="nav-items">
                <Link to="/shop">shop</Link>
              </li>
            </ul>
          </nav>
          <div className="userArea">
            {token && (
              <div className="cart">
                <span className="count">{cartSum}</span>
                <FaShoppingCart onClick={() => setCartIsOpen(true)} />
              </div>
            )}
            {!token && (
              <Link className="login" to="/login">
                <FaUserCircle />
                <span>LOG IN</span>
              </Link>
            )}

            {token && (
              <div
                className="private-menu "
                onClick={() =>
                  cartIsProfile
                    ? setCartIsProfile(false)
                    : setCartIsProfile(true)
                }
              >
                {user.profileImage === null ? (
                  <img
                    src={userImg}
                    alt="profil-img"
                    className="profile-photo"
                  />
                ) : (
                  user.profileImage && (
                    <img
                      src={`${process.env.REACT_APP_IMAGE}${user.profileImage}`}
                      alt="profil-img"
                      className="profile-photo"
                    />
                  )
                )}

                <div
                  className={`sub-menu-wrap ${
                    cartIsProfile && "isOpenProfileSide"
                  }`}
                >
                  <div className="top">
                    {user.profileImage === null ? (
                      <img
                        src={userImg}
                        alt="profil-img"
                        className="profile-photo"
                      />
                    ) : (
                      user.profileImage && (
                        <img
                          src={`${process.env.REACT_APP_IMAGE}${user.profileImage}`}
                          alt="profil-img"
                          className="profile-photo"
                        />
                      )
                    )}
                    <h2 className="title">
                      {user.name} {user.surname}
                    </h2>
                  </div>
                  <hr />
                  <div className="botom">
                    <ul className="sub-list">
                      <li className="sub-item">
                        <Link className="sub-menu-link" to="/profile">
                          <div className="icon">
                            <BiSolidUser />
                          </div>
                          <p>Edit Profile</p>
                          <span>&gt;</span>
                        </Link>
                      </li>

                      <li className="sub-item">
                        <Link
                          className="sub-menu-link"
                          onClick={() => {
                            setToken(false);
                            localStorage.setItem("token", JSON.stringify(""));
                          }}
                        >
                          <div className="icon">
                            <FiLogOut />
                          </div>
                          <p>Logout</p>
                          <span>&gt;</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={cartIsOpen ? "cartBox isOpenCart" : "cartBox"}>
        <div className="cartHead">
          <h2>My Cart</h2>
          <div className="icon">
            <FaWindowClose onClick={() => setCartIsOpen(false)} />
          </div>
        </div>
        <ul className="cartList">
          <div className="empty">
            {cart.length === 0 ? (
              <p className="error-empty">Cart is Empty</p>
            ) : (
              cart.map((item) => (
                <li className="cartItem" key={item.id}>
                  <div className="carImg">
                    <img
                      src={`http://localhost:5000/${item.productImage}`}
                      alt=""
                    />
                  </div>
                  <div className="carInfo">
                    <p className="carTitle">{item.name}</p>
                    <div className="nums">
                      <p className="carPrice">Price: {item.price}$</p>
                      <p className="quantity">Quantity: {item.quantify}</p>
                    </div>
                  </div>
                </li>
              ))
            )}
          </div>
          {cart.length !== 0 && <Link to="/all-product">View on Cart</Link>}
        </ul>
      </div>
      <div
        className={`overlay ${cartIsOpen && "isOpen"}`}
        onClick={() => setCartIsOpen(false)}
      ></div>
      <div
        className={`overlay ${cartIsProfile && "isOpen"}`}
        onClick={() => setCartIsProfile(false)}
      ></div>
    </header>
  );
};

export default Header;
