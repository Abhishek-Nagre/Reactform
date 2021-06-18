import axiosInstance from '../../axiosInstance';

const getUserAll = async () => {
  const resp = await axiosInstance.get(`/user/all`);
  const data = resp.data.data;
  return data;
};

export default getUserAll;
