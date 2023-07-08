import { Link } from "react-router-dom";
import profileImg from "../assets/img/profile-img.png";
import { Auth } from "../utils/Auth";
import { useContext } from "react";

const Prfile = () => {
  const{user}=useContext(Auth)

  return (
    <section className="profile">
      <div className="container">
        <div className="row">
          <div className="info" data-aos="fade-up" data-aos-duration="900">
            <div className="left-side">
              {user.profileImage === null ?  <img src={profileImg} alt="" />:<img src={`${process.env.REACT_APP_IMAGE}${user.profileImage}`} alt="profileIMg" />}
              <div className="resetProfile">
                <div className="btn">
                  <Link to="/change-profilImg">Change Image</Link>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="user-info">{user.name} {user.surname}</div>
              <div className="user-email">{user.email}</div>
              <div className="resetPasword">
                <div className="btn">
                  <Link to="/forget-password" >Change Pasword</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prfile;
