import styled from 'styled-components'
export const MainCore = styled.div `
margin-bottom: 80px;
`;
export const ImgMain = styled.img `
position: relative;
z-index: 1;
`;
export const ImgSec = styled.img `
position: absolute;
right: 0;
`;
export const Span = styled.span `
color: #EA3A60;
display: flex;
justify-content: flex-start;
margin-bottom: 25px;
font-weight: 600;
`;
export const Title = styled.h4 `
font-weight: 600;
font-size: 45px;
color: #0f2137;
margin-bottom: 20px;
`;
export const Desc = styled.p `
line-height: 1.9;
color: #343d48;
font-size: 18px;
`;
export const Btn = styled.button `
color: #fff;
margin-left: 35px;
text-decoration: none;
font-weight: 400;
background-color: #EA3A60;
padding: 13px 32px;
border-radius: 50px;
margin-top: 20px;
border: none;
margin-right: 20px;
&:hover{
    box-shadow: rgb(233 76 84 / 57%) 0px 9px 20px -5px;
    transition: all .3s ease-in-out;
    color: #fff;
}
`;
