import React, { useState, useEffect } from 'react';
import { getUsers,sv_CreateUser,sv_DeleteUser } from '../../services/userService';
import FieldSubmit from '../molecules/FieldSubmit';
import UserCreateForm from './UserCreateForm';

const UserForm = () => {
   
    const [users, setUsers] = useState<any[]>([]);

    const [nameUser, setNameUser] = useState('');
    const [ageUser, setAgeUser] = useState('');
    const [emailUser, setEmailUser] = useState('');
    
    const fetchUsers = async () => {
        const usersData = await getUsers();
        setUsers(usersData);
    };

    useEffect(() => {
      
        fetchUsers();
    }, [setUsers]);


    const onClickDelete = async (data: any) => {

        console.log("onClickDelete");
        console.log(data);

         
        var userModel ={
            id:data.id,
            name:data.nameUser,
          email:data.emailUser,
          age:ageUser
        };
        
        await sv_DeleteUser(data)
        .then((response) => {
          console.log("sv_DeleteUser response: ");
          console.log(response);
          
          fetchUsers();
          alert('Usuario eliminado!');
                    
        })
        .catch((error) => console.error("sv_DeleteUser error: " +error));

    }

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
                        
                        fetchUsers();

                        setNameUser('');
                        setAgeUser('');
                        setEmailUser('');

                        alert('Usuario creado!');
                        
                      })
                      .catch((error) => console.error("sv_CreateUser error: " +error));
    }


    const editText = async (e:any) => {

        console.log("test fetchLogin email:"+" - age:")
        
    }

    return (

        <div >

            <div className='col-md-4'>
                <UserCreateForm onClickCreate={fetchCrearUser} 
                nameUser={nameUser} ageUser={ageUser} emailUser={emailUser}
                 onChangeNameUser={(e:any) =>  setNameUser(e.target.value)}
                 onChangeAgeUser={(e:any) =>  setAgeUser(e.target.value)}
                 onChangeEmailUser={(e:any) =>  setEmailUser(e.target.value)}
                 
                 />
            </div>

            <div className='col-md-8'>
               
                <table >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                                <td>
                                    <FieldSubmit
                                        text="Eliminar"
                                        onClick={() => onClickDelete(user)}
                                    />
                                </td>

                            </tr>
                        ))}
                    </tbody>
                    {/* <tfoot>
                    <tr>
                        <td>Sum</td>
                        <td>$180</td>
                    </tr>
                </tfoot> */}
                </table>

            </div>



        </div>
    );
};



export default UserForm;