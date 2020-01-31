import React, { Component } from 'react';
import Preview from './preview/Preview';
import ToolBar from './toolBar/ToolBar';
import Frames from './frames/Frames';
import Canvas from './canvas/Canvas';
import KeyboardShortcuts from './keyboardShortcuts/KeyboardShortcuts';
import displayActiveFrame from '../../services/displayActiveFrame';
import './PiskelClone.css';

export default class PiskelClone extends Component {
  constructor() {
    super();
    this.basicId = 0;
    this.createFrame = (image) => ({
      image,
      id: this.basicId++,
    });
    this.state = {
      activeTool: 'pencil',
      penWidth: 1,
      frames: [
        this.createFrame('#'),
      ],
      activeColor: '#000000',
      previousColor: '#ffffff',
      resolution: 32,
      activeFrame: 0,
    };
    this.handleToolChange = this.handleToolChange.bind(this);
    this.handlePenWidthChange = this.handlePenWidthChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleResolutionChange = this.handleResolutionChange.bind(this);
    this.addFramesHandler = this.addFramesHandler.bind(this);
    this.updateFrames = this.updateFrames.bind(this);
    this.deleteFramesHandler = this.deleteFramesHandler.bind(this);
    this.setActiveFrame = this.setActiveFrame.bind(this);
    this.copyFramesHandler = this.copyFramesHandler.bind(this);
  }

  setActiveFrame(id) {
    this.setState(({ frames }) => {
      const activeItemIndex = frames.findIndex((frame) => frame.id === id);
      const { image } = frames[activeItemIndex];
      displayActiveFrame(image);
      return ({
        activeFrame: id,
      });
    });
  }

  handleToolChange(activeTool) {
    this.setState(() => ({ activeTool }));
  }

  handlePenWidthChange(penWidth) {
    this.setState(() => ({ penWidth }));
  }

  handleColorChange(activeColor, previousColor) {
    this.setState(() => ({
      activeColor,
      previousColor,
    }));
  }

  handleResolutionChange(resolution) {
    this.setState(() => ({
      resolution,
    }));
  }

  addFramesHandler(img) {
    const newFrame = this.createFrame(img);
    const newActiveFrame = this.basicId - 1;
    this.setState(({ frames }) => {
      const newFrameArrays = [...frames, newFrame];
      return ({
        frames: newFrameArrays,
        activeFrame: newActiveFrame,
      });
    });
  }

  deleteFramesHandler(id) {
    this.setState(({ frames }) => {
      const deletedItemIndex = frames.findIndex((frame) => frame.id === id);
      frames.splice(deletedItemIndex, 1);
      const newFrames = [
        ...frames.slice(0, deletedItemIndex),
        ...frames.slice(deletedItemIndex),
      ];
      return ({
        todoData: newFrames,
      });
    });
    const { frames } = this.state;
    setTimeout(() => {
      this.setActiveFrame(frames[frames.length - 1].id);
    }, 0);
  }

  copyFramesHandler(image) {
    this.addFramesHandler(image);
    displayActiveFrame(image);
  }

  updateFrames(id) {
    this.setState(({ frames }) => {
      const updatedItemIndex = frames.findIndex((frame) => frame.id === id);
      const updatedFrame = frames[updatedItemIndex];
      updatedFrame.image = localStorage.cash;
      updatedFrame.id = id;
      const newFrames = [
        ...frames.slice(0, updatedItemIndex),
        updatedFrame,
        ...frames.slice(updatedItemIndex + 1),
      ];
      return ({
        frames: newFrames,
      });
    });
  }

  render() {
    const {
      activeTool,
      frames,
      penWidth,
      activeColor,
      previousColor,
      resolution,
      activeFrame,
    } = this.state;
    return (
      <div className="piskel-wrapper">
        <ToolBar
          onToolChange={this.handleToolChange}
          activeTool={activeTool}
          activeColor={activeColor}
          previousColor={previousColor}
          penWidth={penWidth}
          onPenWidthChange={this.handlePenWidthChange}
          onColorChange={this.handleColorChange}
        />
        <Frames
          frames={frames}
          onAddFrame={this.addFramesHandler}
          onDeleteFrame={this.deleteFramesHandler}
          setActiveFrame={this.setActiveFrame}
          activeFrame={activeFrame}
          onCopyFrame={this.copyFramesHandler}
        />
        <Canvas
          updateFrames={this.updateFrames}
          activeTool={activeTool}
          penWidth={penWidth}
          activeColor={activeColor}
          resolution={resolution}
          frames={frames}
          onResolutionChange={this.handleResolutionChange}
          onColorChange={this.handleColorChange}
          previousColor={previousColor}
          activeFrame={activeFrame}
        />
        <Preview
          frames={frames}
          resolution={resolution}
        />
        <KeyboardShortcuts />
      </div>
    );
  }
}
