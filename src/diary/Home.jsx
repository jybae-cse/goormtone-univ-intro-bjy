import UserList from './UserList';
import styled from 'styled-components';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h3>당신의 하루를 짧게 기록해보세요</h3>
      <p>사용자를 선택해서 일기장을 시작하세요.</p>
      <UserList />
    </div>
  );
}

export default Home;
