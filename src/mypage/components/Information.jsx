import styled from "styled-components";

const Title = styled.h1`
  color: #008000;
  margin: 4px;
`;

const Info = styled.p`
  color: #000000;
  margin: 4px;
  font-weight: bold;
`;


function Information({name,department,studentId,interesting,skill}) {
  return (
    <>
     <Title>안녕하세요!</Title>
      <Title>저는 {name}입니다</Title>
      <Info>학과: {department || '정보없음'}</Info>
      <Info>학번: {studentId || '정보없음'}</Info>
      <Info>{interesting|| '정보없음'}</Info>
      <Info>관심기술: {skill || '정보없음'}</Info>

     


    </>   
    
  );
}

export default Information;
