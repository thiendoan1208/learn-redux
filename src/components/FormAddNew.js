import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function FormAddNew() {

  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address:</Form.Label>
            <Form.Control autoComplete="username" type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control autoComplete="current-password" type="password" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" placeholder="name@example.com" />
          </Form.Group>
        </Form>
        <Button variant="primary">Create</Button>
      </Container>
      <hr />
    </>
  );
}

export default FormAddNew;
