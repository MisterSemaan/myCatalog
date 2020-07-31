import axios from 'axios';

const backendUrl = process.env.API_URL;
const usersRoute = process.env.USERS_ENDPOINT;

export const loginRequest = async (email, password) => {
  try {
    return await axios.post('http://localhost:5000/api/users/login', { email, password })
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
};

export const signupRequest = async (username, email, password) => {
  try {
    return await axios.post('http://localhost:5000/api/users/signup', { username, email, password })
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
};