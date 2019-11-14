import React from "react";
import { Card, CardTitle, CardSubtitle } from "reactstrap";
import './users.css'

function Users(props) {
  return (
    <div className="card-container">
      {props.usersArray.map(user => {
        return (
          <Card key={user.id}>
            <CardTitle>{user.name}</CardTitle>
            <CardSubtitle>{user.email}</CardSubtitle>
          </Card>
        );
      })}
    </div>
  );
}

export default Users;
