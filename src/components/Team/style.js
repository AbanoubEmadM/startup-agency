import styled from 'styled-components'
import {FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa'
export const Avatar = styled.img `
border: 2px solid #EA3A60;
border-radius: 50%;
margin-bottom:15px;
`;
export const MainTeam = styled.div `
margin-bottom: 80px;
`;
export const Name = styled.h4 `
font-size: 20px;
`;
export const Job = styled.p `
font-size: 15px;
`;
export const SocialIcons = styled.div `
    position: absolute;
    bottom: 0%;
    display: flex;
    opacity: 0;
    left: 100%;
    flex-direction: column;
    float: right;
`;
export const TeamBox = styled.div `
position: relative;
margin-bottom: 90px;
transition: all 0.3s ease-in-out;
&:hover{
    color: #EA3A60;
    transition: all 0.3s ease-in-out;
    ${SocialIcons}{
        opacity: 1;
        transition: all 0.3s ease-in-out;
        bottom: 20%;
    color: #EA3A60;
    }
}
`;
export const FaceBook = styled(FaFacebookF)`
margin-top:15px;
`;
export const Twitter = styled(FaTwitter)`
margin-top:15px;
`;
export const Instagram = styled(FaInstagram)`
margin-top:15px;
`;
export const Heading = styled.h2 `
text-align: center;
font-size: 32px;
font-weight: 600;
margin-bottom: 40px;
`;
export const Span = styled.p `
text-align: center;
color: #EA3A60;
margin-bottom: 25px;
font-weight: 600;

`;