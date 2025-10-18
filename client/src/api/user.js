import { axiosInstance } from ".";

export const RegisterUser = async (values) => {
  try {
    const res = await axiosInstance.post("/users/register", values);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const LoginUser = async (values) => {
  try {
    const res = await axiosInstance.post("/users/login", values);
    return res.data;
  } catch (error) {
    return error;
  }
};
