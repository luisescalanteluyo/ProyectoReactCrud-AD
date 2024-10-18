import React, { useState } from 'react';
import FieldSubmit from "../molecules/FieldSubmit";
import FieldLabelInput from "../molecules/FieldLabelInput";
import {sv_Login } from '../../services/userService';
import { useNavigate } from 'react-router-dom'



// function EventCounts(){
//   console.log("test buttonClick")
//   alert("hola");
// }


const LoginForm = () => {
const navigate = useNavigate();

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const fetchLogin = async () => {
  console.log("test fetchLogin email:"+email +" - password:"+ password)
  alert("test fetchLogin email:"+email +" - password:"+ password);
  var loginModel ={
    email:email,
    password:password
  }
  const usersData = await sv_Login(loginModel)
                .then((response) => {
                  console.log("sv_Login response: ");
                  console.log(response);
                  navigate('/users');
                })
                .catch((error) => console.error("sv_Login error: " +error));

  // console.log("usersData: ");
  // console.log(usersData);
  
  //setUsers(usersData);
};

  return (
       <div className="components">
         <FieldLabelInput
        label="Email: "
        value={email}
        placeholder={"email"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FieldLabelInput
        label="Password: "
        value={password}
        placeholder={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />      
      <br></br>
       <FieldSubmit  onClick={fetchLogin} text="Ingresar" />
     </div>
  )
}


export default LoginForm;