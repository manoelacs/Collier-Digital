import styled from 'styled-components';
import {Table} from 'antd';

export const StyledTable = styled(Table)`


    .ant-table-thead tr th {
        text-align: left;
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        font-family: 'Poppins', sans-serif;
        letter-spacing: 0px;
        color: var(--unnamed-color-727272);
        opacity: 1;    
        white-space: pre;
        size: auto;
        width: 100px;
        ::before{
            display: none;
        }
        
    };
    .ant-table-tbody  tr  td {
        font: normal normal 300 14px/21px 'Poppins';
    letter-spacing: 0px;
    color: #727272;
    opacity: 1;
    }
    .ant-table-thead  tr  th,
    .ant-table-tbody  tr  td,
    .ant-table tfoot  tr  th,
    .ant-table tfoot  tr  td {
        padding: 10px 10px;

    }


`;
export const StyledHeaderDivider = styled.div`
    display: inline-block;
    height: 20px;
    border: 1px solid #E8E8E8;
    margin-right: 5px;
   
`;
export const StyledColumnItem = styled.div`
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: space-around;
     //width:150px;
`
export const StyledNumberBold = styled.span`
    font: normal normal 600 14px/21px 'Poppins';
    letter-spacing: 0px;
    color: #727272;
    opacity: 1;
`;
export const StyledNumber = styled.span`
    font: normal normal 300 14px/21px 'Poppins';
    letter-spacing: 0px;
    color: #727272;
    opacity: 1;
`;

export const ProgressContainer = styled.div`
     width: 81px;
     margin-right: 5px;
     height: 30px;
     display: inline-table;
     
     .ant-progress {
       line-height: 0;
        display: table-row;  
     }   
     

`;
export const Div = styled.div`
    display: inline-table;
    flex-direction: column;
`;