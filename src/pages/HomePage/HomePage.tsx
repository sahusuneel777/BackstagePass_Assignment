import { Link } from 'react-router-dom';
import './HomePage.css';

export function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1>BackstagePass</h1>
        <p>Welcome to the 9-Day Fitness Challenge</p>
        <Link to="/challenge/1" className="start-btn">
          Start Challenge
        </Link>
      </div>
    </div>
  );
}
