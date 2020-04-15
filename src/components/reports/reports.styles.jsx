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
font-family: "Open Sans",Helvetica,Arial,sans-serif;
font-size: 13px;
color: #444;
border: 1px solid #d7d7d7;
display:fix;
margin:10px;
padding:35px;
margin-bottom:35px;
`;
export const ContainerRight = styled.div`
text-align:center;
`;

export const ContainerLeft = styled.div`
text-align:center;

`;

export const ContainerCenter = styled.div`
margin-left:15%;
margin-right:15%;
text-align:center;
`;


export const LinkedOptions = styled(Link)``;