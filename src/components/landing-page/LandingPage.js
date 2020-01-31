import React from 'react';
import LandingMain from './landing-main/LandingMain';
import LandingExamples from './landing-examples/LandingExamples';
import LandingFunctionality from './landing-functionality/LandingFunctionality';
import LandingAuthorInfo from './landing-author-info/LandingAuthorInfo';
import './LandingPage.css';

const LandingPage = () => (
  <div className="landing-wrapper">
    <LandingMain />
    <LandingExamples />
    <LandingFunctionality />
    <LandingAuthorInfo />
  </div>
);

export default LandingPage;
