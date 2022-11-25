import axios from "axios";

const BASE_URL = "https://localhost:44318"

export const LoginApi = async (userEmail, password) => {
    try {
        const response=await  axios.post(`${BASE_URL}/user/login`, {
            Email: userEmail,
            Password: password
        })
        return response;
    }
    catch (err) {
        console.log(err);
        return false
    }
}
export const adminHomePageApi = async () => {
    try {
        const userToken= JSON.parse(localStorage.getItem('userData'))['token'];
        const response=await  axios.get(`${BASE_URL}/analytic/Compare`, {
            headers: {
              'Authorization': `Bearer ${userToken}`
            }
        })
        return response;
    }
    catch (err) {
        console.log(err);
        return false
    }
}
export const getAllUsers = async () => {
    try {
        const userToken= JSON.parse(localStorage.getItem('userData'))['token'];
        const response=await axios.get(`${BASE_URL}/user/getall`, {
            headers: {
              'Authorization': `Bearer ${userToken}`
            }
        })
        return response;
    }
    catch (err) {
        console.log(err);
        return false
    }
}
// https://localhost:5001/user/getall