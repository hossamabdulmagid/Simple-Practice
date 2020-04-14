import styled from 'styled-components';
import { Link } from 'react-router-dom'
export const HeaderContainer = styled.div`
background-color:#1371C8;
align-items: center;
display: flex;
height:55px;
justify-content: space-between;


`;
export const LinkLogo = styled(Link)`
font-size: 35px;
line-height: 39px;
display: block;
font-weight: 400;
`;
export const Logo = styled.img`
max-height: 23px;
margin:12px;
width: 166px;
margin-left: 20px;
`;
export const Input = styled.input`
box-sizing: border-box;
width: 180px;
height: 32px;
margin: 0;
padding: 0 0 1px 34px;
border: none;
background-color: #0e5291;
font-size: 14px;
border-radius: 16px;
transition: background-color .3s ease-in-out, width .3s ease-in-out;
color:white;
&:hover{
    width:400px;
    background-color: white;
    color:blue;
    }
`;
export const RapperdLink = styled.div`
box-sizing: border-box;
display: flex-end;
position: relative;
align-items:center;
position: absolute;
justify-content: space-between;   
margin-left: 0px;
display: flex;
align-items: left;
position: relative;
width:25%;
`;
export const LinkOption = styled(Link)`
display: flex;
box-sizing: border-box;
border: 1px solid transparent;
border-radius: 4px;
color: #fff;
font-size: 12px;
font-weight: 600;
padding: 7px 12px;
&:hover{
    background-color: #0e5291;
    text-decoration:none;
    color:white;
}
`;
export const Span = styled.span`
display: inline;
margin-left: 0px;
line-height: 16px;
padding-right:0px;
font-size:13px
`;
export const LinkStyles = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
padding: 6px 12px;
font-size: 12px;
line-height: 16px;
font-weight: 600;
color: #fff;
border: solid 2px transparent;
border-radius: 4px;
background-image: linear-gradient(101deg, #ffc7c9, #75d7ef);
background-origin: border-box;
box-shadow: inset 2px 1000px #1371c8;
transition: all .3s ease;
&:hover{
    text-decoration: none;
    color:white;
    background-color:white;
}
`;
export const DivContainer = styled.div`
flex-grow:2;

`;