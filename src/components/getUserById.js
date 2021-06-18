import axiosInstance from '../../axiosInstance';

const getUserById = async (id) => {
  const resp = await axiosInstance.get(`/user/${id}`);
  const data = resp.data.data;
  return data;
};

export default getUserById;
