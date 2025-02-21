import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUser, deleteUser } from '~/action/actions';

function TableUsers() {
  const dispatch = useDispatch();
  const { listUser, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchAllUser());
  }, [dispatch]);

  const handleDeleteUser = (user) => {
    dispatch(deleteUser(user.id))
    console.log(user.id)
  };

  return (
    <>
      <Container>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Username</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listUser &&
                listUser.length > 0 &&
                listUser.map((item, index) => (
                  <tr key={`user-${index}`}>
                    <td>{index + 1}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          handleDeleteUser(item);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        )}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      </Container>
    </>
  );
}

export default TableUsers;
