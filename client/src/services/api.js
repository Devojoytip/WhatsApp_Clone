import axios from "axios"

const url = "http://localhost:8000";

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data)
    } catch (error) {
        console.log('Error calling addUser api',error.message)
    }
}

export const getUsers = async (data) => {
    try {
        let response = await axios.get(`${url}/users`, data)
        console.log('response ',response)
        return response.data;
    } catch (error) {
        console.log('Error calling getUsers api',error.message)
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data)
    } catch (error) {
        console.log('Error calling setConversation api',error.message)
    }
}

export const getConversation = async (data) => {
    try {
        let res = await axios.post(`${url}/conversation/get`, data)
        return res.data;
    } catch (error) {
        console.log('Error calling getConversation api',error.message)
    }
}

export const newMessage = async (data) => {
    try {
        let res = await axios.post(`${url}/message/add`, data)
        return res.data;
    } catch (error) {
        console.log('Error calling newMessage api',error.message)
    }
}

export const getMessages = async (id) => {
    try {
        let res = await axios.get(`${url}/message/get/${id}`)
        return res.data;
    } catch (error) {
        console.log('Error calling getMessages api',error.message)
    }
}

export const uploadFile = async (data) => {
    try {
        let res= await axios.post(`${url}/file/upload`, data);
        return res.data;
    } catch (error) {
        console.log('Error while calling uploadFile API ', error);
    }
}