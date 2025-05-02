import styled from 'styled-components'; 
import myImage from './assets/my.jpg';  // 'src/assets/my.jpg' 이미지 import
import {useState,useEffect} from 'react';

// 자기소개박스
const Container = styled.div`
  width: 700px;
  height: auto;
  background-color: #FBFAFA;
  display: flex; 
  align-items: center;       // 세로 중앙 정렬(사진)
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
`;

const Title = styled.h1`
  color: #008000;
  margin:4px;
`;

const Info = styled.p`
  color: #000000;
  margin : 4px;
   font-weight: bold;

`;
const Link = styled.a`
  display: flex;
  justify-content: center;    
  align-items: center;       
   width: 150px;               
  height: 40px;   
  font-weight: bold;
  text-decoration: none;    
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;  /* 가로 정렬 */
  gap: 15px;            /* 버튼 사이 간격 */
  margin:8px;
  
`;

const Button = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 8px;
  background-color: #008000;
  color: white;
  font-weight: bold;
  
`;

const InfoContainer = styled.p`
   display:flex;
   flex-direction:row;
   gap:30px;
   margin:4px;
   


`;

function App() {
  //핸들러
  // const handleLike = () => {
  //   alert("좋아요를 눌렀습니다!");
  // };

  // const handleHate = () => {
  //   alert("싫어요를 눌렀습니다!");
  // };



  //useState
  const [count1,setCount1]=useState(0);
  const handleLike=()=> {
    setCount1(count1+1);
    };


  const [count2,setCount2]=useState(0);
  const handleHate=()=> {
      setCount2(count2+1);
      };
  
  //useEffect
  useEffect(() => {
    
    alert('환영합니다~!~');
    
  },[]);

  useEffect(()=> {
    if(count1!=0 &&count1%10==0) {
    alert("좋아요가 "+count1+"개 눌렸어요!!!!");
    };
  },[count1])
 
  useEffect(()=> {
    if(count2!=0 &&count2%10==0) {
    alert("싫어요가 "+count2+"개 눌렸어요ㅠㅠ");
    };
  },[count2])
 


  return (
    <Container>  
      <Image src={myImage} alt="Profile" /> 
      <TextContainer>
        <Title>안녕하세요!</Title> 
        <Title>저는 배정연입니다</Title>
        <Info>학과 : 의료IT공학과</Info> 
        <Info>학번 : 20225522</Info>  
        <Info>프론트엔드 개발자 희망</Info>  
        <Info>관심기술 : JS, JAVA, Python</Info> 
        <Link href="https://myinfo5302.tistory.com/" target="_blank" rel="noopener noreferrer">
          블로그 보러가기
        </Link> 
        <ButtonContainer>
          <Button onClick={handleLike}>좋아요</Button>
          <Button onClick={handleHate}>싫어요</Button>
        </ButtonContainer>
        <InfoContainer>
        <Info>좋아요 횟수:{count1}회</Info>
        <Info>싫어요 횟수:{count2}회</Info>
        </InfoContainer>

       
      </TextContainer>
    </Container>
  );
}

export default App;
