import { axiosInstance } from '../_base/axiosIntance';

const URL_USER = '/user';

export async function user() {
  const response = await axiosInstance.get(URL_USER);
  return response.data;
}
