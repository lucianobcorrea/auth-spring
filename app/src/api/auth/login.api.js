import { axiosInstance } from '../_base/axiosIntance';

const URL_LOGIN = '/auth/login';

export async function login({ email, password }) {
  const response = await axiosInstance.post(URL_LOGIN, {
    email,
    password,
  });
  return response;
}
