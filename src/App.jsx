import styled from 'styled-components'; 
import myImage from './assets/my.jpg';  // 'src/assets/my.jpg' 이미지 import

const Container = styled.div`
  width: 900px;
  height: auto;
  background-color: #FBFAFA;
  display: flex; 
  align-items: center;       // 세로 중앙 정렬(사진)
  // margin: 20px auto;
  border-radius: 25px;

`;

const Image = styled.img`
  width: 150px;              
  height: auto;              
  margin-right: 20px;       
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;    // 텍스트는 세로로 나열
  // justify-content: center;   // 텍스트 세로 중앙 정렬
`;

const Title = styled.h1`
  color: #008000;
  `;

const Info = styled.p`
  color: #000000;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;    // 가로 중앙 정렬
  align-items: center;       // 세로 중앙 정렬
  width: 150px;               
  height: 40px;              
  background-color: #008000; 
  color:white;
  font-weight: bold;
  border-radius: 25px;
  border:none;
  text-decoration: none;    
`;

function App() {
  return (
    <Container>  
      <Image src="src\assets\my.jpg" alt="Profile" /> 
      <TextContainer>
        <Title>안녕하세요~저는 배정연입니다</Title> 
        <Info>학과 : 의료IT공학과</Info> 
        <Info>학번 : 20225522</Info>  
        <Info>프론트엔드 개발자 희망</Info>  
        <Info>관심기술:JS, JAVA, Python</Info> 
        <Link href="https://myinfo5302.tistory.com/">블로그 보러가기</Link> 
      </TextContainer>
    </Container>
  );
}

export default App;
