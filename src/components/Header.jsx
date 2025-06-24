import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { userStore } from "../store/userStore";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 16px 24px;
  background: #222;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 16px;
    gap: 10px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const Logo = styled(Link)`
  font-weight: 700;
  font-size: 1.4rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;

const NavLink = styled(Link)`
  background: #fff;
  color: #222;
  text-decoration: none;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;

  &:hover {
    background: #f0f0f0;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;

  @media (max-width: 480px) {
    align-self: flex-end;
    font-size: 0.9rem;
  }
`;

const LogoutButton = styled.button`
  background: #ff5555;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 0.95rem;
  cursor: pointer;

  &:hover {
    background: #e64949;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
  }
`;

export default function Header() {
  const { user, reset } = userStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    reset();
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <LeftSection>
        <Logo to="/">Bigs-Holdings</Logo>
        <NavLink to="/">게시판</NavLink>
      </LeftSection>

      {user ? (
        <UserInfo>
          {user.name} ({user.username})
          <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
        </UserInfo>
      ) : (
        <UserInfo>
          <NavLink to="/login">로그인</NavLink>
        </UserInfo>
      )}
    </HeaderContainer>
  );
}