import axiosInstance from '../axiosInstance';

const createBusiness = async (id, postBody) => {
  const resp = await axiosInstance.post(`/un-authenticated/business/create/${id}`, postBody);
  const data = resp;
  return data;
};

export default createBusiness;
