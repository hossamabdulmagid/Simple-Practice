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

`;


export const Coltwo = styled.div`
margin: 0 auto;
padding-top:14px;
width: auto;
height:45px;
display:inline;
position: relative;
text-align:center;
padding-left:29%;
`;


export const Colthree = styled.div`
margin: 0 auto;
padding-top:14px;
width: auto;
height:45px;
display:flex;
position: relative;
text-align:left;
`;

export const H2 = styled.h2`
white-space: nowrap;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    margin-top: 4px;
`;

export const Select = styled.select`

width: 130px;
    margin: 3px 0 0 3px;
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



export const ColFour = styled.div`
margin: 0 auto;
padding-top:3px;
width: auto;
height:45px;
display:inline;
postion:realtive;
text-align:right;
padding-left:10%;
`;