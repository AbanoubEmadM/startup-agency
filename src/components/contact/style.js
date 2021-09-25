import styled from 'styled-components'

export const ContactUs = styled.div `
background-color: #EA3A60;
padding: 50px;
text-align: center;
color: #fff;
border-radius: 10px;
margin-bottom: 80px;
`;
export const Heading = styled.h2 `
font-weight:600;
margin-bottom: 30px;
`;
export const Desc = styled.p `
line-height: 1.9;
`;
export const Input = styled.input `
width: 50%;
padding: 20px;
border: none;
border-radius: 50px;
outline: none;
&::placeholder{
color: #EA3A60;
}
`;
export const Submit = styled.button `
border: none;
border-radius: 50px;
padding: 16px 60px;
margin-top: 24px;
border:2px solid #fff;
background: #EA3A60;
color: #fff;
font-weight: 500;
font-size: 18px;
transition: all 0.3s ease-in-out;
&:hover{
    color: #EA3A60;
    transition: all 0.3s ease-in-out;
    background: #fff;
}
`;