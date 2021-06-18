import axiosInstance from '../../axiosInstance';

const updateUserById = async (id, postBody) => {
  const resp = await axiosInstance.put(`/admin/user/update/${id}`, postBody);
  const data = resp;
  return data;
};

export default updateUserById;
