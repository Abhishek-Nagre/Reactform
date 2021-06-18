import axiosInstance from '../axiosInstance';

const createBusiness = async (businessId, images) => {
  const formData = new FormData();
  formData.append('image', images);
  const resp = await axiosInstance.patch(
    `/un-authenticated/business/${businessId}/add-image`,
    formData,
  );
  const data = resp;
  return data;
};

export default createBusiness;
