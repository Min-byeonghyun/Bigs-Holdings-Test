import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBoardListAPI } from "../../api/board";
import {
  BoardButton,
  BoardContainer,
  BoardPagination,
  BoardTable,
  BoardTd,
  BoardTh,
  BoardTitle,
  BoardTitleTd,
  WriteButtonWrap,
  WriteButton,
  PageText,
} from "../../styles/BoardStyles";
import dayjs from "dayjs";

export default function BoardList() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [size] = useState(10);
  const [totalPage, setTotalPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    getBoardListAPI(page, size).then((res) => {
      setList(res.data.content);
      console.log(res);
      setTotalPage(res.data.totalPages);
    });
  }, [page, size]);

  const displayTotalPages = totalPage === 0 ? 1 : totalPage;

  return (
    <BoardContainer>
      <BoardTitle>게시판</BoardTitle>
      <BoardTable>
        <thead>
          <tr>
            <BoardTh>번호</BoardTh>
            <BoardTh>제목</BoardTh>
            <BoardTh>카테고리</BoardTh>
            <BoardTh>작성일</BoardTh>
            <BoardTh>상세</BoardTh>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <BoardTd>{item.id}</BoardTd>
              <BoardTitleTd>{item.title}</BoardTitleTd>
              <BoardTd>{item.category}</BoardTd>
              <BoardTd>{dayjs(item.createdAt).format("YYYY-MM-DD")}</BoardTd>
              <BoardTd>
                <BoardButton onClick={() => navigate(`/board/${item.id}`)}>
                  보기
                </BoardButton>
              </BoardTd>
            </tr>
          ))}
        </tbody>
      </BoardTable>
      <BoardPagination>
        <BoardButton
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
        >
          이전
        </BoardButton>
        <PageText>
          {page + 1} / {displayTotalPages}
        </PageText>
        <BoardButton
          onClick={() => setPage((p) => Math.min(displayTotalPages - 1, p + 1))}
          disabled={page === displayTotalPages - 1}
        >
          다음
        </BoardButton>
      </BoardPagination>
      <WriteButtonWrap>
        <WriteButton onClick={() => navigate("/board/write")}>
          글쓰기
        </WriteButton>
      </WriteButtonWrap>
    </BoardContainer>
  );
}
