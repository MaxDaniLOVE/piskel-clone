import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import KeyboardShortcutsTd from '../KeyboardShortcutsTd/KeyboardShortcutsTd';
import './KeyboardShortcuts.css';

Modal.setAppElement('#root');

export default class KeyboardShortcuts extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }


  render() {
    const { showModal } = this.state;
    return (
      <div className="keyboard-shortcuts">
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={this.handleOpenModal}
        >
          <i className="fa fa-keyboard" />
        </button>
        <Modal
          isOpen={showModal}
          onRequestClose={this.handleCloseModal}
          contentLabel="Example Modal"
          className="keyboard-shortcuts-modal"
        >
          <div className="keyboard-shortcuts-tagline">
            <h3>Keyboard shortcuts</h3>
            <button
              className="btn btn-outline-danger keyboard-shortcuts-modal-close"
              type="button"
              onClick={this.handleCloseModal}
            >
              <i className="fa fa-times" />
            </button>
          </div>
          <KeyboardShortcutsTd />
        </Modal>
      </div>
    );
  }
}
