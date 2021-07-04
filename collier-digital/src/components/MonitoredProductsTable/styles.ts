import styled from 'styled-components';
import {Table} from 'antd';

export const StyledTable = styled(Table)`
.ant-table-thead > tr > th {
    text-align: left;
    font: normal normal 600 14px/21px Poppins;
    letter-spacing: 0px;
    color: #727272;
    opacity: 1;
}
`
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
export const StyledNumber = styled.span`
    font: normal normal 300 14px/21px Poppins;
    letter-spacing: 0px;
    color: #727272;
    opacity: 1;
`;
export const ProgressContainer = styled.div`
     width: 81px;
     margin-right: 10px;
    

`