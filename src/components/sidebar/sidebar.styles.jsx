import styled from 'styled-components';
import { Link } from 'react-router-dom'
export const Side = styled.div`
height:50%;
display:row;
width:180px;
margin-left:2%;
text-align:left;
border-right:1px solid darkgrey;
`;
export const LinkOption = styled(Link)`
display: inline-flex;
align-items: center;
padding: 6px 12px;
color: #747474;
font-size: 12px;
border: 1px solid darkgrey;
border-radius: 4px;
margin-top :25px;
&:hover{
    color:black;
    text-decoration:none;
}
`;
export const SidebarLink = styled(Link)`
color: #333;
font-weight: 600;
display: flex;
align-items: center;
color: #444;
line-height: 20px;
font-size: 14px;
font-weight: 400;
padding: 6px 0 6px 13px;
text-decoration: none;
border-radius: 3px;
margin-top:10px;
margin-bottom:10px;
&:hover{
    background-color: #f2f2f2;
    text-decoration:none;
    color:black;
}
`;
export const Span = styled.span`
display: inline;
margin-left: 2px;
line-height: 16px;
padding-right:11px;
font-size:13px
`;