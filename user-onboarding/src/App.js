import React, { useState } from "react";
import UserFormWithFormik from "./components/Form";
import Users from "./components/Users";
import { Container } from "reactstrap";

function App() {
  const [usersArray, setUsersArray] = useState([]);

  return (
    <Container>
      <UserFormWithFormik
        usersArray={usersArray}
        setUsersArray={setUsersArray}
      />
      <Users usersArray={usersArray} />
    </Container>
  );
}

export default App;
