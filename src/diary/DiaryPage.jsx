import { useParams, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  background: #e6f4ea;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  &:hover {
    background: #cdebdc;
  }
`;

function DiaryPage() {
  const { username } = useParams();
  const [diaryList, setDiaryList] = useState([]);
  const [initialized, setInitialized] = useState(false); 

  // localStorage에서 일기 불러오기 
  useEffect(() => {
    const saved = localStorage.getItem(`diary-${username}`);
    if (saved !== null) {
      setDiaryList(JSON.parse(saved));
    }
    setInitialized(true); // 불러오기 완료
  }, [username]);


  // 일기가 바뀔 때만 저장 (단, 불러온 이후부터)
  useEffect(() => {
    if (initialized) {
      localStorage.setItem(`diary-${username}`, JSON.stringify(diaryList));
    }
  }, [diaryList, username, initialized]);


  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>{username}님의 일기장</h2>
      <NavBar>
        <NavLink to="/">홈</NavLink>
        <NavLink to="write">일기 쓰기</NavLink>
        <NavLink to="list">내 일기 보기</NavLink>
      </NavBar>
      <Outlet context={{ diaryList, setDiaryList }} />
    </div>
  );
}

export default DiaryPage;
