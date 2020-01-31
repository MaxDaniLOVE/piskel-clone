import React from 'react';
import './LandingFunctionality.css';

const LandingFunctionality = () => (
  <div className="landing-functionality">
    <h3>
      In
      <p className="text-success landing-functionality-attention">&#8201;piskel-clone&#8201;</p>
      you can:
    </h3>
    <ul className="list-group">
      <li className="list-group-item list-group-item-action">
        - Create sprites with 5 different tools (pencil, bucket, eraser,
        &#8201;
        <s>stroke</s>
        ,&#8201;color-picker);
      </li>
      <li className="list-group-item list-group-item-action">
        - Change the width of the canvas;
      </li>
      <li className="list-group-item list-group-item-action">
        - Add frames;
      </li>
      <li className="list-group-item list-group-item-action">
        - Delete it with only one click;
      </li>
      <li className="list-group-item list-group-item-action">
        - Set FPS of animation;
      </li>
      <li className="list-group-item list-group-item-action">
        - Set color that you want;
      </li>
      <li className="list-group-item list-group-item-action">
        - The previous color set automatically as a secondary color;
      </li>
      <li className="list-group-item list-group-item-action">
        - Draw it with the right mouse button (works with pencil, stroke and bucket tools);
      </li>
      <li className="list-group-item list-group-item-action">
        - Set FPS of animation;
      </li>
      <li className="list-group-item list-group-item-action">
        - Change the width of the pencil, eraser and stroke tools.
      </li>
    </ul>
  </div>
);

export default LandingFunctionality;
