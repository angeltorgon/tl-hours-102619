import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

import UsersList from "./components/UsersList";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: blue
`;

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <StyledDiv className="App">
      <UsersList users={users} />
      {/* <Alert color="primary" >This is an alert </Alert> */}
    </StyledDiv>
  );
}

export default App;
