import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import ModalContent from '../components/modal-content'
import classes from './responsive-modal.css'
import './responsive-modal.css'
// Import the css file
// import 'react-responsive-modal/lib/react-responsive-modal.css';
// import Modal from 'react-responsive-modal/lib/css';

class ResponsiveModal extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal  classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }} open={open} onClose={this.onCloseModal} little>
          <ModalContent classNames={classes["custom-modal"]}/>
          <h1>Header text</h1>

        </Modal>
      </div>
    );
  }
}

export default ResponsiveModal;