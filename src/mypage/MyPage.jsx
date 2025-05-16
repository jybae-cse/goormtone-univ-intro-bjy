import styled from 'styled-components'; 
import myImage from '../assets/my.jpg';  // 'src/assets/my.jpg' 이미지 import
import {useState,useEffect} from 'react';
import Information from './components/Information';
import MyLink from './components/MyLink';
import ProfileImage from './components/ProfileImage';
import ReactCounter from './components/ReactCounter';

// 자기소개박스
const Container = styled.div`
  width: 700px;
  height: 500px;
  background-color: #FBFAFA;
  display: flex; 
  align-items: center;       // 세로 중앙 정렬(사진)
  border-radius: 25px;
`;



const TextContainer = styled.div`
  display: flex;
  flex-direction: column;    // 텍스트는 세로로 나열
`;






function App() {
  //핸들러
  // const handleLike = () => {
  //   alert("좋아요를 눌렀습니다!");
  // };

  // const handleHate = () => {
  //   alert("싫어요를 눌렀습니다!");
  // };


  
  //useEffect
  useEffect(() => {
    
    alert('환영합니다~!~');
    
  },[]);
  
  const url = "";



return (
    <Container>  
      <ProfileImage src={myImage}/>
      <TextContainer>
        <Information name="배정연" department="" studentId="20225522" interesting="프론트엔드 개발자 희망" skill="JS, JAVA, Python"/>
        {url && <MyLink bloglink={url} />}
        <ReactCounter/>
     </TextContainer>
    </Container>
  );
}

export default App;
