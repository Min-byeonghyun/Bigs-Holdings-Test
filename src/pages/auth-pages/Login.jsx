import React, { useState } from 'react'
import { AuthBottom, AuthBottomLink, AuthButton, AuthContainer, AuthForm, AuthInput, AuthMessage, AuthTitle } from '../../styles/authStyles'
import { useNavigate } from 'react-router-dom';
import { SigninAPI } from '../../api/auth';
import { jwtDecode } from 'jwt-decode';
import { userStore } from '../../store/userStore';

export default function Login() {
  const [form,setForm] = useState({
    username : '',
    password : '',
  })
  const setUser = userStore((state) => state.setUser)
  const [error,setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  

  const handleChange = (e) => {
    setForm({...form, [e.target.name] : e.target.value})
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await SigninAPI(form);
      const {accessToken, refreshToken} = res.data;
      if(!accessToken) {
        setError('로그인 실패 : 토큰을 받아올 수 없습니다.')
        return;
      }
      const decoded = jwtDecode(accessToken);
      const user = {name : decoded.name, username : decoded.username};
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      setUser()
      navigate('/')
      setError('')
    }catch(err) {
      setError('로그인 실패 : ' + (err.response?.data?.message))
    } finally {
      setLoading(false);
    }

  }
  
  return (
    <AuthContainer>
      <AuthTitle>로그인</AuthTitle>
      <AuthForm onSubmit={handleSubmit}>
        <AuthInput name='username' type='email' placeholder='이메일' autoComplete='username' value={form.username} onChange={handleChange} required/>
        <AuthInput name='password' type='password' placeholder='비밀번호' autoComplete='new-password' value={form.password} onChange={handleChange} required/>
        <AuthButton type='submit'>
          {loading ? 'loading...' : '로그인'}
        </AuthButton>
        {error && <AuthMessage>{error}</AuthMessage>}
      </AuthForm>
      <AuthBottom>
        계정이 없으신가요?
          <AuthBottomLink href='/register'>회원가입</AuthBottomLink>
      </AuthBottom>
    </AuthContainer>
  )
}
