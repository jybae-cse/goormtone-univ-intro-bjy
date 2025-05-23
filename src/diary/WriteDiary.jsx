import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function WriteDiary() {
  const { setDiaryList } = useOutletContext(); // context 안 받으면 diary 저장 안됨
  const [text, setText] = useState('');

  const handleSubmit = () => {
    const today = new Date().toISOString().split('T')[0];
    const newDiary = { date: today, content: text };
    setDiaryList(prev => [newDiary, ...prev]); // ✅ 추가
    setText('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h3>오늘의 일기를 작성하세요</h3>
      <textarea
        rows="6"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit} style={{ marginTop: '1rem' }}>완료</button>
    </div>
  );
}

export default WriteDiary;
