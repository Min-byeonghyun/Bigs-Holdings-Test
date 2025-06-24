import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Register from "./pages/auth-pages/Register";
import Login from "./pages/auth-pages/Login";
import BoardList from "./pages/board-pages/BoardList";
import BoardWrite from "./pages/board-pages/BoardWrite";
import BoardDetail from "./pages/board-pages/BoardDetail";
import { userStore } from "./store/userStore";
import Header from "./components/Header";

function App() {
  const getUser = userStore((state) => state.setUser);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BoardList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/board/write" element={<BoardWrite />} />
          <Route path="/board/:id" element={<BoardDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
