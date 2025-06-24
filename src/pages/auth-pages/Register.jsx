import React, { useState } from "react";
import {
  AuthContainer,
  AuthForm,
  AuthTitle,
  AuthButton,
  AuthInput,
  AuthMessage,
  AuthBottom,
  AuthBottomLink,
} from "../../styles/authStyles";
import { useNavigate } from "react-router-dom";
import { SignupAPI } from "../../api/auth";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };
  const validate = () => {
    const emailValidate = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    const pwValidate =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!%*#?&])[A-Za-z\d!%*#?&]{8,}$/;
    if (!form.name.trim()) return "이름을 입력하세요.";
    if (!emailValidate.test(form.username))
      return "이메일 형식이 올바르지 않습니다.";
    if (!pwValidate.test(form.password))
      return "비밀번호는 8자이상, 숫자, 영문자, 특수문자(!%*#?&) 1개 이상 사용해주세요.";
    if (form.password !== form.confirmPassword)
      return "비밀번호가 일치하지 않습니다";
    return "";
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const errMsg = validate();
    if (errMsg) {
      setError(errMsg);
      return;
    }
    try {
      await SignupAPI(form);
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    } catch {
      alert('서버 상태가 불안정합니다');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContainer>
      <AuthTitle>회원가입</AuthTitle>
      <AuthForm onSubmit={handleSubmit}>
        <AuthInput
          name="username"
          type="email"
          placeholder="이메일"
          autoComplete="username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <AuthInput
          name="name"
          type="text"
          placeholder="이름"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <AuthInput
          name="password"
          type="password"
          placeholder="비밀번호"
          autoComplete="new-password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <AuthInput
          name="confirmPassword"
          type="password"
          placeholder="비밀번호 확인"
          autoComplete="new-password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        {error && <AuthMessage>{error}</AuthMessage>}
        <AuthButton type="submit" disabled={loading}>
          {loading ? "loading..." : "회원가입"}
        </AuthButton>
      </AuthForm>
      <AuthBottom>
        이미 계정이 있으신가요?
        <AuthBottomLink href="/login">로그인</AuthBottomLink>
      </AuthBottom>
    </AuthContainer>
  );
}
