import API from "./api";

export const registerUser = async (userData) => {
  const response = await API.post(
    "accounts/register/",
    userData
  );

  return response.data;
};

export const loginUser = async (userData) => {
  const response = await API.post(
    "accounts/login/",
    userData
  );

  return response.data;
};

export const getProfile = async () => {
  const response = await API.get(
    "accounts/profile/"
  );

  return response.data;
};

export const updateProfile = async (userData) => {
  const response = await API.put(
    "accounts/profile/",
    userData
  );

  return response.data;
};

export const logoutUser = async (refreshToken) => {
  const response = await API.post(
    "accounts/logout/",
    {
      refresh: refreshToken,
    }
  );

  return response.data;
};