import styled from "styled-components";

const Link = styled.a`
  display: flex;
  justify-content: center;    
  align-items: center;       
  width: 150px;               
  height: 40px;   
  font-weight: bold;
  text-decoration: none;    
`;

function MyLink({ bloglink }) {
    return (
       <Link href={bloglink} target="_blank" rel="noopener noreferrer">
        블로그 보러가기
    </Link>
    );
}


export default MyLink;