import { axiosBasic, axiosJWT } from './apiConnection';
import {setResponse, setError} from '../components/users/checkData';
const authenticateUser = (data) => axiosBasic().post('/authenticate', data);
const createUser = (data) => axiosBasic().post('/users', data)
.then(res => {
  setResponse(res.message)
})
.catch(err => {
  setError(err.message);
});
const getUserByEmail = (data) => axiosBasic().post('/useremail', data);
const getUsers = (token, data) => axiosJWT(token).get('/users', data);

const ApiServices = {
  authenticateUser,
  createUser,
  getUsers,
  getUserByEmail,
};

export default ApiServices;
