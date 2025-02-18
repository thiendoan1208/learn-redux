import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';

function TableUsers() {
  const [listUser, setListUser] = useState();

  const fetchAllUser = async () => {
    const res = await axios.get('http://localhost:8080/users/all');
    const data = res && res.data ? res.data : [];
    setListUser(data);
  };

  useEffect(() => {
    fetchAllUser();
  }, []);

  const handleDeleteUser = (user) => {
    console.log(user);
  };

  return (
    <>
      <Container>
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
                        handleDeleteUser(item)
                      }}
                    >
                      Danger
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default TableUsers;
