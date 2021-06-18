import axiosInstance from '../axiosInstance';

const updateUserImage = async (userId, image) => {
  const formData = new FormData();
  formData.append('image', image);
  const resp = await axiosInstance.patch(
    `/un-authenticated/update/image/${userId}/`,
    formData,
  );
  const data = resp;
  return data;
};

export default updateUserImage;
