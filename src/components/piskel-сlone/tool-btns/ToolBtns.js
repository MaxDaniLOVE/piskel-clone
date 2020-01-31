import React from 'react';

const ToolBtns = ({ activeTool, onToolChange }) => {
  const toolButtons = [
    { tool: 'pencil', icon: 'fa fa-pencil-alt' },
    { tool: 'color-picker', icon: 'fa fa-eye-dropper' },
    { tool: 'bucket', icon: 'fa fa-fill-drip' },
    { tool: 'eraser', icon: 'fa fa-eraser' },
    { tool: 'stroke', icon: 'fa fa-pencil-ruler' },
  ];
  const btns = toolButtons.map(({ tool, icon }) => {
    const isActive = activeTool === tool;
    const newClassName = isActive ? 'btn btn-success tool' : 'btn btn-secondary tool';
    return (
      <button
        type="button"
        className={newClassName}
        key={tool}
        onClick={() => { onToolChange(tool); }}
        data-toggle="tooltip"
        data-placement="right"
        title={tool}
      >
        <i className={icon} aria-hidden="true" />
      </button>
    );
  });
  return btns;
};

export default ToolBtns;
