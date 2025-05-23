import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  width: 250px;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
`;

const UserCard = styled.li`
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const UserName = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
`;

const Email = styled.p`
  color: 'gray';
`;

const ButtonLink = styled.button`
  background-color: ${props => props.color || '#3498db'};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: bold;
  margin-right: 0.5rem;

  &:hover {
    opacity: 0.85;
  }
`;

function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [setError] = useState(null);
  const navigate = useNavigate();

  //데이터받기
  useEffect(() => { fetch('https://jsonplaceholder.typicode.com/users')
     
  .then(res => res.json()) 
  .then(data => setUsers(data))
  .catch(err => setError(err.message));

  }, []);

//   useEffect(() => {
//   const fetchUsers = async () => {
//     try {
//       const res = await fetch('https://jsonplaceholder.typicode.com/users');
//       if (!res.ok) throw new Error('사용자 불러오기 실패');
//       const data = await res.json();
//       setUsers(data);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   fetchUsers();
// }, []);


  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()) );

  return (
    <Container>
      <Title>사용자 목록</Title>
      <SearchInput
        type="text"
        placeholder="이름으로 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)} //
      />
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
      <ul>
        {filteredUsers.map(user => (
          <UserCard key={user.id}>
            <UserName>{user.name}</UserName>
            <Email>{user.email}</Email>

            {/* //버튼 */}
            <ButtonLink onClick={() => navigate(`/diary/${user.username}`)} color="green"> 일기장 보기 </ButtonLink>
            <ButtonLink onClick={() => navigate(`/users/${user.id}`)} color="green"> 사용자 정보 보기 </ButtonLink>
          </UserCard>
        ))}
      </ul>
    </Container>
  );
}

export default UserList;
