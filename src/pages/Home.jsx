import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1 className="hero-title">Discover Broadway</h1>
        <p className="hero-subtitle">
          Find Broadway musicals and unforgettable theatre performances in New York.
        </p>
        <Link to="/events" className="hero-button">
          Explore Broadway Shows
        </Link>
      </div>
    </div>
  );
}

export default Home;