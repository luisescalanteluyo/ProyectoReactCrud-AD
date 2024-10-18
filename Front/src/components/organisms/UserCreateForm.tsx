import React, { useState,useEffect } from 'react';
import { getUsers } from '../../services/userService';
import FieldSubmit from '../molecules/FieldSubmit';
import FieldLabelInput from "../molecules/FieldLabelInput";
import {sv_CreateUser } from '../../services/userService';

const UserCreateForm = (props: any) => {
    const [idUser, setIdUser] = useState('');
    const [nameUser, setNameUser] = useState('');
    const [ageUser, setAgeUser] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [users, setUsers] = useState<any[]>([]);

    // setIdUser(props.id);
    // setNameUser(props.name);

    useEffect(() => {
        // const fetchUsers = async () => {
        //     const usersData = await getUsers();
        //     setUsers(usersData);
        // };
        // fetchUsers();
    }, [setUsers]);


    const fetchCrearUser = async () => {

        console.log("test fetchLogin email:"+emailUser +" - age:"+ ageUser)
     
        var userModel ={
            name:nameUser,
          email:emailUser,
          age:ageUser
        };
        
        await sv_CreateUser(userModel)
                      .then((response) => {
                        console.log("sv_CreateUser response: ");
                        console.log(response);
                        
                      })
                      .catch((error) => console.error("sv_CreateUser error: " +error));
    }

    return (


        <div className=''>

                <FieldLabelInput
                label="Nombre: "
                value={props.nameUser}
                placeholder={"nombre"}
                onChange={props.onChangeNameUser}
            />
                <FieldLabelInput
                label="Edad: "
                value={props.ageUser}
                placeholder={"edad"}
                onChange={props.onChangeAgeUser}
            />
                <FieldLabelInput
                label="Email: "
                value={props.emailUser}
                placeholder={"email"}
                onChange={props.onChangeEmailUser}
            />
      
            <FieldSubmit
            text="Crear"
            onClick={props.onClickCreate}
            />

        </div>
    );
};



export default UserCreateForm;