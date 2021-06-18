import axiosInstance from '../axiosInstance';

const editBusinessById = async (id, postBody) => {
  const resp = await axiosInstance.put(
    `/admin/business/update/${id}`,
    postBody,
  );
  const data = resp;
  return data;
};

export default editBusinessById;
