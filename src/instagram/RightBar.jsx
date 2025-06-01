import React from "react";
import styled from "styled-components";

// 오른쪽 사이드바 전체 컨테이너

const RightContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  color: black;
  background: white;
  overflow-y: auto;
`;



// 내 정보 섹션 (아바타와 이름, 전환 버튼 포함)
const Mysection = styled.div`
  display: flex;
  align-items: center;
  margin: 0;                // ← 아래 여백도 제거 가능
  padding: 1rem;            // ← 필요하면 여기에 약간 넣기
`;


// 아바타 자리 표시하는 원형 회색 박스
const Avatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: gray;
  margin-right: 8px;        // ← 줄이거나 0으로
`;


// 사용자 이름과 부가 텍스트를 세로로 쌓이게 하는 컨테이너
const UsernameWrapper = styled.div`
  display: flex;                 /* 자식 요소들을 가로 배치 */
  flex-direction: column;        /* 대신 세로 방향으로 쌓이도록 변경 */
`;

// 사용자 이름 텍스트 스타일
const Username = styled.span`
  font-weight: bold;             /* 글자를 굵게 표시 */
`;

// 전환 버튼 텍스트 스타일
const Switch = styled.span`
  color: #0095f6;                /* 글자 색상을 파란색으로 지정 */
  cursor: pointer;               /* 마우스 커서가 손가락 모양으로 변경되어 클릭 가능함을 표시 */
  font-size: 12px;               /* 글자 크기를 12px로 설정 */
`;


// 추천 섹션 제목 영역 (텍스트와 '모두 보기' 버튼 포함)
const RecommendTitle = styled.div`
  display: flex;                 /* 자식 요소들을 가로로 나란히 배치 */
  justify-content: space-between; /* 좌우 끝으로 요소들을 배치하여 양 끝 정렬 */
  margin-bottom: 12px;           /* 아래쪽에 12px 여백을 줌 */
  font-size: 14px;               /* 글자 크기를 14px로 설정 */
  color: #a8a8a8;               /* 글자 색상을 연한 회색으로 지정 */
`;

// 추천 사용자 한 명을 나타내는 컨테이너
const RecommendUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;                // ← 줄 간격 없애기
  padding: 0.5rem 1rem;     // ← 필요한 만큼만 패딩 (여백 아예 제거도 가능)
`;


// 추천 사용자 아바타 스타일 (위 Avatar 스타일 재사용, 크기만 축소)
const RecommendAvatar = styled(Avatar)`
  width: 40px;                  /* 너비 40px */
  height: 40px;                 /* 높이 40px */
`;

// 팔로우 버튼 텍스트 스타일
const FollowButton = styled.span`
  color: #0095f6;                /* 파란색 글자 */
  font-size: 12px;               /* 글자 크기 12px */
  cursor: pointer;               /* 클릭 가능 표시 커서 */
`;

// 오른쪽 사이드바 컴포넌트 함수
function RightBar() {
  return (
  
    <RightContainer>
      {/* 내 정보 섹션 */}
      <Mysection>
        <Avatar />                   {/* 회색 원형 아바타 */}
        <UsernameWrapper>
          <Username>nanyoni_</Username>  {/* 사용자 이름 */}
          <span>배정연</span>            {/* 부가 텍스트 */}
        </UsernameWrapper>
        <div style={{ marginLeft: "auto" }}>
          <Switch>전환</Switch>        {/* 오른쪽 끝에 전환 버튼 */}
        </div>
      </Mysection>

      {/* 추천 섹션 */}
   
        <RecommendTitle>
          <span>회원님을 위한 추천</span>
          <span style={{ cursor: "pointer" }}>모두 보기</span> {/* 모두 보기 클릭 가능 */}
        </RecommendTitle>

        {/* 추천 사용자 목록 */}
        {[1, 2, 3, 4, 5].map((_, idx) => (
          <RecommendUser key={idx}>
            <RecommendAvatar />           {/* 추천 사용자 아바타 */}
            <UsernameWrapper>
              <Username>추천유저{idx + 1}</Username> {/* 추천 사용자 이름 */}
             
            </UsernameWrapper>
            <FollowButton>팔로우</FollowButton>     {/* 팔로우 버튼 */}
          </RecommendUser>
        ))}
    
    </RightContainer>
   
  );
}

export default RightBar;
