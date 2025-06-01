import React from "react";
import styled from "styled-components";
import LogoImg from '../assets/Logoo.png';

const LeftContainer = styled.div`
  width: 200px;
  background-color: white;
  color: black;
  height: 100vh; 
  padding: 2rem;
  // box-sizing: border-box;
  // overflow-y: auto;

`;

const Menu = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover { font-weight:bold;}
`;

//   &:hover {
//     background-color: #efefef;
//   }
// `;

const Logo = styled.img`
  width: 130px;
  margin-bottom: 2rem; 
`;

function LeftBar() {
  return (
    <LeftContainer>
  
      <Logo src={LogoImg} alt="Logo" />
      
      <Menu>홈</Menu>
      <Menu>검색</Menu>
      <Menu>탐색랩</Menu>
      <Menu>릴스</Menu>
      <Menu>메세지</Menu>
      <Menu>알림</Menu>
      <Menu>만들기</Menu>
      <Menu>프로필</Menu>
    </LeftContainer>
  );
}

export default LeftBar;
