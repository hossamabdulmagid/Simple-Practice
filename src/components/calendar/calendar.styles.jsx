import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Button = styled.button`
display:inline;
`;
export const Col = styled.div`
margin: 0 auto;
padding-top:14px;
width: auto;
height:45px;
display:inline;
position: relative;
text-align:left;
`;
export const Coltwo = styled.div`
margin: 0 auto;
padding-top:14px;
width: auto;
height:45px;
display:inline;
position: relative;
text-align:center;
margin-left:19%;
`;
export const Colthree = styled.div`
margin: 0 auto;
padding-top:14px;
height:45px;
display:flex;
position: relative;
text-align:left;
margin-right:6%;
just-content: space-betwen;
margin-bottom:22px;

`;
export const H2 = styled.h2`
white-space: nowrap;
font-weight: 400;
font-size: 20px;
line-height: 25px;
margin-top: 4px;
`;
export const Select = styled.select`
width: 120px;
margin: 3px 3px 3px 3px;
just-content: space-betwen
outline: 0;

`;
export const LinkOption = styled(Link)`
padding:3px;
color: gray;
background-color: #F7F7F8;
padding-left:15px;
margin-left:15px;
margin-right:15px;
text-shadow: none;
&:hover{
    border-color: rgba(0,0,0,.25) rgba(0,0,0,.25) rgba(0,0,0,.35);
}
`;
export const IMG = styled.img`
width:125%;
margin-top:35px;
`;
