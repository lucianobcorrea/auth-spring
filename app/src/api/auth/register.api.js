import { axiosInstance } from '../_base/axiosIntance';

const URL_REGISTER = '/auth/register';

export async function register({ username, email, password }) {
  const response = await axiosInstance.post(URL_REGISTER, {
    username,
    email,
    password
  });
  return response;
}
