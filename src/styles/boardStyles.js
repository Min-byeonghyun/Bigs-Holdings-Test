import styled from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  min-height: 880px;
  margin: 40px auto;
  padding: 32px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 16px;
  }
  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const BoardTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 2rem;
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const BoardForm = styled.form`
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 16px;
  }
  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const BoardInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  @media (max-width: 480px) {
    padding: 8px;
    font-size: 0.95rem;
  }
`;

export const BoardTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 120px;
  @media (max-width: 480px) {
    padding: 8px;
    font-size: 0.95rem;
  }
`;

export const BoardSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  @media (max-width: 480px) {
    padding: 8px;
    font-size: 0.95rem;
  }
`;

export const BoardButton = styled.button`
  padding: 8px 16px;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 8px;
  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 0.95rem;
    margin-right: 4px;
  }
`;

export const BoardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;
  @media (max-width: 600px) {
    overflow-x: auto;
    white-space: nowrap;
    font-size: 0.95rem;
  }
`;

export const BoardTh = styled.th`
  border-bottom: 2px solid #eee;
  padding: 12px;
  text-align: left;
  @media (max-width: 480px) {
    padding: 8px 4px;
    font-size: 0.95rem;
  }
`;

export const BoardTd = styled.td`
  border-bottom: 1px solid #eee;
  padding: 12px;

  @media (max-width: 480px) {
    padding: 8px 4px;
    font-size: 0.95rem;
  }
`;
export const BoardTitleTd = styled(BoardTd)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 250px;
`;

export const BoardPagination = styled.div`
  display: flex;
  justify-content: center;

  gap: 8px;
  margin-top: auto;
  @media (max-width: 480px) {
    gap: 4px;
    font-size: 0.95rem;
  }
`;
export const PageText = styled.span`
  align-self: center;
  font-weight: 600;
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const BoardImg = styled.img`
  max-width: 50%;
  margin-bottom: 16px;
  border-radius: 4px;
  @media (max-width: 480px) {
    margin-bottom: 8px;
  }
`;

export const BoardContentWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    padding: 16px 0;
    font-size: 0.95rem;
  }
`;

export const BoardContentRow = styled.div`
  margin-bottom: 16px;
  line-height: 1.6;
  word-break: break-word;
  white-space: pre-line;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const BoardContentLabel = styled.span`
  display: inline-block;
  font-weight: 600;
  color: #666;
  margin-right: 8px;
`;

export const WriteButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const WriteButton = styled.button`
  padding: 8px 16px;
  margin-right: 20px;
  border: none;
  border-radius: 4px;
  background: #222;
  color: #fff;
  cursor: pointer;

  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 0.95rem;
  }
`;
