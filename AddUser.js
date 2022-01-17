import React, {useRef, useState} from "react";
//import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
const AddUser=(props)=>{
    // const [enteredUsername,setEnteredUsername]=useState("");
    // const [enteredAge,setEnteredAge]=useState("");
    const userNameRef=useRef("");
    const userAgeRef=useRef("");
    const [error,setError]=useState();
    // const usernameChangeHandler=(event)=>{
    //     setEnteredUsername(event.target.value)
    // }
    // const ageChangeHandler=(event)=>{
    //     setEnteredAge(event.target.value)
    // }
    const addUserHandler=(event)=>{
        event.preventDefault();
        const enteredUsername=userNameRef.current.value;
        const enteredAge=userAgeRef.current.value;
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0)
        {
            setError(
                {
                    title: "Invalid Input",
                    message: "Please enter non epty values"
                }
            )
        return;
        }
        if(+enteredAge<1)
        {
            setError(
                {
                    title: "Invalid Age",
                    message: "Please enter valid age (>0)"
                }
            )
        return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        // setEnteredUsername("");
        // setEnteredAge("");
        userNameRef.current.value="";
        userAgeRef.current.value="";
    };
    const errorHandler=()=>{
        setError(null);
    }

    return(
       <React.Fragment>
           {error && 
           <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>
            }
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            {/* <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername}></input> */}
            <input type="text" id="username" ref={userNameRef}></input>
            <label htmlFor="age">Age (Years)</label>
            {/* <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}></input> */}
            <input id="age" type="number" ref={userAgeRef}></input>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </React.Fragment>
    )
}
export default AddUser;