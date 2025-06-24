import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import {
  deleteBoardAPI,
  getBoardAPI,
  getCategoriesAPI,
  modifyBoardAPI,
} from "../../api/board";
import {
  BoardButton,
  BoardContainer,
  BoardForm,
  BoardImg,
  BoardInput,
  BoardSelect,
  BoardTextarea,
  BoardTitle,
  BoardContentWrapper,
  BoardContentRow,
  BoardContentLabel,
} from "../../styles/BoardStyles";

const API_BASE_URL = "https://front-mission.bigs.or.kr";

export default function BoardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [boardDetail, setBoardDetail] = useState({
    id: "",
    title: "",
    content: "",
    boardCategory: "",
    imageUrl: "",
    createdAt: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const boardData = await getBoardAPI(id);
        setBoardDetail(boardData.data);

        const categoriesData = await getCategoriesAPI();
        setCategories(categoriesData.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleEdit = () => setEditMode(true);
  const handleCancel = () => setEditMode(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoardDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "request",
      new Blob(
        [
          JSON.stringify({
            title: boardDetail.title,
            content: boardDetail.content,
            category: boardDetail.boardCategory,
          }),
        ],
        { type: "application/json" }
      )
    );
    if (file) formData.append("file", file);
    try {
      await modifyBoardAPI(id, formData);
      alert("수정 완료!");
      setEditMode(false);
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  const handleDelete = async (boardId) => {
    if (window.confirm("게시글을 삭제하시겠습니까?")) {
      try {
        await deleteBoardAPI(boardId);
        alert("게시글이 삭제되었습니다.");
        navigate("/board");
      } catch {
        alert("게시글을 삭제할 수 없습니다.");
      }
    }
  };

  if (!BoardDetail) return <BoardContainer>로딩중...</BoardContainer>;

  return (
    <BoardContainer>
      <BoardTitle>게시글</BoardTitle>
      {editMode ? (
        <BoardForm onSubmit={handleSubmit}>
          <BoardSelect
            name="category"
            value={boardDetail.boardCategory}
            onChange={handleChange}
            required
          >
            <option>카테고리 선택</option>
            {Object.entries(categories).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </BoardSelect>
          <BoardInput
            name="title"
            value={boardDetail.title}
            onChange={handleChange}
            required
          />
          <BoardTextarea
            name="content"
            value={boardDetail.content}
            onChange={handleChange}
            required
          />
          <BoardInput
            name="file"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "auto",
            }}
          >
            <BoardButton type="submit">수정 완료</BoardButton>
            <BoardButton
              style={{ background: "#ff5555" }}
              type="button"
              onClick={handleCancel}
            >
              취소
            </BoardButton>
          </div>
        </BoardForm>
      ) : (
        <>
          {boardDetail.imageUrl && (
            <BoardImg
              src={`${API_BASE_URL}${boardDetail.imageUrl}`}
              alt="첨부이미지"
            />
          )}
          <BoardContentWrapper>
            <BoardContentRow>
              <BoardContentLabel>제목 :</BoardContentLabel>
              {boardDetail.title}
            </BoardContentRow>
            <BoardContentRow>
              <BoardContentLabel>카테고리 :</BoardContentLabel>
              {boardDetail.boardCategory}
            </BoardContentRow>
            <BoardContentRow>
              <BoardContentLabel>작성일 :</BoardContentLabel>
              {dayjs(boardDetail.createdAt).format("YYYY-MM-DD")}
            </BoardContentRow>
            <BoardContentRow>
              <BoardContentLabel>본문 내용 :</BoardContentLabel>
              <div>{boardDetail.content}</div>
            </BoardContentRow>
          </BoardContentWrapper>
          <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
            <BoardButton onClick={handleEdit}>수정</BoardButton>
            <BoardButton
              style={{ background: "#ff5555" }}
              onClick={() => handleDelete(boardDetail.id)}
            >
              삭제
            </BoardButton>
          </div>
        </>
      )}
    </BoardContainer>
  );
}
