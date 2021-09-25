import styled from 'styled-components'
export const Hero = styled.div `
position: relative;
`;
export const HeroContent = styled.div `
/* position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%); */
text-align: center;
`;
export const HeroTitle = styled.h2 `
color: #0F2137;
font-size: 58px;
margin-bottom: 20px;
`;
export const HeroDesc = styled.p `
font-size: 20px;
margin-bottom: 60px;
padding-left: 150px;
padding-right: 150px;
line-height: 2;
`;
export const Link = styled.a `
color: #fff;
margin-left: 35px;
text-decoration: none;
font-weight: 400;
background-color: #EA3A60;
padding: 17px 45px;
border-radius: 50px;
&:hover{
    box-shadow: rgb(233 76 84 / 57%) 0px 9px 20px -5px;
    transition: all .3s ease-in-out;
    color: #fff;
}
`;
export const Img = styled.img `
margin-top: 60px;
margin: 55px auto 22px 12%;
`;