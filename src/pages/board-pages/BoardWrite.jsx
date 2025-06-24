import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBoardAPI, getCategoriesAPI } from "../../api/board";
import {
  BoardContainer,
  BoardForm,
  BoardInput,
  BoardTextarea,
  BoardTitle,
  BoardSelect,
  BoardButton,
} from "../../styles/BoardStyles";

export default function BoardWrite() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState({});
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    getCategoriesAPI().then((res) => setCategories(res.data));
  }, []);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "request",
      new Blob([JSON.stringify(form)], {
        type: "application/json",
      })
    );
    if (file) formData.append("file", file);
    try {
      await createBoardAPI(formData);
      alert("글 작성 완료!");
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <BoardContainer>
      <BoardTitle>글쓰기</BoardTitle>
      <BoardForm onSubmit={handleSubmit}>
        <BoardSelect
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="">카테고리 선택</option>
          {Object.entries(categories).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </BoardSelect>
        <BoardInput
          name="title"
          placeholder="제목"
          value={form.title}
          onChange={handleChange}
          required
        />
        <BoardTextarea
          name="content"
          placeholder="글 내용"
          value={form.content}
          onChange={handleChange}
          required
        />
        <BoardInput
          name="file"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <BoardButton type="submit">글작성</BoardButton>
          <BoardButton type="button" style={{ background: "#ff5555" }} onClick={() => navigate("/")}>취소</BoardButton>
        </div>
      </BoardForm>
    </BoardContainer>
  );
}
