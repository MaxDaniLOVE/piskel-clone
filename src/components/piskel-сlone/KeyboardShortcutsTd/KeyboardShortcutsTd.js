import React from 'react';

const KeyboardShortcutsTd = () => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Button</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-dark">
          <th scope="row">KeyP</th>
          <th scope="row">Set pencil as active tool</th>
        </tr>
        <tr className="table-dark">
          <th scope="row">KeyC</th>
          <th scope="row">Set color-picker as active tool</th>
        </tr>
        <tr className="table-dark">
          <th scope="row">KeyB</th>
          <th scope="row">Set bucket as active tool</th>
        </tr>
        <tr className="table-dark">
          <th scope="row">KeyE</th>
          <th scope="row">Set eraser as active tool</th>
        </tr>
        <tr className="table-dark">
          <th scope="row">KeyS</th>
          <th scope="row">Set stroke as active tool</th>
        </tr>
        <tr className="table-dark">
          <th scope="row">Digit1</th>
          <th scope="row">Set 1px pen width</th>
        </tr>
        <tr className="table-dark">
          <th scope="row">Digit2</th>
          <th scope="row">Set 2px pen width</th>
        </tr>
        <tr className="table-dark">
          <th scope="row">Digit3</th>
          <th scope="row">Set 3px pen width</th>
        </tr>
        <tr className="table-dark">
          <th scope="row">Digit4</th>
          <th scope="row">Set 4px pen width</th>
        </tr>
      </tbody>
    </table>
  );
};

export default KeyboardShortcutsTd;
