import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';

function DiaryList() {
  const { diaryList, setDiaryList } = useOutletContext();
  const [editIndex, setEditIndex] = useState(null); //수정중인 일기의 인덱스 저장
  const [editText, setEditText] = useState(''); //수정중인 일기의 내용을 저장장

  const handleDelete = (index) => {
    const updated = diaryList.filter((_, i) => i !== index);
    setDiaryList(updated);
  };

  const handleEdit = (index, content) => {
    setEditIndex(index);
    setEditText(content);
  };

  const handleUpdate = (index) => {
    const updated = [...diaryList];
    updated[index].content = editText;
    setDiaryList(updated);
    setEditIndex(null);
    setEditText('');
  };

  return (
    <div>
      <h3>내 일기 목록</h3>
      {diaryList.length === 0 ? ( <p>작성된 일기가 없습니다.</p>) : 
        ( diaryList.map((diary, index) => (
           <div key={index} >
            <strong>{diary.date}</strong>


            {editIndex === index ? (
              <>
                <textarea rows="4" cols="50" value={editText} onChange={(e) => setEditText(e.target.value)}/>
                <br />
                <button onClick={() => handleUpdate(index)}>완료</button>
              </>
            ) : (
              <>
                <p>{diary.content}</p>
                <button onClick={() => handleEdit(index, diary.content)} style={{ marginRight: '0.5rem' }}>수정</button>
                <button onClick={() => handleDelete(index)}>삭제</button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default DiaryList;
