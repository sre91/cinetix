import { axiosInstance } from ".";

export const addShow = async (payload) => {
  try {
    const response = await axiosInstance.post("/shows/addShow", payload);
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const updateShow = async (payload) => {
  try {
    const response = await axiosInstance.patch("/shows/updateShow", payload);
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const deleteShow = async (payload) => {
  try {
    const response = await axiosInstance.delete(
      `/shows/deleteShow/${payload.showId}`
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const getShowsByTheatre = async (payload) => {
  try {
    const response = await axiosInstance.get(
      `shows/getAllShowsByTheatre/${payload.theatreId}`
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const getAllTheatresByMovie = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "shows/getAllTheatresByMovie",
      payload
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const getShowById = async (payload) => {
  try {
    const response = await axiosInstance.get(
      `shows/getShowById/${payload.showId}`
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
};
