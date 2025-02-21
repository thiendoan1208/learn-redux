import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '~/action/actions';

function FormAddNew() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const isCreating = useSelector((state) => state.user.isCreating);

  const handleClickCreateUser = () => {
    dispatch(createUser(email, password, username));
    setEmail('');
    setPassword('');
    setUsername('');
  };

  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              autoComplete="username"
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              autoComplete="current-password"
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
              type="text"
              placeholder="abc@123"
            />
          </Form.Group>
        </Form>
        <Button disabled={isCreating} onClick={handleClickCreateUser} variant="primary">
          Create
        </Button>
      </Container>
      <hr />
    </>
  );
}

export default FormAddNew;
