import axiosInstance from "./axiosInstance";
import axios from "axios";

export const SignupAPI = (data) => axiosInstance.post("/auth/signup", data); 

export const SigninAPI = (data) => axiosInstance.post("/auth/signin", data);

export const RefreshAPI = (refreshToken) =>
  axios.post(
    "/api/auth/refresh",
    { refreshToken },
    {
      headers: { "Content-Type": "application/json" },
      
    }
  );
