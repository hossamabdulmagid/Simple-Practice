import styled from 'styled-components';
import { Link } from 'react-router-dom'
export const SidebarContainer = styled.div`
text-align:center;
border-right:1px solid darkgrey;
`;
export const LinkOption = styled(Link)`
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
display: flex;
align-items: center;
color: #444;
line-height: 20px;
font-size: 14px;
font-weight: 400;
padding: 6px 0 6px 0px;
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
export const H4style = styled.h4`
font-weight: 600;
font-size: 12px;
margin-bottom: 12px;
text-align:left;
`;
export const ViewedLinks = styled(Link)`
font-size: 14px;
font-weight: 400;
white-space: nowrap;
overflow: hidden;
color: #1371c8;
text-decoration: none;
display:block;
text-align:left;
`;
export const ContainerList = styled.div`
margin-right:0px;
text-align:right;
`;
export const Ul = styled.ul`
list-style:none;
text-align:left;
`;
export const Li = styled.li`
margin-top:15px;
margin-bottom:15px;
`;
