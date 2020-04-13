import styled from 'styled-components';
import { Link } from 'react-router-dom'
export const Logo = styled.img`
max-height: 23px;
margin:12px;
width:10%;
`;
export const LinkLogo = styled(Link)`
text-align: center;
font-size: 35px;
line-height: 39px;
display: block;
font-weight: 400;
`;
export const HeaderColor = styled.div`
width:100%;
background-color:#1371C8;
text-align:center;
`;
export const LinkOption = styled(Link)`
position: relative;
font-size: 10px;
float: right !important;
color: #2b8ed8;
text-decoration: none;
border-spacing: 0;
font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 13px;   
line-height: 1.42857;
margin:5px;
`;
export const DIV = styled.div`
margin:25px;
text-align:center;
`;
export const H4style = styled.h4`
text-decoration: none;
font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
text-align: center;
margin-top: 50px;
font-size: 27px;
margin-bottom: 10px;
color: #13191c;
line-height: 1.25;
`;
export const Section = styled.section`
width: 400px;
background: #fff;
height:320px;
margin-left: auto;
margin-right: auto;
border: 1px solid #ccd4de;
box-shadow: 0 2px 3px rgba(0,0,0,0.075);
padding:30px;
`;
export const Form = styled.form`
margin:0 auto
`;
export const LabelEmail = styled.label`
margin:2px;
margin-right:20%;
font-weight:bold;
`;
export const LabelPassword = styled.label`
margin:1px;
margin-right:20%;
margin-bottom:5px;
font-weight:bold;
`;
export const Input = styled.input`
overflow: visible;
margin-bottom: 2px;
border: 1px solid #bf3604;
border-color: #ccd4de;
box-shadow: 0 1px 2px rgba(0,0,0,0.05) inset;
display: block;
width: 100%;
height: 34px;
font-size: 14px;
line-height: 1.42857;
color: #555555;
background-color: #fff;
background-image: none;
border-radius: 4px;
margin:0 auto;
`;
export const DivRapperedLinks = styled.div`
margin:10px;
font-size:15px;
margin-top: 20px;
font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 13px;
text-align:center;
`;
export const LinkSignIn = styled(Link)`
text-align:center;
display: block;
width: 100%;
background-color: #fa8526;
margin-top: 30px;
padding: 10px 0;
color: #fff;
font-size: 17px;
font-weight: 600;
outline: none;
border-radius:4px;
&:hover{
 color:white;
 text-decoration:none;
}
`;
export const Linked = styled(Link)`
&:hover{
    text-decoration:none;
}
`;
export const Phargraph = styled.p`
margin-top:15px;
text-align:center;
font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 11px;
color: #717171;
`;
export const Footer = styled.div`
display:block;
margin:15px
`;
