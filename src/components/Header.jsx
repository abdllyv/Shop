import { Link } from "react-router-dom";

const Header = () => {
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
        </div>
      </div>
    </header>
  );
};

export default Header;
