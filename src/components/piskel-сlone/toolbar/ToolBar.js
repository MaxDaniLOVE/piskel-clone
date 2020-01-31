/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import buttonChangeTool from '../../../services/buttonChangeTool';
import WidthBtns from '../width-btns/WidthBtns';
import ToolBtns from '../tool-btns/ToolBtns';
import './ToolBar.css';

export default class ToolBar extends Component {
  componentDidMount() {
    const { onToolChange, onPenWidthChange } = this.props;
    buttonChangeTool(onToolChange, onPenWidthChange);
  }

  componentWillReceiveProps(newProps) { // TODO change to getDerivedStateFromProps
    const { activeColor } = this.props;
    const { prev, active } = this.refs;
    const refreshedActiveColor = newProps.activeColor;
    const refreshedPreviousColor = activeColor;
    active.value = refreshedActiveColor;
    prev.value = refreshedPreviousColor;
  }

  handleToolChange(activeTool) {
    const { onToolChange } = this.props;
    onToolChange(activeTool);
  }

  handlePenWidthChange(penWidth) {
    const { onPenWidthChange } = this.props;
    onPenWidthChange(penWidth);
  }

  handleColorChange(eventValue, activeColor) {
    const { onColorChange } = this.props;
    const refreshedActiveColor = eventValue;
    const refreshedPreviousColor = activeColor;
    onColorChange(refreshedActiveColor, refreshedPreviousColor);
  }

  render() {
    const {
      activeTool,
      penWidth,
      activeColor,
      previousColor,
      onPenWidthChange,
      onToolChange,
    } = this.props;
    return (
      <div className="btn-group-vertical" data-toggle="buttons">
        <WidthBtns
          penWidth={penWidth}
          onPenWidthChange={onPenWidthChange}
        />
        <ToolBtns
          activeTool={activeTool}
          onToolChange={onToolChange}
        />
        <div className="btn btn-secondary color-input-wrapper">
          <input
            className="color-input"
            type="color"
            ref="active"
            id="head"
            name="head"
            onChange={(event) => {
              this.handleColorChange(event.target.value, activeColor);
            }}
            value={activeColor}
          />
          <i
            className="fas fa-exchange-alt switch-colors"
            role="switch"
            onClick={() => {
              const { prev, active } = this.refs;
              this.handleColorChange(prev.value, active.value);
            }}
          />
          <input
            className="color-input"
            type="color"
            ref="prev"
            id="head"
            name="head"
            value={previousColor}
            disabled
          />
        </div>
      </div>
    );
  }
}

ToolBar.propTypes = {
  activeTool: PropTypes.string.isRequired,
  onToolChange: PropTypes.func.isRequired,
  onPenWidthChange: PropTypes.func.isRequired,
  activeColor: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired,
  penWidth: PropTypes.number.isRequired,
  previousColor: PropTypes.string.isRequired,
};
