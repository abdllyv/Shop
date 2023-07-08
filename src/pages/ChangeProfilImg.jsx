import axios from "axios";
import profileImg from "../assets/img/profile-img.png";
import { Auth } from "../utils/Auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const ChangeProfilImg = () => {
  // Global State
  const { user } = useContext(Auth);

  //   Local State
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  //   Navigate
  const navigate = useNavigate();

  //Photo Choose
  const handleImg = (e) => {
    let file = e.target.files[0];
    setImage(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.onerror = (err) => console.log(err);
  };

  //  Change data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append("token", JSON.parse(localStorage.getItem("token")));
    body.append("profileImage", image);
    await axios
      .put(process.env.REACT_APP_CHANGE_PROFILE_IMAGE, body)
      .then((res) => {
        if (res.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="change-profil-img">
      <div className="container">
        <div className="row">
          <form className="info" data-aos="fade-up" data-aos-duration="900">
            <div className="profile-img">
              {preview ? (
                <img src={preview} alt="profileImg" />
              ) : user.profileImage === null ? (
                <img src={profileImg} alt="profileImg" />
              ) : user.profileImage && (
                <img
                  src={`${process.env.REACT_APP_IMAGE}${user.profileImage}`}
                  alt="profileImg"
                />
              )}
            </div>
            <div className="form-group">
              <label htmlFor="profileImage">Upload image</label>
              <input
                type="file"
                name="profileImage"
                id="profileImage "
                onChange={handleImg}
              />
              <button type="submit" className="btn" onClick={handleSubmit}>
                Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChangeProfilImg;
