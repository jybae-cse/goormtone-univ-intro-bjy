import styled from "styled-components";
import Feed from "./feed";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import StoriesBar from "./TopStory";

const Layout = styled.div`
  display: flex;
  height: 100vh;             
  // overflow: hidden;          
  gap:70px;
  padding: 0;       
  margin: 0;        
`;

const Left = styled.div`
  width: 250px;
  // flex-shrink: 0;

`;

const Right = styled.div`
  width: 250px;
  flex-shrink: 0;
  background-color: white;
  padding: 0;         
  margin: 0;        
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;

  

`;


const FeedWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
`;


export default function App() {
  return (
    <Layout>
      <Left>
        <LeftBar />
      </Left>
      <Center>
        <StoriesBar />          
        <FeedWrapper>            
          <Feed />
        </FeedWrapper>
      </Center>
      <Right>
        <RightBar />
      </Right>
    </Layout>
  );
}

