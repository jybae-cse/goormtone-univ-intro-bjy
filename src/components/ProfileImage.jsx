import styled from "styled-components";


const Image = styled.img`
  width: 150px;              
  height: auto;              
  margin-right: 20px;       
`;

function ProfileImage({src}) {
    return(
       
        
         <Image src={src}  /> 
      

    );
}

export default ProfileImage;