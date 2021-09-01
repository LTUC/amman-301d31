import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

class FormClass extends Component {
  render() {
    return (
      <Form onSubmit={this.props.submitHandler}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="https://www.google.com/asdnasdnasd..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="language">
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="likeCats">
          <Form.Check type="checkbox" label="Do you like Cats?" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default FormClass;