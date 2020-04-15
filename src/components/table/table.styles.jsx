import styled from 'styled-components';
export const Th = styled.th`
font-weight: 600;
font-size: 1em;
line-height: 30px;
border-top: 0;
border-right: 0;
border-bottom: 1px solid #ddd;
border-left: 0;
margin-right:20px;
box-sizing: content-box;
text-align:center;
border :1px solid gray;
border-collapse: collapse;
`;
export const Span = styled.span`
just-content:space-between;
box-sizing: content-box;
`;
export const Tr = styled.tr`
box-sizing: content-box;
display: table-row;
vertical-align: inherit;
border-color: inherit;
margin-top:10px;
width:100%;
`;
export const Thead = styled.thead`
border-color: #ddd;
border: 1px solid gray;
`;
export const Tablle = styled.table`
border-top: 0 hidden transparent;
border-left: 0 hidden transparent;
border-right: 0 hidden transparent;
border-bottom: 0 hidden transparent;
width: 100%;
box-sizing: border-box;
table-layout: fixed;
border-collapse: collapse;
border-spacing: 0;
`;