import axios from 'axios';

const API_URL = 'http://localhost:7277/api/User';
//http://localhost:7277/api/User/LoginUser

export const sv_Login = async (user: any) => {
    //const response = await axios.post(API_URL+"/LoginUser", user);
    return await axios.post(API_URL+"/LoginUser", user);
};

export const sv_CreateUser = async (user: any) => {
    //const response = await axios.post(API_URL+"/LoginUser", user);
    return await axios.post(API_URL+"/CreateUser", user);
};

export const sv_DeleteUser = async (user: any) => {
    //const response = await axios.post(API_URL+"/LoginUser", user);
    return await axios.post(API_URL+"/DeleteUser", user);
};


export const getUsers = async () => {
    const response = await axios.get(API_URL+"/getUsers");
    return response.data;
};

export const createUser = async (user: any) => {
    const response = await axios.post(API_URL, user);
    return response.data;
};

// Otros métodos como updateUser y deleteUser
