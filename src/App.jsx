// styled-components 라이브러리 불러오기
import styled from 'styled-components';
// 이미지 파일 불러오기 (src/assets/my.jpg 에 저장된 사진)
import myPhoto from './assets/my.jpg';

// 전체 레이아웃을 감싸는 컨테이너 박스 컴포넌트
const Container = styled.div`
  max-width: 1000px;              // 최대 너비 제한
  margin: 1rem auto;             // 상하 여백 + 좌우 가운데 정렬
  padding: 5rem;                 // 내부 여백
  background-color: #f9f9f9;     // 배경색 (연한 회색)
  border-radius: 16px;           // 모서리 둥글게
  
`;

// 프로필 섹션 (사진과 텍스트를 가로 정렬)
const ProfileSection = styled.div`
  display: flex;               // flex로 가로 배치
  align-items: flex-start;     // 위쪽 정렬
  gap: 2rem;                   // 이미지와 텍스트 사이 간격

  @media (max-width: 600px) {
    flex-direction: column;   // 화면이 작을 땐 세로 정렬로 변경
    align-items: center;      // 가운데 정렬
  }
`;

// 프로필 이미지 스타일링 (직사각형 형태)
const ProfileImg = styled.img`
  width: 180px;
  height: 200px;
  object-fit: cover;           // 이미지 비율 유지하며 채움
  border-radius: 12px;         // 모서리 둥글게
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); // 살짝 그림자 효과
`;

// 오른쪽 텍스트 섹션을 감싸는 박스
const TextSection = styled.div`
  flex: 1;                     // 남은 공간을 다 차지
`;

// 큰 제목 (이름)
const Title = styled.h1`
  font-size: 2rem;             // 글자 크기
  color: #4F46E5;              // 보라색 강조 색상
  margin-bottom: 1rem;         // 아래 여백
`;

// 정보 텍스트 (학번, 전공 등)
const Info = styled.p`
  font-size: 1.1rem;           // 약간 큰 본문 글씨
  margin: 0.4rem 0;            // 위아래 여백
  color: #333;                 // 진한 회색 글씨
`;

// 한마디 텍스트 (기울임 + 부드러운 회색)
const Quote = styled.p`
  font-style: italic;
  color: #6B7280;
  margin-top: 1rem;
`;

// 블로그 링크 버튼 스타일
const Link = styled.a`
  display: inline-block;
  margin-top: 1.5rem;          // 위 여백
  padding: 0.75rem 1.5rem;     // 안쪽 여백
  background-color: #4F46E5;   // 배경 보라색
  color: white;                // 글자 흰색
  text-decoration: none;       // 밑줄 제거
  border-radius: 8px;          // 둥근 모서리
  font-weight: bold;           // 굵은 글씨
  transition: background-color 0.3s ease; // 마우스 오버 시 부드럽게 전환

  &:hover {
    background-color: #4338ca; // 마우스를 올렸을 때 진한 보라색으로 변경
  }
`;

// 실제 화면에 렌더링될 App 컴포넌트 정의
function App() {
  return (
    <Container> {/* 전체 감싸는 박스 */}
      <ProfileSection> {/* 왼쪽 이미지 + 오른쪽 텍스트를 묶는 영역 */}
        
        {/* 왼쪽: 프로필 이미지 */}
        <ProfileImg src={myPhoto} alt="프로필 사진" />

        {/* 오른쪽: 자기소개 텍스트 영역 */}
        <TextSection>``
          <Title>안녕하세요! 저는 배정연입니다</Title>
          <Info>학번: 20225522</Info>
          <Info>전공: 의료IT공학과</Info>
          <Info>프론트엔드 개발자 지망</Info>
          <Info>관심 기술: JavaScript, Java</Info>
          <Quote>"잘 부탁드립니다"</Quote>

          {/* 블로그 버튼 */}
          <Link
            href="https://myinfo5302.tistory.com/"
            target="_blank"           // 새 탭에서 열기
            rel="noopener noreferrer" // 보안 이슈 방지
          >
            블로그 보러가기
          </Link>
        </TextSection>

      </ProfileSection>
    </Container>
  );
}

// App 컴포넌트를 외부에서 사용할 수 있도록 내보내기
export default App;
