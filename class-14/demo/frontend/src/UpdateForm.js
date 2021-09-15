import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class UpdateForm extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Cat</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateCat}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Cat Name</Form.Label>
                                <Form.Control type="text" name="catName" defaultValue={this.props.catName}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Cat Breed</Form.Label>
                                <Form.Control type="text" name="catBreed" defaultValue={this.props.catBreed}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default UpdateForm;