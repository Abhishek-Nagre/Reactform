import axiosInstance from '../axiosInstance';

const getBusinessById = async (businessId) => {
  const resp = await axiosInstance.get(`/business/${businessId}`);
  const data = resp.data.data;
  return data;
};

export default getBusinessById;
