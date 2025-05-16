import { Outlet, useParams, Link } from 'react-router-dom';
import { useState } from 'react';

function DiaryPage() {
  const { username } = useParams();
  const [diaryList, setDiaryList] = useState([]);

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',  
    gap: '1.5rem',
    margin: '1rem 0'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#2d6a4f',
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    backgroundColor: '#d8f3dc'
  };

  return (
    <>
      <h2 style={{ textAlign: 'center', color: '#1b4332' }}> {username}님의 일기장</h2>

     
      <nav style={navStyle}>
        <Link to="" style={linkStyle}>홈</Link>
        <Link to="write" style={linkStyle}>일기 쓰기</Link>
        <Link to="list" style={linkStyle}>내 일기 보기</Link>
      </nav>

      <Outlet context={{ diaryList, setDiaryList }} />
    </>
  );
}

export default DiaryPage;
