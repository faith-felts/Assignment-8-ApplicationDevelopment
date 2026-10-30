import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1 className="hero-title">Discover Live Music</h1>
        <p className="hero-subtitle">
          Find concerts and unforgettable live performances in New York.
        </p>
        <Link to="/events" className="hero-button">
          Explore Music Events
        </Link>
      </div>
    </div>
  );
}

export default Home;