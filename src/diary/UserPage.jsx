import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function UserPage() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const UserInfo = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        //  if (!res.ok) throw new Error('사용자 정보를 불러오지 못했습니다');
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    };
   UserInfo(); }, [userId]);

  if (error) return <p>{error}</p>;
  if (!user) return <p>로딩 중...</p>; //만약 fetch가 끝나지않았다면면

  return (
    <div>
      <h2>{user.name}의 프로필</h2>
      <p>이메일: {user.email}</p>
      <p>도시: {user.address.city}</p>
      <p>회사: {user.company.name}</p>
      <p>전화번호: {user.phone}</p>
    </div>
  );
}

export default UserPage;
