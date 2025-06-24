import axios from "axios";
import { userStore } from "../store/userStore";
import { RefreshAPI } from "./auth";

const baseURL = "/api";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터: 토큰 자동 첨부
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터: 401 발생 시 토큰 리프레시 후 재시도
axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    console.log(originalRequest)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) throw new Error("refreshToken 없음");

        const res = await RefreshAPI(refreshToken);
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          res.data;

        // localStorage 업데이트
        localStorage.setItem("accessToken", newAccessToken);
        localStorage.setItem("refreshToken", newRefreshToken);

        // store 업데이트
        userStore.getState().setUser();

        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return await axiosInstance(originalRequest);
      } catch (e) {
        userStore.getState().reset();
        window.location.href = "/login";
        return Promise.reject(e);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
