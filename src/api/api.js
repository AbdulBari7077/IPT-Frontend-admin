import axios from "axios";

const BASE_URL = "https://localhost:44318"

export const LoginApi = async (userEmail, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/user/login`, {
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
        const userToken = JSON.parse(localStorage.getItem('userData'))['token'];
        const response = await axios.get(`${BASE_URL}/analytic/Compare`, {
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
        const userToken = JSON.parse(localStorage.getItem('userData'))['token'];
        const response = await axios.get(`${BASE_URL}/user/getall`, {
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
export const getAllMovies = async () => {
    try {
        const userToken = JSON.parse(localStorage.getItem('userData'))['token'];
        const response = await axios.get(`${BASE_URL}/Movie/getallMovies`, {
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
export const getMovie = async (id) => {
    try {
        const userToken = JSON.parse(localStorage.getItem('userData'))['token'];
        const response = await axios.get(`${BASE_URL}/Movie/getMovie/${id}`, {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        })
        console.log(response)
        return response;
    }
    catch (err) {
        console.log(err);
        return false
    }
}
export const DeleteMovie = async (id) => {
    try {
        const userToken = JSON.parse(localStorage.getItem('userData'))['token'];
        const response = await axios.delete(`${BASE_URL}/Movie/Delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        })
        console.log(response)
        return response;
    }
    catch (err) {
        console.log(err);
        return false
    }
}
export const DeleteUser = async (id) => {
    try {
        const userToken = JSON.parse(localStorage.getItem('userData'))['token'];
        console.log(userToken);
        const response = await axios.delete(`${BASE_URL}/user/Remove?uid=${id}`, {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        })
        console.log(response)
        return response;
    }
    catch (err) {
        console.log(err);
        return false
    }
}
export const AddMovie = async (formData) => {
    try {
        const userToken = JSON.parse(localStorage.getItem('userData'))['token'];
        var config = {
            method: "post",
            url: "https://localhost:44318/Movie/AddMovie",
            headers: {
                Accept: "application/json, text/plain, /",
                "Content-Type": "multipart/form-data",
                'Authorization': `Bearer ${userToken}`
            },
            data: formData,
          };
        const response = await axios(config);
        console.log("RESPONSE", response);
        return response;
    }
    catch (err) {
        console.log(err);
        return false
    }
}
export const EditMovie = async (formData,id) => {
    try {
        const userToken = JSON.parse(localStorage.getItem('userData'))['token'];
        var config = {
            method: "put",
            url: `https://localhost:44318/Movie/edit/${id}`,
            headers: {
                Accept: "application/json, text/plain, /",
                "Content-Type": "multipart/form-data",
                'Authorization': `Bearer ${userToken}`
            },
            data: formData,
          };
        const response = await axios(config);
        console.log("RESPONSE", response);
        return response;
    }
    catch (err) {
        console.log(err);
        return false
    }
}
// https://localhost:5001/user/getall