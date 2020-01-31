import React from 'react';
import PropTypes from 'prop-types';
import './WidthBtns.css';

const WidthBtns = ({ penWidth, onPenWidthChange }) => {
  const penWidthlButtons = [1, 2, 3, 4];
  const btns = penWidthlButtons.map((element) => {
    const isActive = element === penWidth;
    const newClassName = isActive ? 'btn btn-success width-change' : 'btn btn-secondary width-change';
    return (
      <button
        type="button"
        className={newClassName}
        key={element}
        onClick={() => onPenWidthChange(element)}
      >
        <i className="fa fa-square-full" />
      </button>
    );
  });
  return (
    <div className="btn-group mr-2" role="group" aria-label="First group">
      {btns}
    </div>
  );
};

export default WidthBtns;

WidthBtns.propTypes = {
  onPenWidthChange: PropTypes.func.isRequired,
  penWidth: PropTypes.number.isRequired,
};
