/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Frames.css';
import clearCanvas from '../../../services/clearCanvas';

export default class Frames extends Component {
  addFramesHandler(img) {
    const { onAddFrame } = this.props;
    onAddFrame(img);
    if (img === '#') {
      clearCanvas();
    }
  }

  deleteFramesHandler(id) {
    const { onDeleteFrame, frames } = this.props;
    if (frames.length !== 1) {
      onDeleteFrame(id);
    }
  }

  render() {
    const {
      frames, setActiveFrame, activeFrame, onCopyFrame,
    } = this.props;
    const displayedFrames = frames.map(({ image, id }, index) => {
      const key = index;
      const isActive = activeFrame === id;
      const newFrameName = isActive ? 'card border-success mb-3 frame' : 'card border-warning mb-3 frame';
      const newBtnName = isActive ? 'btn btn-success frame-image-' : 'btn btn-warning frame-image-';
      return (
        <div
          className={newFrameName}
          style={{ maxWidth: '20rem' }}
          key={key}
          onClick={() => setActiveFrame(id)}
        >
          <div className="btn btn-secondary frame-number">{key + 1}</div>
          <div className="card-body frame-image">
            <img className="frame-image_" src={image} alt="" />
          </div>
          <button
            type="button"
            className={`${newBtnName}delete`}
            onClick={(event) => {
              this.deleteFramesHandler(id);
              event.stopPropagation();
            }}
          >
            <i className="fa fa-trash-alt" />
          </button>
          <button
            type="button"
            className={`${newBtnName}copy`}
            onClick={(event) => {
              onCopyFrame(image);
              event.stopPropagation();
            }}
          >
            <i className="fa fa-copy" />
          </button>
        </div>
      );
    });
    return (
      <div className="frames-wrapper">
        <div className="list-group">
          {displayedFrames}
        </div>
        <button
          type="button"
          className="btn btn-outline-success add-frame"
          onClick={() => {
            this.addFramesHandler('#');
          }}
        >
          Add new frame
        </button>
      </div>
    );
  }
}

Frames.propTypes = {
  onCopyFrame: PropTypes.func.isRequired,
  frames: PropTypes.array.isRequired,
  onAddFrame: PropTypes.func.isRequired,
  setActiveFrame: PropTypes.func.isRequired,
  activeFrame: PropTypes.number.isRequired,
  onDeleteFrame: PropTypes.func.isRequired,
};
