import { useOutletContext } from 'react-router-dom';

function DiaryList() {
  const { diaryList } = useOutletContext();

  return (
    <div style={{ padding: '1rem', maxWidth: '700px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h3>내가 쓴 일기</h3>

      {diaryList.length === 0 ? (
        <p>작성된 일기가 없습니다.</p>
      ) : (
        diaryList.map(diary => (
          <div key={diary.id} style={{ marginBottom: '1rem', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '6px' }}>
            <strong>{diary.date}</strong>
            <p>{diary.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default DiaryList;
