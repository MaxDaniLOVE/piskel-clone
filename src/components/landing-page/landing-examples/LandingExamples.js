import React from 'react';
import './LandingExamples.css';

const examples = [
  'https://www.piskelapp.com/static/resources/home/features/feature-live-preview.gif',
  'https://thumbs.gfycat.com/NextJollyBufflehead-small.gif',
  'https://images.squarespace-cdn.com/content/v1/5a95f529af20964fa337f9d3/1519959717110-6A9W9QGKINL0MQE49V5F/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxq_kr5JmUSWzdbeQhVZ8KGVEAfgr0ybhloMHNIqvT8SMftTfHgE5YY4gbHxAHibYY/alola+starters.gif',
  'https://www.piskelapp.com/static/resources/home/features/feature-open-source@2x.gif',
  'https://i.pinimg.com/originals/e0/db/86/e0db8690895407d039b94f75b6244035.gif',
];

const LandingExamples = () => {
  const renderedExamples = examples.map((element, index) => {
    const key = index + 10;
    return (
      <div
        className="card border-warning mb-3"
        key={key}
      >
        <div className="card-body landing-examples-card">
          <img
            className="landing-examples-img"
            src={element}
            alt="example"
          />
        </div>
      </div>
    );
  });

  return (
    <div className="landing-examples">
      <h3>Example sprites:</h3>
      <div className="landing-examples-wrapper">
        {renderedExamples}
      </div>
    </div>
  );
};
export default LandingExamples;
