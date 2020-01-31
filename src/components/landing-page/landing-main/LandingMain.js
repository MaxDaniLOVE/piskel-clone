import React from 'react';
import { Link } from 'react-router-dom';
import './LandingMain.css';

const LandingMain = () => (
  <div className="landing-main">
    <div className="landing-tagline">
      <div className="landing-tagline-title">
        <h1>Piskel-clone is a free online editor for animated sprites & pixel art</h1>
      </div>
      <div className="landing-tagline-desc">
        <h3>You can create animations in your browser.</h3>
        <p>
          But if you don&apos;t want to suffer better use original
          <a href="https://www.piskelapp.com/"> piskel</a>
        </p>
      </div>
      <Link to="/piskel-clone" className="btn btn-outline-success nav-link">Get started!</Link>
    </div>
    <div className="home-screenshot">
      <img
        className="home-screenshot-img"
        src="https://i.imgur.com/Utfgc3F.png"
        alt="screenshot"
      />
    </div>
  </div>
);

export default LandingMain;
