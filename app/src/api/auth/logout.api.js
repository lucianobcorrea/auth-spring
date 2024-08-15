import { axiosInstance } from '../_base/axiosIntance';

const URL_LOGOUT = '/auth/logout';

export async function logoutApi(token) {
  await axiosInstance.post(URL_LOGOUT, {
    token,
  });
}
