import React, { Component } from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

class ModalInfo extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.closeModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome {this.props.username}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>You use {this.props.language} for Development</p>
          <p>{this.props.likeCats ? 'Yes I like Cats' : 'I am not a cat person'}</p>
          <Image src={this.props.image} thumbnail />
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.props.closeModalHandler} variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ModalInfo;