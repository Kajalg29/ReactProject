import logo from './logo.svg';
import './App.css';
import "./index.css";
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import { useState } from 'react';


function App() {
  const [usersList,setUsersList]=useState([]);
 
  const addUserHandler=(uName,uAge)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {name:uName, age:uAge, id:Math.random().toString}];
    });
  }
  return (
    <div className="App">
     <AddUser onAddUser={addUserHandler}></AddUser>
     <UsersList users={usersList}></UsersList>
     
    </div>
  );
}

export default App;
