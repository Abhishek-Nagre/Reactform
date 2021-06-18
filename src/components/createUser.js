import axiosInstance from '../axiosInstance';

const createUserAPI = async (postBody) => {
  const resp = await axiosInstance.post(`/un-authenticated/user/create`, postBody);
  const data = resp;
  return data;
};

export default createUserAPI;
