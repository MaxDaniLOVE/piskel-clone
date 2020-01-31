import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Preview.css';

export default class Preview extends Component {
  constructor() {
    super();
    this.state = {
      fps: 7,
    };
    this.preview = this.preview.bind(this);
    this.changeFps = this.changeFps.bind(this);
  }

  componentDidUpdate() {
    clearInterval(this.animationCountdown);
    this.preview();
  }

  preview() {
    const { frames } = this.props;
    const { fps } = this.state;
    const { previewCanvas } = this.refs;
    const context = previewCanvas.getContext('2d');
    const animation = (frame) => {
      const { image } = frame;
      const img = new Image();
      img.src = image;
      context.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
      img.onload = () => {
        context.drawImage(img, 0, 0);
      };
    };
    let counter = 0;
    this.animationCountdown = setInterval(() => {
      animation(frames[counter % frames.length]);
      counter += 1;
    }, 1000 / fps);
  }

  changeFps(newFps) {
    this.setState(() => ({
      fps: newFps,
    }));
  }

  render() {
    const { resolution } = this.props;
    const { fps } = this.state;
    return (
      <div className="preview-canvas-wrapper">
        <canvas
          ref="previewCanvas"
          className="preview-canvas"
          width={resolution}
          height={resolution}
          onClick={() => {
            const { previewCanvas } = this.refs;
            previewCanvas.webkitRequestFullscreen();
          }}
        />
        <div className="fps-change-wrapper">
          <p className="text-success fps-value">{`${fps} FPS`}</p>
          <input
            type="range"
            className="fps-range"
            id="customRange1"
            min="1"
            max="24"
            defaultValue={fps}
            onChange={(event) => {
              this.changeFps(+event.target.value);
            }}
          />
        </div>
      </div>
    );
  }
}

Preview.propTypes = {
  frames: PropTypes.array.isRequired,
};
