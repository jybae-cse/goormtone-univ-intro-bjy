import React, { useState } from "react";
import styled from "styled-components";
import { FiHeart, FiMessageCircle, FiSend } from "react-icons/fi"; // 아이콘 import
import feedimage1 from "../assets/feedimage1.jpeg";
import feedimage2 from "../assets/feedimage2.jpg";

const posts = [
  { id: 1, username: "nanyoni_", image: feedimage1, caption: "와재밌다하하하" },
  { id: 2, username: "cafe_official", image: feedimage2, caption: "놀러오세요~" }
];

const FeedContainer = styled.div`
  padding: 2rem;
  background: white;
`;

const Post = styled.div`
  margin-bottom: 5rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 2rem;
`;

const Username = styled.h4`
  color: black;
`;

const PostImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 8px;
`;

const Caption = styled.p`
  color: black;
  margin-top: 1rem;
`;

const IconRow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.7rem;
  font-size: 24px;
  cursor: pointer;
`;

const CommentInput = styled.input`
  margin-top: 0.5rem;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  outline: none;
`;

const Comment = styled.div`
  margin-top: 0.5rem;
  font-size: 14px;
`;

//게시물 내용이랑 아이디 나란히히
const FirstContainer = styled.div`
  display:flex;
 align-items: center;  /* 세로 정렬 */
  gap:10px;
 
`;

function FeedPost({ post }) {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  const toggleLike = () => setLiked(!liked);

  const handleCommentKeyPress = (e) => {
    if (e.key === "Enter" && comment.trim() !== "") {
      setCommentList([...commentList, comment]);
      setComment(""); // clear input
    }
  };

  return (
    <Post>
      <Username>{post.username}</Username>
      <PostImage src={post.image} alt="post" />

{/* 아이콘콘 */}
      <IconRow>
        <FiHeart
          color={liked ? "red" : "black"}
          onClick={toggleLike}
          size={24}
        />
        <FiMessageCircle size={24} />
        <FiSend size={24} />
      </IconRow>

      
      <FirstContainer>
      <Username>{post.username}</Username>
      <Caption>{post.caption}</Caption>
      </FirstContainer>

      {/* 댓글 입력창 */}
      <CommentInput
        type="text"
        placeholder="댓글 달기..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onKeyDown={handleCommentKeyPress}
      />

      {/* 댓글 목록 */}
      {commentList.map((c, i) => (
        <Comment key={i}>{c}</Comment>
      ))}
    </Post>
  );
}

function Feed() {
  return (
    <FeedContainer>
      {posts.map((post) => (
        <FeedPost key={post.id} post={post} />
      ))}
    </FeedContainer>
  );
}

export default Feed;
