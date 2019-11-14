import React, {useState} from 'react';
import UserFormWithFormik from './components/Form'
import Users from './components/Users';

function App() {
  const [usersArray, setUsersArray] = useState([]);

  return (
    <div>
    <UserFormWithFormik usersArray={usersArray} setUsersArray={setUsersArray}/>
    <Users usersArray={usersArray}/>
    </div>
  );
}

export default App;
