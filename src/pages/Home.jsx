import { Link } from "react-router";

function Home() {
  return (
    <div className="hero">
      <h1>Find Your Dream Job</h1>

      <p>
        Discover exciting career opportunities and take the next step in your
        journey.
      </p>

      <Link to="/jobs" className="btn">
        Browse Jobs
      </Link>
    </div>
  );
}

export default Home;
