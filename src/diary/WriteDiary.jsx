import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function WriteDiary() {
  const { setDiaryList } = useOutletContext();
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (!text.trim()) return alert("내용을 입력하세요!");
    const today = new Date().toISOString().split('T')[0];
    const newDiary = { date: today, content: text };
    setDiaryList(prev => [newDiary, ...prev]);
    setText('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h3>오늘 하루를 남겨보세요</h3>
      <textarea rows="6" cols="50" value={text}  onChange={(e) => setText(e.target.value)}
       style={{padding: '0.75rem', fontSize: '1rem', border: 'none', borderRadius: '6px',}}/>
      <br />
      <button onClick={handleSubmit}>완료</button>
    </div>
  );
}

export default WriteDiary;
