import { Link } from "react-router-dom";
import userImg from "../assets/img/profile-img.png";
import { FaShoppingCart, FaUserCircle, FaWindowClose } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BiSolidUser } from "react-icons/bi";
import { useState } from "react";

const Header = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartIsProfile, setCartIsProfile] = useState(false);

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
            <div className="cart">
              <span className="count">0</span>
              <FaShoppingCart onClick={() => setCartIsOpen(true)} />
            </div>
            <Link className="login" to="/login">
              <FaUserCircle />
              <span>LOG IN</span>
            </Link>
            <div
              class="private-menu "
              onClick={() =>
                cartIsProfile ? setCartIsProfile(false) : setCartIsProfile(true)
              }
            >
              <img src={userImg} alt="profil-img" class="profile-photo" />
              <div
                class={`sub-menu-wrap ${cartIsProfile && "isOpenProfileSide"}`}
              >
                <div class="top">
                  <img src={userImg} alt="profil-img" />
                  <h2 class="title">Sadiq Abdulllayev</h2>
                </div>
                <hr />
                <div class="botom">
                  <ul class="sub-list">
                    <li class="sub-item">
                      <Link class="sub-menu-link">
                        <div className="icon">
                          <BiSolidUser />
                        </div>
                        <p>Edit Profile</p>
                        <span>&gt;</span>
                      </Link>
                    </li>

                    <li class="sub-item">
                      <Link class="sub-menu-link">
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
          </div>
        </div>
      </div>
      <div className={cartIsOpen ? "cartBox isOpenCart" : "cartBox"}>
        <div className="cartHead">
          <h2>My Cart</h2>
          <div className="icon">
            <FaWindowClose />
          </div>
        </div>
        <ul className="cartList">
          <div className="empty">
            <p className="error-empty">Cart is Empty</p>
            <li className="cartItem">
              <div className="carImg">
                <img src={userImg} alt="" />
              </div>
              <div className="carInfo">
                <p className="carTitle">name</p>
                <div className="nums">
                  <p className="carPrice">Price: 180000$</p>
                  <p className="quantity">Quantity: 0</p>
                </div>
              </div>
            </li>
            <Link to="/shop">Buy new car</Link>
          </div>
          <Link to="/cart">View on Cart</Link>
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
