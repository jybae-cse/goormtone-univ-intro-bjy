import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin: 8px;
`;

const Button = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 8px;
  background-color: #008000;
  color: white;
  font-weight: bold;
`;

const Info = styled.p`
  color: #000000;
  margin: 4px;
  font-weight: bold;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin: 4px;
`;

function ReactCounter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleLike = () => setCount1(count1 + 1);
  const handleHate = () => setCount2(count2 + 1);

  // useEffect(() => {
  //   if (count1 !== 0 && count1 % 10 === 0) {
  //     alert('좋아요가 ' + count1 + '개 눌렸어요!!!!');
  //   }
  // }, [count1]);

  // useEffect(() => {
  //   if (count2 !== 0 && count2 % 10 === 0) {
  //     alert('싫어요가 ' + count2 + '개 눌렸어요ㅠㅠ');
  //   }
  // }, [count2]);

  return (
    <>
      <ButtonContainer>
        <Button onClick={handleLike}>좋아요</Button>
        <Button onClick={handleHate}>싫어요</Button>
      </ButtonContainer>
      <InfoContainer>
        <Info>좋아요 횟수: {count1}회</Info>
        <Info>싫어요 횟수: {count2}회</Info>
      </InfoContainer>
      {count2 == 10 && <Info>싫어요가 10개나 눌렸어요ㅜㅜ</Info>}
      {count1%10==0 && count1 !=0 && <Info>좋아요가 {count1}개나 눌렸어요!!!</Info>}

    </>
  );
}

export default ReactCounter;
