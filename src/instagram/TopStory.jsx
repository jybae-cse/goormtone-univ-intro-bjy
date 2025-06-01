import React from "react";
import styled from "styled-components";
import basicimg from "../assets/basicimg.jpeg"

const StoryContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 16px;
  background : white;
  }
`;

// 각각의 스토리 아이템
const StoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 12px;
  width: 64px;
`;

const StoryProfile = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid #c13584; /* 인스타 테두리 색상 느낌 */
  padding: 2px;
  object-fit: cover;
`;

const StoryUsername = styled.span`
  margin-top: 6px;
  font-size: 12px;
  color: black;

`;
//프로필 이미지 다 다를때 필요요
const stories = [
  { username: "seong_mi...",},
  { username: "xuteraeb", pimg :basicimg },
  { username: "door.zip", pimg :basicimg },
  { username: "2b0na", pimg :basicimg},
  { username: "aid__live", pimg :basicimg },
  { username: "_sunmer.8" , pimg :basicimg },
  { username: "ywwoni", pimg :basicimg},
  { username: "lovtaeha", pimg :basicimg },
];

function StoriesBar() {
  return (
    <StoryContainer>
      {stories.map((story, index) => (
        <StoryItem key={index}>
          <StoryProfile src={basicimg} alt={story.username} />
          <StoryUsername>{story.username}</StoryUsername>
        </StoryItem>
      ))}
    </StoryContainer>
  );
}

export default StoriesBar;
