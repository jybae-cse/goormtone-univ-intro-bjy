// src/diary/App.jsx
import { Routes, Route } from 'react-router-dom';
import DiaryPage from './DiaryPage';
import WriteDiary from './WriteDiary';
import DiaryList from './DiaryList';
import Home from './Home'; 

function App() {
  return (
    <Routes>
     <Route path="/diary/:username" element={<DiaryPage />}>
  <Route index element={<Home/>} />
  <Route path="write" element={<WriteDiary />} />
  <Route path="list" element={<DiaryList />} />
   </Route>
 </Routes>
  );
}

export default App;
