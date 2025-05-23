import { Routes, Route } from 'react-router-dom';
import DiaryPage from './DiaryPage';
import UserList from './UserList';
import WriteDiary from './WriteDiary';
import DiaryList from './DiaryList';
import UserPage from './UserPage';
import Home from './Home';


function App() {
  return (
  <Routes>
  <Route path="/" element={<Home />} />
  
  <Route path="/diary/:username" element={<DiaryPage />}>
    {/* 기본 페이지: 일기 쓰기 */}
    <Route index element={<WriteDiary />} />
    <Route path="write" element={<WriteDiary />} />
    <Route path="list" element={<DiaryList />} />
  </Route>

  <Route path="/users" element={<UserList />} />
  <Route path="/users/:userId" element={<UserPage />} />
</Routes>

  );
}

export default App;
