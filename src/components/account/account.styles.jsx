import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const H2 = styled.h2`
font-size: 20px;
font-weight: 400;
line-height: 37px;
color: #333;
margin-top:10px;
`;
export const Container = styled.div`
display: flex;
flex-direction: column;
min-height: 0;
`;
export const Ul = styled.ul`
display: flex;
padding: 0;
margin: 0 0 20px;
border-bottom: 1px solid #d7d7d7;
list-style:none;
`;
export const Li = styled.li`
display: inline-block;
margin-right: 33px;
`;
export const LinkOption = styled(Link)`

&:hover{
    color:black;
    text-decoration:none;
}
`;
export const RapparForm = styled.div`
display:flex;
just-content: space-between;
margin:2px;
padding:5px;
background-color:#FAFBFB;
border-radius: 3px;
height:85px;
`;
export const InPut = styled.input`
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
padding: 0 10px 1px;
box-shadow: inset 0 2px 1px 0 rgba(116,135,162,.1);
transition: border-color linear .2s,box-shadow linear .2s;
height: 37px;
font-size: 14px;
box-sizing: border-box;
border-radius: 3px;
background-color: #fff;
border: 1px solid #ccd4de;
outline: 0;
margin-top:2%;
color: #555;
`;
export const FForm = styled.form`
width:15%;
margin-left:1%;
display:inline;
padding-top:2%;
`;
export const FFForm = styled.form`
width:14%;
margin-left: 40%;
display:inline;
padding-top:0%;
`;
export const Col = styled.div`
border-bottom: 1px solid gray;
padding-top:20px;
`;
export const LinkOptionz = styled(Link)`
padding:5px;
`;