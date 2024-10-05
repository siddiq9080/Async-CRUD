import axios from "axios";

const API = "https://657ec91c3e3f5b1894642148.mockapi.io";

export const readUserDataApi = async () => {
  try {
    const response = await axios.get(`${API}/user`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createUserDataApi = async (formState) => {
  try {
    const response = await axios.post(`${API}/user`, formState);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteUserDataApi = async (id) => {
  try {
    const response = await axios.delete(`${API}/user/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const editUserDataApi = async (formState, id) => {
  try {
    const response = await axios.put(`${API}/user/${id}`, formState);

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
