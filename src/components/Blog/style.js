import styled from 'styled-components'

export const Info = styled.div `
display: flex;
justify-content: space-between;
transition: all 0.3s ease-in-out;
`;
export const Img = styled.img `
border-top-left-radius: 5px;
border-top-right-radius: 5px;
width: 98%;
margin-bottom: 10px;
`;
export const Title = styled.h4 `
font-size: 20px;
color: #343D48;
font-weight: 600;
line-height: 1.7;
`;
export const PadBox = styled.div `
padding: 28px;
transition: all 0.3s ease-in-out;
&:hover{
    color: #EA3A60;
    transition: all 0.3s ease-in-out;
    ${Title}{
    color: #EA3A60;
    transition: all 0.3s ease-in-out;
    }
}
`;
export const Name = styled.p `
color: #EA3A60;
text-align: center;
margin-bottom: 25px;
font-weight: 500;
`;
export const Date = styled.p `
opacity: 0.9;
`;
export const Box = styled.div `
box-shadow: rgb(38 78 118 / 12%) 0px 4px 10px;
transition: all 0.3s ease-in-out;
&:hover{
    box-shadow: rgb(38 78 118 / 27%) 0px 4px 10px;
    transition: all 0.3s ease-in-out;
}
`;
export const MainBlog = styled.div `
margin-bottom: 80px;
`;