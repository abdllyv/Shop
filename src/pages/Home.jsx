import { Link } from "react-router-dom";
const Home = () => {

  return (
    <main>
      <section className="home">
        <div className="row">
          <h1 className="title">
            Welcome My <span>WEbSite</span>
          </h1>
          <div className="btn">
            <Link to="/shop" >
              Go To Shop Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
