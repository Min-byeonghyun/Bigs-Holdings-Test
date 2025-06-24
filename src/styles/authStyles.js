import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  height: 600px;
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
export const AuthForm = styled.form`
  width : 95%;
  display :flex;
  flex-direction : column;
  gap : 5px;
  margin : auto 0;

`;

export const AuthTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 2rem;
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const AuthInput = styled.input`
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

export const AuthButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.95rem;
  }
`;

export const AuthMessage = styled.div`
 
  color: red;
  margin : 18px auto;
  @media (max-width: 480px) {
    margin-top: 8px;
    font-size: 0.95rem;
  }
`;

export const AuthBottom = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const AuthBottomLink = styled.a`
  color: #07f;
  cursor: pointer;
`;
