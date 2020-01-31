import React, { Component } from 'react';
import PropTypes from 'prop-types';
import changeTools from '../../../services/changeTools';
import './Canvas.css';

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.draw = this.draw.bind(this);
    this.saveImages = this.saveImages.bind(this);
    this.resolutionBtns = [32, 64, 128];
  }

  componentDidMount() {
    const { canvas } = this.refs;
    canvas.addEventListener('mousedown', this.draw);
    canvas.addEventListener('mouseup', this.saveImages);
    canvas.addEventListener('contextmenu', (event) => event.preventDefault());
  }

  componentDidUpdate() {
    const { canvas } = this.refs;
    canvas.removeEventListener('mousedown', (mouseDownEvent) => { this.draw(mouseDownEvent); });
    canvas.addEventListener('mousedown', this.draw);
    canvas.addEventListener('mouseup', this.saveImages);
    canvas.addEventListener('contextmenu', () => false);
  }

  draw(mouseDownEvent) {
    const {
      activeTool,
      penWidth,
      activeColor,
      resolution,
      onColorChange,
      previousColor,
    } = this.props;
    if (activeTool === 'color-picker') {
      const hex = changeTools(activeTool, resolution, penWidth, activeColor, mouseDownEvent);
      onColorChange(hex, activeColor);
    } else {
      changeTools(activeTool, resolution, penWidth, activeColor, mouseDownEvent, previousColor);
    }
  }

  handlePenWidthChange(resolution) {
    const { onResolutionChange } = this.props;
    onResolutionChange(resolution);
  }

  saveImages() {
    const { updateFrames, activeFrame } = this.props;
    const { canvas } = this.refs;
    localStorage.setItem('cash', canvas.toDataURL());
    updateFrames(activeFrame);
  }

  render() {
    const { resolution } = this.props;
    const resBtns = this.resolutionBtns.map((element) => {
      const isActive = element === resolution;
      const newClassName = isActive ? 'btn btn-success' : 'btn btn-secondary';
      return (
        <button
          type="button"
          className={newClassName}
          onClick={() => { this.handlePenWidthChange(element); }}
          key={element}
        >
          {`${element}x${element}`}
        </button>
      );
    });
    return (
      <div>
        <div className="canvas-wrapper">
          <div className="canvas-background" />
          <canvas
            ref="canvas"
            className="canvas"
            width={resolution}
            height={resolution}
          />
        </div>
        <div className="canvas-sizes">
          <h5>Choose canvas size:</h5>
          <div className="btn-group mr-2" role="group" aria-label="Second group">
            {resBtns}
          </div>
        </div>
      </div>
    );
  }
}

Canvas.propTypes = {
  onResolutionChange: PropTypes.func.isRequired,
  updateFrames: PropTypes.func.isRequired,
  activeTool: PropTypes.string.isRequired,
  penWidth: PropTypes.number.isRequired,
  activeColor: PropTypes.string.isRequired,
  previousColor: PropTypes.string.isRequired,
  resolution: PropTypes.number.isRequired,
  activeFrame: PropTypes.number.isRequired,
  onColorChange: PropTypes.func.isRequired,
};
