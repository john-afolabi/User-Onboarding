import React from "react";

function Users(props) {
  return (
    <div>
      {props.usersArray.map(user => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
