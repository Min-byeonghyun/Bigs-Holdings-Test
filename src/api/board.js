import axiosInstance from "./axiosInstance";

export const getCategoriesAPI = () => axiosInstance.get("/boards/categories"); // 카테고리 가져오기

export const createBoardAPI = (formData) =>
  axiosInstance.post("/boards", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  }); //글 작성

export const modifyBoardAPI = (id, formData) =>
  axiosInstance.patch(`boards/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  }); // 글 수정

export const deleteBoardAPI = (id) => axiosInstance.delete(`/boards/${id}`); // 글삭제

export const getBoardAPI = (id) => axiosInstance.get(`/boards/${id}`); //상세글 가져오기

export const getBoardListAPI = (page = 0, size = 10) =>
  axiosInstance.get("/boards", { params: { page, size } }); //글 목록 가져오기
