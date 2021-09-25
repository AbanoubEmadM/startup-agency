import styled from 'styled-components'
export const Btn = styled.button `
    border: 2px solid #EA3A60;
    padding: 16px 38px;
    border-radius: 50px;
    color: #EA3A60;
    font-weight: 600;
    &:hover{
        background-color: #EA3A60;
        color: #fff;
        transition: all .3s ease-in-out;
    }
`;
export const Link = styled.a `
color: #343D48;
margin-left: 35px;
text-decoration: none;
font-weight: 400;
&:hover{
    color: #EA3A60;
    transition: all .3s ease-in-out;
}
`;