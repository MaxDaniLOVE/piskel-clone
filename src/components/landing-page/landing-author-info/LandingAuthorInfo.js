/* eslint-disable max-len */
import React from 'react';
import './LandingAuthorInfo.css';

const LandingAuthorInfo = () => (
  <div className="landing-author-info">
    <h3>About me:</h3>
    <div className="landing-author-info_fl">
      <div className="landing-author-info_fl_text">
        <h3>
          Maksim Daniłaŭ
          <small className="text-muted">&#8201;Beginner Front-end Developer</small>
        </h3>
        <p>
          Hi! My name&apos;s Maks Daniłaŭ I&apos;m a beginner software developer specialised in frontend development.
          <br />
          Want to know how I may help your project?
          <br />
          Check out my&#8201;
          <a href="https://maxdanilove.github.io/Portfolio/">portfolio.</a>
          &#8201;Or you can check my&#8201;
          <a href="https://github.com/MaxDaniLOVE">Github  account</a>
          &#8201;/&#8201;
          <a href="https://www.linkedin.com/in/maksim-dani%C5%82a%C5%AD-965bb8194/">LinkedIn profile.</a>
        </p>
      </div>
      <img
        className="landing-author-info_photo"
        src="https://sun9-7.userapi.com/c847018/v847018453/bc352/gmrXqaMELmY.jpg"
        alt="avatar"
      />
    </div>
  </div>
);

export default LandingAuthorInfo;
